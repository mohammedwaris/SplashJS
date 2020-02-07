package splashjs.net;

import java.util.ArrayList;

import splashjs.net.iface.*;

public class URLRequest implements IURLRequest {

	private String url;
	private String contentType;
	private Object data;
	private boolean followRedirects;
	private String urlRequestMethod;
	private ArrayList<IURLRequestHeader> requestHeaders = new ArrayList<IURLRequestHeader>();
	
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
	
	public void setRequestHeaders(ArrayList<IURLRequestHeader> requestHeaders) {
		this.requestHeaders = requestHeaders;
	}
	
	public ArrayList<IURLRequestHeader> getRequestHeaders() {
		return this.requestHeaders;
	}
	
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
	
	public String getContentType() {
		return this.contentType;
	}
	
	public void setData(Object data) {
		this.data = data;
	}
	
	public Object getData() {
		return this.data;
	}
}