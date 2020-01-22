package splashjs.sdk;

import javafx.application.*;
import javafx.stage.Stage;
import java.io.*;
import java.net.*;



public class DesktopPlayer extends Application {


	ScriptRunner scriptRunner = new ScriptRunner();
	Message message = new Message();
	
	public void start(Stage primaryStage) {
		
		
		String baseURLPath = "";
		try {
			//baseURLPath = baseURL.toURI().toURL().toString();
			baseURLPath = getClass().getClassLoader().getResource(AppJSON.getName()).toString();
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
		//scriptRunner.exposeObject("flashJS", new FlashJS());
		
		//DesktopStageOwner.baseURL = baseURLPath;
		
		
	}
	
	private String getAppJSONAsString() {
		StringBuilder libText = new StringBuilder();
		String libName = "app-conf.js";
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
	
	/*
	private void readAppJSONFile() {
		File file = new File(".");
		String fileName = "app.json";
		for(File f : file.listFiles()){
			if(f.getName().toLowerCase().endsWith("-conf.json")) {
				fileName = f.getName();
				break;
			}
		}
		message.print("Reading configuration file... " + fileName);
		appJSON = new AppJSON(fileName);
	}*/
	
	private String getClassesJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "classes-desktop.js";
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
	
	private String getMainJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = AppJSON.getMainJS() ;//"classes-desktop.js";
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