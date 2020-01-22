package splashjs.sdk;

import javafx.application.*;
import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.web.*;
import javafx.beans.value.*;

import netscape.javascript.JSObject;

import java.io.*;
import java.net.*;
import java.util.*;

public class BrowserViewer extends Application {
	
	String name;
	String mainJS;
	int width;
	int height;
	String parent;
	String endch = "\r\n";
	
	ConsoleWindow consoleWindow = null;
	Console console = null;
	
	public static void main(String args[]) {
		launch(args);
	}

	public void start(Stage primaryStage) {
		Map<String, String> parameters = getParameters().getNamed();
		name = AppJSON.getName();
		mainJS = AppJSON.getMainJS();
		width = AppJSON.getWidth();
		height = AppJSON.getHeight();
		parent = AppJSON.getParent();
		
		WebView webView = new WebView();
		WebEngine webEngine = webView.getEngine();
		System.out.println(getHTMLText());
		webEngine.loadContent(getHTMLText(), "text/html");
		
		
		
		
		
		webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {		
					//String code = "document.documentElement.innerHTML;";
					//System.out.println(webEngine.executeScript(code));	
					primaryStage.show();
					consoleWindow.showAndWait();
				}
			}
		});
		
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				//System.out.println("Console: [" + sourceId + ":" + lineNumber + "] " + message);
				consoleWindow.printText("[" + sourceId + ":" + lineNumber + "] " + message);
			}
		});
		
		consoleWindow = new ConsoleWindow(primaryStage);
		console = new Console(consoleWindow);
		Scene scene = new Scene(webView, width, height);
		primaryStage.setScene(scene);
		primaryStage.setTitle("Splash Player");
		
		
		
		
	}
	
	private String getFlashJSLibText() {
		StringBuilder libText = new StringBuilder();
		String libName = "splash.js";
		try {
			InputStream in = getClass().getClassLoader().getResourceAsStream(libName);
			libText = new StringBuilder();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String read;

			while ((read=br.readLine()) != null) {

				libText.append(read);
			}
			libText.append(getClassesJSText());
			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return libText.toString();
	}
	
	private String getClassesJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "classes-browser.js";
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
	
	public String getInitAppJSText() {
		String text = "(function() {" + endch;
				text += "var app = splash.getApplication();" + endch;
				text += "var stage = app.createStage(\"" + AppJSON.getParent() + "\", " + width + ", " + height + ");" + endch;
				text += "var userApp = new " + mainJS.substring(0, mainJS.lastIndexOf(".")) + "();" + endch;
				text += "stage.addChild(userApp.getMe());" + endch;
				text += "})();" + endch;
		return text;
	}
	
	private String getHTMLText() {
		File baseURL = new File(new File(mainJS).getAbsolutePath()).getParentFile();
		String baseURLPath = "";
		try {
			baseURLPath = baseURL.toURI().toURL().toString();
		}catch(MalformedURLException e) {
			e.printStackTrace();
		}
		//System.out.println(baseURLPath);
		
		String styleText = "body" + endch;
				styleText += "{" + endch;
				styleText += "margin: 0;" + endch;
				styleText += "padding: 0;" + endch;
				styleText += "overflow: hidden;" + endch;
				styleText += "width: 100%;" + endch;
				styleText += "height: 100%;" + endch;
				//styleText += "background-color: olive;" + endch;
				styleText += "}" + endch;
		String scriptText = "<script type=\"text/javascript\">" + getFlashJSLibText()  + "</script>" + endch;
				for(String path: getResourcesJSFilePaths()) {
					scriptText += "<script type=\"text/javascript\" src=\"" + path + "\"></script>";
				}
				scriptText += "<script type=\"text/javascript\" src=\"" + AppJSON.getMainJS() + "\"></script>";
				scriptText += "<script type=\"text/javascript\">" + getInitAppJSText() + "</script>";
		//String divStyle = "border:0px dotted green;position:absolute;top:0px;left:0px;right:0px;bottom:0px;";
		//String div = "<div id=\"" + stageOwnerName + "\" style=\"" + divStyle + "\"></div>";
		String baseURLText = "<base href=\"" + baseURLPath + "\">";
		String htmlText = "<!Doctype html>" + endch;
				htmlText += "<html>" + endch;
				htmlText += "<head>" + endch;
				htmlText += baseURLText + endch;
				htmlText += "<style>" + endch;
				htmlText += styleText + endch;
				htmlText += "</style>" + endch;
				htmlText += "</head>" + endch;
				htmlText += "<body>" + endch;
				//htmlText += div + endch;
				htmlText += scriptText + endch;
				htmlText += "</body>" + endch;
				htmlText += "</html>";
				
		return htmlText;
	}

}