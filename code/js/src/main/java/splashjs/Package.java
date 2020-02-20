package splashjs;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.js.Globals.eval;
import java.util.ArrayList;

public class Package {

	static Object clazz;
	static ArrayList<PackageData> packageData = new ArrayList<PackageData>();
	
	public static void define(String packageID, def.js.Array imports, def.js.Function classInFunc) {
		
		int numImports = (int)imports.$get("length");
		String importJSText = "";
		for(int i=0;i<numImports;i++) {
			String fullClazzName = (String)imports.$get(i);
			String onlyClazzName = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
			importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
		}
		
		def.js.Object userClass = classInFunc.$apply();
		String userClassName = userClass.$get("name");
		
		if(packageID == null || packageID.isEmpty()) {
			window.$set(userClassName, userClass);
		}else {
			String[] words = packageID.split(".");
			String js = "";
			String str = "";
			for(int i=0;i<words.length;i++) {
				if(i == 0) {
					window.$set(words[i], new def.js.Object());
					js = words[0] + " = "  + words[0] + " || {};";
					eval(js);
					str = words[0];
					//js = str + 
					System.out.println(js);
				}
				else if(i > 0) {
					
					str += "." + words[i];
					js = str + " = " + str + " || {};";
					eval(js);
					System.out.println(js);
				}
				//System.out.println(js);
				//eval(js);
			}
			str += "." + userClassName;
			js = str + " = " + userClass + ";";
			System.out.println(importJSText);
			eval(importJSText + js);
			System.out.println(js);
			//eval(js);
		}
		
		packageData.add(new PackageData(packageID, clazz));
	}
	
	
	/*
	public static void define(def.js.Function clazzDef) {

		
		def.js.Object clazzInfo = clazzDef.$apply();
		def.js.Object clazz = clazzInfo.$get("class");
		String clazzName = clazz.$get("name");
		def.js.Array imports = clazzInfo.$get("import");
		int numImports = (int)imports.$get("length");
		String importJSText = "";
		for(int i=0;i<numImports;i++) {
			String fullClazzName = (String)imports.$get(i);
			String onlyClazzName = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
			importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
		}
		
		
		
		
		String packageID = clazzInfo.$get("package");
		String js = "";
		String str = "";
		if(packageID.isEmpty()) {
			window.$set(clazzName, clazz);
		}else {
			String[] words = packageID.split(".");
			
			for(int i=0;i<words.length;i++) {
				if(i == 0) {
					window.$set(words[i], new def.js.Object());
					js = words[0] + " = "  + words[0] + " || {};";
					eval(js);
					str = words[0];
					//js = str + 
					System.out.println(js);
				}
				else if(i > 0) {
					
					str += "." + words[i];
					js = str + " = " + str + " || {};";
					eval(js);
					System.out.println(js);
				}
				//System.out.println(js);
				//eval(js);
			}
			str += "." + clazzName;
			js = str + " = " + clazz + ";";
			System.out.println(importJSText);
			eval(importJSText + js);
			System.out.println(js);
			//eval(js);
		}
		packageData.add(new PackageData(packageID, clazz));
	}
	*/
	static class PackageData {
		Object packageID;
		Object clazz;
		
		PackageData(String packageID, Object clazz) {
			this.packageID = packageID;
			this.clazz = clazz;
		}
	}
}