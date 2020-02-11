package splashjs.net;

import java.util.*;

import splashjs.net.iface.*;
import splashjs.render.net.*;
import splashjs.events.*;

public class URLVariable implements IURLVariable {

	private String name = "";
	private String value = "";
	
	public URLVariable(String name, String value) {
		this.name = name;
		this.value = value;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getValue() {
		return this.value;
	}
	
	public String getEncodedValue() {
		return URLVariable.getEncodedString(this.value);
	}
	
	public static String getEncodedString(String str) {
		return URLVariableRenderer.getEncodedString(str);
	}
	
	public static String encode(IURLVariable...urlVariables) {
		return URLVariableRenderer.encode(urlVariables);
	}
	
	public static ArrayList<IURLVariable> decode(String encodedString) {
		return URLVariableRenderer.decode(encodedString);
	}
}