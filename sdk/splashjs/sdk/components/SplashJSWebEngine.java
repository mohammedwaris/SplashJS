package splashjs.sdk.components;

import netscape.javascript.JSObject;

//import flashjs.sdk.*;
//import flashjs.display.desktop.DesktopWindow;

public class SplashJSWebEngine {
	
	private javafx.scene.web.WebEngine webEngine;
	private javafx.scene.web.WebView webView;
	private SplashJSWebView splashJSWebView;
	
	public SplashJSWebEngine(SplashJSWebView splashJSWebView) {
		this.splashJSWebView = splashJSWebView;
		this.webView = splashJSWebView.getWebView();
		this.webEngine = webView.getEngine();
		this.webEngine.setJavaScriptEnabled(true);
		//splashjs.display.DesktopWindow desktopWindow = new splashjs.display.DesktopWindow();
		this.webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {	
					
					
					JSObject window = (JSObject) webEngine.executeScript("window");
					try{
						window.setMember("NativeWindowStub", Class.forName("splashjs.sdk.components.SplashJSStage")); //new DesktopWindow(""));
						//System.out.println(splashJSWebView.getInitJSText());
						//webEngine.executeScript(splashJSWebView.getInitJSText());
					}catch(Exception e) {e.printStackTrace(); }
					//getRenderer().appendToBody();
					//setStageAsChild();
					//System.out.println(webEngine.executeScript("document.body.outerHTML;"));
					//getStage().getRenderer().createEventListeners();
					//getStage().dispatchEvent(new flashjs.events.impl.Event(EventName.STAGE_READY));
					//stage.show();
				}
			}
		});
	}
	
	public void loadContent(String htmlText, String mimeType) {
		this.webEngine.loadContent(htmlText, mimeType);
	}
	
	public javafx.scene.web.WebEngine getMe() {
		return this.webEngine;
	}

}