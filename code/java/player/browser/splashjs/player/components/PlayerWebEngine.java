package splashjs.player.components;

import java.util.*;

import netscape.javascript.JSObject;
import javafx.application.Platform;

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
					
					System.out.println("Content Loaded");	
					System.out.println(webEngine.executeScript("console.log(document.body.innerHTML);"));
					
					
					
					
					webEngine.executeScript(playerWebView.getSplashJSCoreLibJSText());
					webEngine.executeScript(playerWebView.getCoreClassesJSText());
					webEngine.executeScript(playerWebView.getMainJSText());
					webEngine.executeScript(playerWebView.getInitAppJSText());

					
					new Thread(new Runnable() {

						public void run() {
					
							Scanner sc = new Scanner(System.in);
							do {
								System.out.print("enter js code: ");
								String line = sc.nextLine();
								if(line.equalsIgnoreCase(".exit"))
									break;
								Platform.runLater(new Runnable() {
									public void run() {
										try{
											String out = (String)webEngine.executeScript(line);
											System.out.println(out);
										}catch(Exception e) {
											System.out.println(e.getMessage());
										}
									}
								});
							}while(true);
						}
						
					}).start();

					
					
				}
			}
		});
		
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				System.out.println("Console: [" + sourceId + ":" + lineNumber + "] " + message);
				//playerWebView.getConsole().log("[" + sourceId + ":" + lineNumber + "] " + message);
			}
		});
		
	}
	
}