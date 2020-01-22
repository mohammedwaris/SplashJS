package splashjs.player.components;

import java.io.*;
import java.util.ArrayList;

import splashjs.sdk.AppJSON;
import splashjs.sdk.iface.IConsole;


public class PlayerWebView {

	javafx.scene.web.WebView webView;
	javafx.scene.web.WebEngine webEngine;
	
	private PlayerWebEngine playerWebEngine;
	final String ENDLINE_CHAR = "\r\n";
	private String baseURL = "";
	private IConsole console;
	
	public PlayerWebView(IConsole console) {
		this.console = console;
		this.webView = new javafx.scene.web.WebView();
		this.playerWebEngine = new PlayerWebEngine(this, webView.getEngine());
		
		try {
			System.out.println(AppJSON.getPath());
			this.baseURL = AppJSON.getPath();
		}catch(SecurityException se) {
			se.printStackTrace();
			this.console.log(se.getMessage());
		}catch(Exception e) {
			e.printStackTrace();
			this.console.log(e.getMessage());
		}
		this.webView.getEngine().load("http://localhost:8090");
	}
	
	public IConsole getConsole() {
		return this.console;
	}
	
	public javafx.scene.web.WebView getWebView() {
		return this.webView;
	}
	
	private String getHTMLText() {
		String scriptText  = "";
			   scriptText += "<script type=\"text/javascript\" src=\"" + getSplashJSCoreLibJSFilePath() + "\"</script>" + ENDLINE_CHAR;
			   //scriptText += "<script type=\"text/javascript\">" + getSplashJSCoreLibJSText() + "</script>" + ENDLINE_CHAR;
			   scriptText += "<script type=\"text/javascript\">" + getCoreClassesJSText() + "</script>" + ENDLINE_CHAR;
		String styleText  = "<style>";
			   styleText += "html {";
			   styleText += "width: 100%;";
			   styleText += "height: 100%;";
			   styleText += "}";
			   styleText += "body {";
			   styleText += "width:100%;";
			   styleText += "height: 100%;";
			   styleText += "margin: 0;";
			   styleText += "padding: 0;";
			   styleText += "overflow: hidden;";
			   styleText += "border: 0px solid red;";
			   styleText += "}";
			   styleText += "</style>";
		ArrayList<String> jsFilePaths = getResourcesJSFilePaths();
		for(int i=0;i<jsFilePaths.size();i++) {
			scriptText += "<script type=\"text/javascript\" src=\"" + jsFilePaths.get(i) + "\"></script>" + ENDLINE_CHAR;
		}
		scriptText += "<script type=\"text/javascript\" src=\"" + AppJSON.getMainJS() + "\"></script>" + ENDLINE_CHAR;
		scriptText += "<script type=\"text/javascript\">" + getInitAppJSText() + "</script>";
		String htmlText  = "<!Doctype html>" + ENDLINE_CHAR;
			   htmlText += "<head>" + ENDLINE_CHAR;
			   htmlText += "<base href=\"" + this.baseURL + "\">";
			   htmlText += styleText;
			   htmlText += "</head>" + ENDLINE_CHAR;
			   htmlText += "<body>" + ENDLINE_CHAR;
			   //htmlText += "<div id=\"splashDiv\"></div>";
			    htmlText += scriptText;
				htmlText += "<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/firebug-lite/1.4.0/firebug-lite.js'></script>";
			   htmlText += "</body>" + ENDLINE_CHAR;
			   htmlText += "</html>" + ENDLINE_CHAR;
			   
		return htmlText;
	}
	
	public String getInitAppJSText() {
		String jsClassName = AppJSON.getMainJS().substring(0, AppJSON.getMainJS().lastIndexOf("."));
		String js = "setTimeout(function() {";
			   js += "var stage = new splashjs.display.Stage(\"" + AppJSON.getParent() + "\", " + AppJSON.getWidth() + ", " + AppJSON.getHeight() + ");";
			   js += "stage.addChild(new " + jsClassName + "());" ;
			   js += "}, 5000);";
			   
		return js;
	}
	
	public String getMainJSText() {
		return getTextFromJSFile(AppJSON.getMainJS());
	}
	
	private String getTextFromJSFile(String jsFilePath) {
		StringBuilder jsText = new StringBuilder();
		try {
			InputStream in = new FileInputStream(new File(jsFilePath));
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
	
	private ArrayList<String> getResourcesJSFilePaths() {
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
	
	public String getMainJSFilePath() {
		//File file = new File(AppJSON.getMainJS());
		return AppJSON.getMainJS(); //file.getAbsoluteFile().toURI().toString();
	}
	
	private String getSplashJSCoreLibJSFilePath() {
		String path = getClass().getClassLoader().getResource("splashjs-lib.js").toExternalForm();
		return path;
	}
	
	public String getSplashJSCoreLibJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "splashjs-lib.js";
		
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
	
	public String getIndexHtmlText() {
		StringBuilder libText = new StringBuilder();
		String libName = "index.html";
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
	
	public String getCoreClassesJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "core-classes.js";
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