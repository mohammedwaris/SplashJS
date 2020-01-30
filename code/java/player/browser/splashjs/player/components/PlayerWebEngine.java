package splashjs.player.components;

import netscape.javascript.JSObject;

public class PlayerWebEngine {

	private javafx.scene.web.WebEngine webEngine;
	private PlayerWebView playerWebView;
	
	public PlayerWebEngine(PlayerWebView playerWebView, javafx.scene.web.WebEngine webEngine) {
		this.playerWebView = playerWebView;
		this.webEngine = webEngine;
		
		this.webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {		
					//String code = "document.documentElement.innerHTML;";
					//System.out.println(webEngine.executeScript(code));	
					//primaryStage.show();
					//consoleWindow.showAndWait();
					//JSObject window = (JSObject)webEngine.executeScript("window");
					//window.setMember("console", playerWebView.getConsole());
					webEngine.executeScript("document.body.innerHTML = \"\";");
					String js  = "var script = document.createElement(\"script\");";
						   js += "script.setAttribute(\"type\", \"text/javascript\");";
						   js += "script.setAttribute(\"src\", \"" + playerWebView.getMainJSFilePath() + "\");";
						   js += "document.body.appendChild(script);";
					webEngine.executeScript(playerWebView.getSplashJSCoreLibJSText());
					webEngine.executeScript(playerWebView.getCoreClassesJSText());
					webEngine.executeScript(js);
					//String code = "document.documentElement.innerHTML;";
					//System.out.println(webEngine.executeScript(code));
					webEngine.executeScript(playerWebView.getInitAppJSText());
						
				}
			}
		});
		
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				//System.out.println("Console: [" + sourceId + ":" + lineNumber + "] " + message);
				playerWebView.getConsole().log("[" + sourceId + ":" + lineNumber + "] " + message);
			}
		});
		
	}
	
}