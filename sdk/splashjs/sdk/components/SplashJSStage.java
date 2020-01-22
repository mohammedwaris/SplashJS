package splashjs.sdk.components;

import javafx.scene.*;

public class SplashJSStage extends javafx.stage.Stage {

	public SplashJSStage(String js) {
		SplashJSWebView splashJSWebView = new SplashJSWebView(js);
		Scene scene = new Scene(splashJSWebView.getWebView(), 550, 400);
		setScene(scene);
	}
}