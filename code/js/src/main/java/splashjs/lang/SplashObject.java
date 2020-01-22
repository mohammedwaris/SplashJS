package splashjs.lang;

import splashjs.lang.iface.ISplashObject;

public class SplashObject extends Object implements ISplashObject {

	
	public String toString() {
		String value = "[instance of " + getClass().getName() + "]";
		return value;
	}
}