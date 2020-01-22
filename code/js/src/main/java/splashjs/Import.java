package splashjs;

import java.util.ArrayList;

//import  static def.js.Globals.*;

public class Import {
	
	private static ArrayList<String> className = new ArrayList<String>();
	private static ArrayList<String> packageName = new ArrayList<String>();

	public Import() {
	}
	
	public static Object clazz(Object clazz) {
		return clazz;
	}
	
	public static Object clazzAs(Object clazz, Object alias) {
		return clazz;
	}
	
	public static String getClassName(int index) {
		return className.get(index);
	}
	
	public static String getPackageName(int index) {
		return packageName.get(index);
	}
	
	
	



}