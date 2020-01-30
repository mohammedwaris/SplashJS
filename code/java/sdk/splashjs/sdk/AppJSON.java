package splashjs.sdk;

import org.json.simple.*;
import org.json.simple.parser.*;

import java.io.*;

public class AppJSON {

		static String appJSONPath;
		static String name = "app";
		static String mainJS = "app.js";
		static int width = 550;
		static int height = 400;
		static String parent = "splashDiv";
		
		public static void init() {
			init("app-conf.json");
		}
		
		public static void init(String appJSONFilePath) {
			AppJSON.appJSONPath = appJSONFilePath;
			JSONObject readerJSONObject = null;
			JSONObject browserJSONObject = null;
			JSONParser jsonParser = null;
			FileReader reader = null;
			try {
				jsonParser = new JSONParser();
				reader = new FileReader(appJSONPath);
				
				readerJSONObject = (JSONObject)jsonParser.parse(reader);
				name = (String) readerJSONObject.get("name");
				mainJS = (String) readerJSONObject.get("mainJS");
				try{
					width = ((Long)readerJSONObject.get("width")).intValue();
				}catch(Exception e){}
				try{
					height = ((Long)readerJSONObject.get("height")).intValue();
				}catch(Exception e){}
				try{
					browserJSONObject = (JSONObject)readerJSONObject.get("browser");
					parent = (String)browserJSONObject.get("parent");
				}catch(Exception e){}
			}catch(IOException e) {
				e.printStackTrace();
			}catch(ParseException pe) {
				pe.printStackTrace();
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				try{
					reader.close();
				}catch(Exception e){}
			}
			
			
		}
		/*
		public AppJSON(String appJSONAsString, boolean isPath) {
			
			JSONParser jsonParser = null;
			FileReader reader = null;
			try {
				jsonParser = new JSONParser();
				//reader = new FileReader(appJSONPath);
				
				readerJSONObject = (JSONObject)jsonParser.parse(appJSONAsString);
				name = (String) readerJSONObject.get("name");
				jsFile = (String) readerJSONObject.get("jsFile");
			}catch(ParseException pe) {
				pe.printStackTrace();
			}finally{
				
			}
			
			
		}*/
		
		public static String getPath() throws SecurityException {
			String path = "";
			
			File file = new File(appJSONPath).getAbsoluteFile();
			File parentFile = file.getParentFile();
			path = parentFile.toURI().toString();
			
			return path;
		}
		
		public static String getName() {
			return name;
		}
		
		
		public static String getMainJS() {
			return mainJS;
		}
		
		public static String getMainJSClass() {
			return mainJS.substring(0, mainJS.lastIndexOf("."));
		}
		

		public static int getWidth() {
			return width;
		}
		

		public static int getHeight() {
			return height;
		}
		

		
		public static String getParent() {
			return parent;
		}
		
		
	}