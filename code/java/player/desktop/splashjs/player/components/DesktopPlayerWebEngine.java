package splashjs.player.components;

import netscape.javascript.JSObject;

public class DesktopPlayerWebEngine {

	private javafx.scene.web.WebEngine webEngine;
	private DesktopPlayerWebView desktopPlayerWebView;
	private String initJS = "";
	
	public DesktopPlayerWebEngine(DesktopPlayerWebView desktopPlayerWebView, javafx.scene.web.WebEngine webEngine) {
		this.desktopPlayerWebView = desktopPlayerWebView;
		this.webEngine = webEngine;
		
		this.webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {	
					JSObject window = null;
					try{
						window = (JSObject) webEngine.executeScript("splashjs.display.desktop.stubs");
						window.setMember("NativeWindowStub", Class.forName("splashjs.display.desktop.stubs.NativeWindowStub")); //new DesktopWindow(""));
						window = (JSObject) webEngine.executeScript("splashjs.filesystem.desktop.stubs");
						window.setMember("FileStub", Class.forName("splashjs.filesystem.desktop.stubs.FileStub"));
						//System.out.println(splashJSWebView.getInitJSText());
						//webEngine.executeScript(splashJSWebView.getInitJSText());
					}catch(Exception e) {e.printStackTrace(); }				
					//String code = "document.documentElement.innerHTML;";
					//System.out.println(webEngine.executeScript(code));	
					//primaryStage.show();
					//consoleWindow.showAndWait();
					//System.out.println(initJS);
					webEngine.executeScript(initJS);
				}
			}
		});
		
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				String msg = "Console: [" + sourceId + ":" + lineNumber + "] " + message;
				if(desktopPlayerWebView.getConsole() != null)
					desktopPlayerWebView.getConsole().log(msg);
				else
					System.out.println(msg);
			}
		});
		
	}
	
	public void setInitJS(String js) {
		this.initJS = js;
	}
	
}