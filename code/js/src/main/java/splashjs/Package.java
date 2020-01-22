package splashjs;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.js.Globals.eval;
import java.util.ArrayList;

public class Package {

	static Object clazz;
	static ArrayList<PackageData> packageData = new ArrayList<PackageData>();
	
	public static void define(def.js.Function clazzDef) {

		
		def.js.Object clazzInfo = clazzDef.$apply();
		def.js.Object clazz = clazzInfo.$get("clazz");
		String clazzName = clazz.$get("name");
		
		
		
		
		String packageID = clazzInfo.$get("packaze");
		String js = "";
		String str = "";
		if(packageID.isEmpty()) {
			window.$set(clazzName, clazz);
		}else {
			String[] words = packageID.split(".");
			
			for(int i=0;i<words.length;i++) {
				if(i == 0) {
					window.$set(words[i], new def.js.Object());
					//str = "window." + words[i] ;
					//js = str + " = "  + str + " || {};";
				}
				else if(i > 0) {
					
					str += "." + words[i];
					js = str + " = " + str + " || {};";
				}
				System.out.println(js);
				eval(js);
			}
			str += "." + clazzName;
			js = str + " = " + clazz + ";";
			
			//System.out.println(js);
			//eval(js);
		}
		
	}

	static class PackageData {
		Object packageID;
		Object clazz;
		
		PackageData(String packageID, Object clazz) {
			this.packageID = packageID;
			this.clazz = clazz;
		}
	}
}