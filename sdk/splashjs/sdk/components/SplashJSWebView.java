package splashjs.sdk.components;


import java.io.*;

public class SplashJSWebView {

	private javafx.scene.web.WebView webView;
	private SplashJSWebEngine splashJSWebEngine;
	private String stageOwnerName = "myDiv";
	private int width = 550;
	private int height = 400;
	private String baseURL = "";
	private String initJSCode = "";
	
	public SplashJSWebView() {
		this("");
	}
	
	public SplashJSWebView(String initJSCode) {
		this.initJSCode = initJSCode;
		webView = new javafx.scene.web.WebView();
		splashJSWebEngine = new SplashJSWebEngine(this);
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				System.out.println("Console: [" + sourceId + ":" + lineNumber + "] " + message);
			}
		});
		splashJSWebEngine.loadContent(getHTMLText(stageOwnerName, width, height, baseURL, initJSCode), "text/html");
		
	}
	
	public SplashJSWebEngine getEngine() {
		return this.splashJSWebEngine;
	}
	
	public javafx.scene.web.WebView getMe() {
		return this.webView;
	}
	
	public javafx.scene.web.WebView getWebView() {
		return this.webView;
	}
	
	private String getSplashCoreLibJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "splashjs-core-lib.js";
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
	
	public String getInitJSText() {
		return this.initJSCode;
	}
	
	private String getCoreClassesJSText() {
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
	
	private String getHTMLText(String stageOwnerName, int width, int height, String baseURL, String jsCode) {
		String endch = "\r\n";
		String divStyle = " style='border:1px dotted blue;width:" + "100%" + ";height:" + "100%" + ";'";
		String divs = "<div id='" + stageOwnerName + "'" +  divStyle + "></div>";
		//String divs = "<p id='text'></p>\r\n";
		//System.out.println("b " + baseURL);
		String cssText = "body {" + endch;
				cssText += "margin: 0;" + endch;
				cssText += "padding: 0;" + endch;
				cssText += "overflow: hidden;" + endch;
				cssText += "width: 100%;" + endch;
				cssText += "height: 100%;" + endch;
				cssText += "}" + endch;
		
		String scriptText = "<script type='text/javascript'>" + getSplashCoreLibJSText() + "</script>";
			   scriptText += "<script type='text/javascript'>" + getCoreClassesJSText() + "</script>";
			   
		String htmlText = "<!Doctype html>" + endch;
			   htmlText += "<html>" + endch;
			   htmlText += "<base href='" + baseURL + "'>" + endch;
			   htmlText += "<head>" + endch;
			   htmlText += "<style>" + endch;
			   htmlText += cssText + endch;
			   htmlText += "</style>" + endch;
			   htmlText += scriptText + endch;
			   htmlText += "</head>" + endch;
			   htmlText += "<body>" + endch;
			   //htmlText += "<audio id='sound' controls='' src='sounds/abc.mp3' style='position: absolute; display: inline-block; margin: 0px; padding: 0px; transform: scale(1, 1) skew(0deg, 0deg) rotate(0deg); left: 0px; top: 0px; transform-origin: 0px 0px; visibility: visible; opacity: 1; border: 1px solid blue;'></audio>";
			  // htmlText += divs + endch;
			  // htmlText += "<script>document.getElementById('sound').addEventListener('canplaythrough', function(){console.log('outer sound loaded');});</script>";
			  if(initJSCode != null && !initJSCode.isEmpty()) {
			 	   htmlText += "<script type='text/javascript'>" + initJSCode + "</script>";
			   }else{
				  // htmlText += "<script type='text/javascript'>var stage = new Stage('myDiv', 550, 400);</script>";
			   }
			   htmlText += "</body>" + endch;
			   
			   htmlText += "</html>";
			   
			   return htmlText;
	}

}