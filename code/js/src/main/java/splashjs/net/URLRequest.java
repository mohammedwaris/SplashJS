package splashjs.net;

import splashjs.net.iface.IURLRequest;

public class URLRequest implements IURLRequest {

	private String url;
	private String contentType;
	private Object data;
	private boolean followRedirects;
	private String urlRequestMethod;
	
	public URLRequest(String url) {
		this.url = url;
		this.urlRequestMethod = URLRequestMethod.GET;
	}
	
	public String getURL() {
		return url;
	}
	
	public String getURLRequestMethod() {
		return urlRequestMethod;
	}
}