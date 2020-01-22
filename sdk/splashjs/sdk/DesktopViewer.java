package splashjs.sdk;

import java.util.*;
import java.io.*;
import java.net.*;
import javax.script.*;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.*;

import splashjs.sdk.components.*;




public class DesktopViewer extends Application {
	
	//ScriptRunner scriptRunner = new ScriptRunner();
	ConsoleWindow consoleWindow = null;
	Console console = null;

	
	String name;
	String mainJS;

	int width;
	int height;
	
	String endch = "\r\n";

	
			
	public void start(Stage primaryStage) {
		String js =  getTextFromJSFile(AppJSON.getMainJS()) + "\r\n" + getInitAppJSText();
		SplashJSStage splashJSStage = new SplashJSStage("");
		//SplashJSWebView splashJSWebView = new SplashJSWebView(js);
		//Scene scene = new Scene(splashJSWebView.getWebView(), AppJSON.getWidth(), AppJSON.getHeight());
		//splashJSStage.setScene(scene);
		splashJSStage.show();
		
	//	window = new DesktopWindow(getTextFromJSFile(AppJSON.getMainJS()) + getInitAppJSText());
		//window.activate();
	}
	

	
	
	/*
	public void start(Stage primaryStage) {
		
		Map<String, String> parameters = getParameters().getNamed();
		System.out.println(parameters);
		name = AppJSON.getName();
		mainJS = AppJSON.getMainJS();
		width = AppJSON.getWidth();
		height = AppJSON.getHeight();
		
		File baseURL = new File(new File(mainJS).getAbsolutePath()).getParentFile();
		String baseURLPath = "";
		try {
			baseURLPath = baseURL.toURI().toURL().toString();
		}catch(MalformedURLException e) {
			e.printStackTrace();
		}
		
		consoleWindow = new ConsoleWindow(primaryStage);
		console = new Console(consoleWindow);
		scriptRunner.exposeObject("console", console);
		scriptRunner.exposeObject("flashJS", new FlashJS());
		consoleWindow.show();
		DesktopStageOwner.baseURL = baseURLPath;
		ArrayList<String> jsFilePaths = null;
		String code = "";
		
		try {
			
			
			try {
				code = getClassesJSText();
				//code = getFlashJSLibText();
				scriptRunner.runJS(code);
			}catch(ScriptException se) {
				System.out.println("== Error Classes == "  + se.getMessage());
				//se.printStackTrace();
			}
			
			jsFilePaths = getResourcesJSFilePaths();
			
			for(int i=0;i<jsFilePaths.size();i++) {
				
				try{
					//code = getTextFromJSFile(jsFilePaths.get(i));
					//System.out.println(code);
					scriptRunner.runJSFile(jsFilePaths.get(i));
				}catch(ScriptException se) {
					System.out.println("== Error User Lib Class ==" + jsFilePaths.get(i) + " "  + se.getMessage());
					//se.printStackTrace();
				}
			}
			
			
			
			try{
				//code = getTextFromJSFile(mainJS);
				scriptRunner.runJSFile(mainJS);
			}catch(ScriptException se) {
				System.out.println("== Error main JS == " + se.getMessage());
				//se.printStackTrace();
			}
			
			try{
				code = getInitAppJSText();
				scriptRunner.runJS(code);
			}catch(ScriptException se) {
				System.out.println("== Error Init App == " + se.getMessage());
				//se.printStackTrace();
			}
						
			
		}catch(Exception e){
			console.log(e.getLocalizedMessage());
			
			//StackTraceElement[] ste = e.getStackTrace();
			//for(int i=0;i<ste.length;i++) {
				//console.log(ste[i].getFileName() + " " + ste[i].getLineNumber());
			//}
		}
		
	}*/
	
	
	
	public String getInitAppJSText() {
		String text = "(function() {" + endch;
				text += "var stage = new Stage(\"" + AppJSON.getParent() + "\", " + AppJSON.getWidth() + ", " + AppJSON.getHeight() + ");" + endch;
				text += "var userApp = new " + AppJSON.getMainJS().substring(0, AppJSON.getMainJS().lastIndexOf(".")) + "();" + endch;
				text += "stage.addChild(userApp);" + endch;
				text += "})();" + endch;
		return text;
	}
	
	public String getTextFromJSFile(String jsFilePath) {
		StringBuilder jsText = new StringBuilder();
		//String jsFile = "babel.min.js";
		try {
			InputStream in = new FileInputStream(new File(jsFilePath)); //getClass().getClassLoader().getResourceAsStream(libName);
			jsText = new StringBuilder();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String read;

			while ((read=br.readLine()) != null) {
				jsText.append(read);
			}

			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return jsText.toString();
		
	}
	
	public ArrayList<String> getResourcesJSFilePaths() {
		ArrayList<String> paths = new ArrayList<String>();
		File file = new File("resources");
		if(file.exists() && file.isDirectory()) {
			File jsDir = new File("resources" + File.separator + "js");
			if(jsDir.exists() && jsDir.isDirectory()){
				getJSFilePaths(paths, jsDir);
			}
		}
		return paths;
	}
	
	private void getJSFilePaths(ArrayList<String> paths, File file) {
		if(file.exists() && file.isDirectory()) {
			for(File js : file.listFiles()) {
				if(!js.isDirectory() && js.getName().endsWith(".js")) {
					paths.add(js.getPath());
				}else{
					getJSFilePaths(paths, js);
				}
			}
		}
	}
	
	private String getSplashDesktopLibJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "splashjs-desktop-lib.js";
		try {
			InputStream in = getClass().getClassLoader().getResourceAsStream(libName);
			libText = new StringBuilder();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String read;

			while ((read=br.readLine()) != null) {
				libText.append(read);
			}

			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return libText.toString();
	}
	
	private String getDesktopClassesJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "desktop-classes.js";
		try {
			InputStream in = getClass().getClassLoader().getResourceAsStream(libName);
			libText = new StringBuilder();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String read;

			while ((read=br.readLine()) != null) {
				libText.append(read);
			}

			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return libText.toString();
	}
}