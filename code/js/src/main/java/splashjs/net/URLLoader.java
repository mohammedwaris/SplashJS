package splashjs.net;


import splashjs.events.EventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IProgressEvent;
import splashjs.net.iface.IURLLoader;
import splashjs.net.iface.IURLRequest;


public class URLLoader extends EventDispatcher implements IURLLoader {
	
	private int bytesLoaded;
	private int bytesTotal;
	private Object data;
	private String dataFormat;
	private IURLRequest urlRequest;
	//private XMLHttpRequest xmlHttpRequest;
	

	
	public URLLoader(IURLRequest urlRequest) {
		this.urlRequest = urlRequest;
		this.dataFormat = URLLoaderDataFormat.TEXT;
		
	/*	this.xmlHttpRequest = new XMLHttpRequest();
		this.xmlHttpRequest.responseType = "text";
		
		this.xmlHttpRequest.addEventListener("load", (loadEvent) -> {
			IEvent completeEvent = new Event(EventName.LOADED);
			//console.log(loadEvent);
			dispatchEvent(completeEvent);
			//console.log(xmlHttpRequest.responseText);
		});
		
		this.xmlHttpRequest.addEventListener("progress", (pe) -> {
			def.dom.ProgressEvent progressEvent = (def.dom.ProgressEvent)pe;
			IProgressEvent progressEvt = new ProgressEvent(EventName.PROGRESS);
			progressEvt.setBytesLoaded((int)progressEvent.loaded);
			progressEvt.setBytesTotal((int)progressEvent.total);
			bytesLoaded = (int)progressEvent.loaded;
			bytesTotal = (int)progressEvent.total;
			dispatchEvent(progressEvt);
		});*/
		
	}
	
	@Override
	public void close() {
	}
	/*
	@Override
	public void load(URLRequest urlRequest) {
		this.urlRequest = urlRequest;
		this.load();
	}*/

	@Override
	public void load() {
		
		String urlRequestMethod = urlRequest.getURLRequestMethod();
		
		String method = "get";
		
		if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.GET))
			method = "get";
		else if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.POST))
			method = "post";
		else if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.DELETE))
			method = "delete";
		else if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.PUT))
			method = "put";
		else if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.HEAD))
			method = "head";
		else if(urlRequestMethod.equalsIgnoreCase(URLRequestMethod.OPTIONS))
			method = "options";
		
		String url = urlRequest.getURL();
		
		//xmlHttpRequest.open(method, url, true);
		//xmlHttpRequest.send();
	}
	
	@Override
	public int getBytesTotal() {
		return bytesTotal;
	}
	
	@Override
	public int getBytesLoaded() {
		return bytesLoaded;
	}
	
	@Override
	public Object getData() {
		return data;
	}
	
	private void dispatchCompleteEvent(IEvent completeEvent) {
		dispatchEvent(completeEvent);
	}
	
	private void dispatchProgressEvent(IProgressEvent progressEvent) {
		dispatchEvent(progressEvent);
	}
}