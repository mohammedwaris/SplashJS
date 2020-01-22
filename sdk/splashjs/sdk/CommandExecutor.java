package splashjs.sdk;

import java.awt.*;
import java.net.*;
import javafx.application.*;

import java.io.*;
import java.nio.file.*;

public class CommandExecutor {
	
	Message message;
	
	
	public CommandExecutor() {
		
		
		message = new Message();
		
		
	}
	
	
	
	public void executeCreateCommand(String appName) {
			
		File jsFile = new File(AppJSON.getMainJS());
		File jsonFile = new File("app.json");
		
		if(jsFile.exists()) {
			message.print("Error: " + jsFile.getName() + " file already exists");
		}else if(jsonFile.exists()){
			message.print("Error: " + jsonFile.getName() + " file already exists");
		}else{
			try{
				FileWriter fw = new FileWriter(jsFile);
				fw.write("");
				fw.close();
				fw = new FileWriter(jsonFile);
					String jsonText = "{ \r\n";
					jsonText += " \"name\": \"" + appName + "\", \r\n";
					jsonText += " \"jsFile\": \"" + appName + ".js\" \r\n";
					jsonText += "} \r\n";
				fw.write(jsonText);
				fw.close();
				message.print("App created");
			}catch(IOException e){
				message.print(e.getMessage());
			}
		}
	}

	public void executeViewCommand(String platform) {
		
		
		
		if(platform.equalsIgnoreCase("browser")) {
			Application.launch(BrowserViewer.class);
		}else if(platform.equalsIgnoreCase("desktop")) {
			Application.launch(DesktopViewer.class);
		}
		
	}
	
	public void executeBuildCommand(String platform) {
		if(platform.equalsIgnoreCase("desktop")) {
			new DesktopBuildAndRun().build();
		}
	}
	
	public void executeRunCommand(String platform) {
		
		
			
			
			if(platform.equalsIgnoreCase("browser")){
				
				checkAndCreateDirectoryForBrowserPlatform();
				copySplashLibFileForBrowserPlatform();
				copyMainJSFile();
				copyResources();
				String htmlFilePath = writeHTMLFile(getHTMLText());
				
				File htmlFile = new File(htmlFilePath);
				try {
					Desktop.getDesktop().browse(htmlFile.toURI());
				}catch(IOException e) {
					e.printStackTrace();
				}
			}
			

	}
	
	private void copySplashLibFileForBrowserPlatform() {
		//String originalLibFilePath = "../flashjs_sdk/target/js/bundle.js";
		String copiedLibFilePath = "platforms" + File.separator + "browser" + File.separator + "js" + File.separator + "splash-lib.js";
		FileWriter fw = null;
		try {
			
			//File originalLibFile = new File(originalLibFilePath);
			File copiedLibFile = new File(copiedLibFilePath);
			fw = new FileWriter(copiedLibFile);
			fw.write(getFlashJSLibText());
			//Files.copy(originalLibFile.toPath(), copiedLibFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
			
		}catch(IOException e) {
			e.printStackTrace();
		}finally {
			try{
				fw.close();
			}catch(Exception e) {
			}
		}
		
	}
	
	private String getFlashJSLibText() {
		StringBuilder libText = new StringBuilder();
		String libName = "splash.js";
		try {
			InputStream in = getClass().getClassLoader().getResourceAsStream(libName);
			libText = new StringBuilder();
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String read;

			while ((read=br.readLine()) != null) {
				//System.out.println(read);
				libText.append(read);
			}
			libText.append(getClassesJSText());
			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		
		return libText.toString();
	}
	
	private String getClassesJSText() {
		StringBuilder libText = new StringBuilder();
		String libName = "classes-browser.js";
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
	
	private void copyMainJSFile() {
		File copiedMainJSFile = new File("platforms" + File.separator + "browser" + File.separator + AppJSON.getMainJS());
		File originalMainJSFile = new File(AppJSON.getMainJS());
		try {
			Files.copy(originalMainJSFile.toPath(), copiedMainJSFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	private void copyResources() {
		try {
			File imagesDir = new File("images");
			if(imagesDir.exists()) {
				for(File originalFile: imagesDir.listFiles()) {
					File copiedFile = new File("platforms" + File.separator + "browser" + File.separator + "images" + File.separator + originalFile.getName());
					Files.copy(originalFile.toPath(), copiedFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
				}
			}
		}catch(IOException e) {
			e.printStackTrace();
		}
		
	}
	
	private String writeHTMLFile(String htmlText) {
		FileWriter writer = null;
		String htmlFilePath = "platforms" + File.separator + "browser" + File.separator + AppJSON.getName() + ".html";
		try {
			writer = new FileWriter(htmlFilePath);
			writer.write(htmlText);
		}catch(Exception e) {
			e.printStackTrace();
		}finally{
			try{
				writer.close();
			}catch(Exception e){}
		}
		
		return htmlFilePath;
	}
	
	private String getHTMLText() {
		String endch = "\r\n";
		String scriptText = "<script type=\"text/javascript\" src=\"js/splash-lib.js\"></script>" + endch;
			   scriptText += "<script type=\"text/javascript\" src=\"" + AppJSON.getMainJS() + "\"></script>";
		//String div = "<div id=\"" + appJSON.stageOwnerName + "\" style=\"width:" + appJSON.width + "px;height:" + appJSON.height + "px;\"></div>";
		String htmlText = "<!Doctype html>" + endch;
				htmlText += "<html>" + endch;
				htmlText += "<head>" + endch;
				htmlText += "</head>" + endch;
				htmlText += "<body>" + endch;
				//htmlText += div + endch;
				htmlText += scriptText + endch;
				htmlText += "</body>" + endch;
				htmlText += "</html>";
				
		return htmlText;
	}
	
	
	
	private void checkAndCreateDirectoryForBrowserPlatform() {
		File platformsDir = new File("platforms");
		File browserDir = null;
		File jsDir = null;
		File imagesDir = null;
		if(!platformsDir.exists() || !platformsDir.isDirectory()) {
			platformsDir.mkdir();
			browserDir = new File("platforms" + File.separator + "browser");
			browserDir.mkdir();
			jsDir = new File("platforms" + File.separator + "browser" + File.separator + "js");
			jsDir.mkdir();
			imagesDir = new File("platforms" + File.separator + "browser" + File.separator + "images");
			imagesDir.mkdir();
		}else {
			browserDir = new File("platforms" + File.separator + "browser");
			if(!browserDir.exists() || !browserDir.isDirectory()) {
				browserDir.mkdir();
				jsDir = new File("platforms" + File.separator + "browser" + File.separator + "js");
				jsDir.mkdir();
			}else{
				for(File file: browserDir.listFiles()) {
					file.delete();
				}
				jsDir = new File("platforms" + File.separator + "browser" + File.separator + "js");
				jsDir.mkdir();
				imagesDir = new File("platforms" + File.separator + "browser" + File.separator + "images");
				imagesDir.mkdir();
			}
		}
	}
	
	
	
}//end of class