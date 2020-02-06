package splashjs.player;


import java.nio.*;
import java.nio.file.*;

import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;

import splashjs.sdk.iface.IConsoleWindow;
import splashjs.sdk.iface.IConsole;
import splashjs.sdk.ConsoleWindow;
import splashjs.sdk.Console;
import splashjs.sdk.AppJSON;
import splashjs.player.components.PlayerWebView;
import splashjs.sdk.server.*;

public class Player extends Application {

	IConsoleWindow consoleWindow;
	IConsole console;
	PlayerWebView playerWebView;
	
	public void start(Stage primaryStage) {
		AppJSON.init();
		consoleWindow = new ConsoleWindow(primaryStage);
		console = new Console(consoleWindow);
		SplashJSWebServer webServer = new SplashJSWebServer(".");
		int localPort = webServer.startServer();
		playerWebView = new PlayerWebView(console, localPort);
		//try {
		
		//Files.write(Paths.get("index.html"), playerWebView.getIndexHtmlText().getBytes());
			
		//}catch(Exception e) {
			//e.printStackTrace();
		//}
		//new EmbeddedServer(".").start();
		
		
		
		Scene scene = new Scene(playerWebView.getWebView(), AppJSON.getWidth(), AppJSON.getHeight());
		primaryStage.setScene(scene);
		primaryStage.setTitle("SplashJS Player");
		primaryStage.show();
		consoleWindow.showAndWait();
	}
	
}