package splashjs;

import java.util.ArrayList;
import static def.js.Globals.eval;
import static def.dom.Globals.window;

public class Class {
	
	private String packageID;
	private String userClassName;
	private Object userClass;

	
	static ArrayList<splashjs.Class> classes = new ArrayList<splashjs.Class>();
	
	public Class(String packageID, String userClassName, Object userClass) {
		this.packageID = packageID;
		this.userClassName = userClassName;
		this.userClass = userClass;
	}
	
	public static void define(String packageID, def.js.Function classInFunc) {
		/*
		int numImports = (int)imports.$get("length");
		String importJSText = "";
		for(int i=0;i<numImports;i++) {
			String fullClazzName = (String)imports.$get(i);
			String onlyClazzName = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
			importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
		}*/
		
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
			}
			def.js.Object fullPackage = eval(str);
			
			fullPackage.$set(userClassName,userClass);
			System.out.println(str);
		}
		
		classes.add(new splashjs.Class(packageID, userClassName, userClass));//new PackageData(packageID, clazz));
	}

	public static Object get(String className) {
		return eval(className);
	}
}