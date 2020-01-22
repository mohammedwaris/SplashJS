package splashjs.display.desktop.stubs;

import javafx.scene.Scene;
import netscape.javascript.JSObject;

import splashjs.player.components.DesktopPlayerWebView;


public class NativeWindowStub extends javafx.stage.Stage {

	private DesktopPlayerWebView desktopPlayerWebView;
	
	public static boolean isSupported() {
		return true;
	}
	
	public NativeWindowStub() {
		desktopPlayerWebView = new DesktopPlayerWebView();
		Scene scene = new Scene(desktopPlayerWebView.getWebView(), 550, 400);
		setScene(scene);
	}
	
	public void activate() {
		show();
	}
	
	public DesktopPlayerWebView getDesktopPlayerWebView() {
		return this.desktopPlayerWebView;
	}
	
	public JSObject getStage() {
		return (JSObject)desktopPlayerWebView.getWebEngine().executeScript("window.splash_stage");
	}
	
	
}