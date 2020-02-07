package splashjs.net;

import splashjs.net.iface.*;

public class URLRequestHeader implements IURLRequestHeader {

	private String name = "";
	private String value = "";

	public URLRequestHeader(String name, String value) {
		this.name = name;
		this.value = value;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setValue(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
	
}