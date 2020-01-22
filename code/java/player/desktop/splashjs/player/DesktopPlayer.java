package splashjs.player;

import java.io.*;
import netscape.javascript.JSObject;

import javafx.application.Application;
import javafx.stage.Stage;

import splashjs.sdk.AppJSON;
import splashjs.display.desktop.stubs.NativeWindowStub;

public class DesktopPlayer extends Application {

	NativeWindowStub nativeWindow;
	
	public void start(Stage primaryStage) {
		AppJSON.init();
		nativeWindow = new NativeWindowStub();
		nativeWindow.activate();
		String js = getTextFromJSFile(AppJSON.getMainJS()) + "\r\n";
			js += "(function() {";
			js += "setTimeout(function() {";
			js += "splash_stage.addChild(new CatApp());";
			js += "}, 5000);";
			js += "})();";
		nativeWindow.getDesktopPlayerWebView().setInitJS(js);
		/*new java.util.Timer().schedule(new java.util.TimerTask() {
			public void run() {
				javafx.application.Platform.runLater(new Runnable() {
					public void run() {
						JSObject stage = nativeWindow.getStage();
						System.out.println("stage: " + stage);
						nativeWindow.getDesktopPlayerWebView().getWebEngine().executeScript("console.log(userApp)");
						stage.call("addChild", "userApp"); 
					}
				});
			}
		}, 10000);*/
		
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

}