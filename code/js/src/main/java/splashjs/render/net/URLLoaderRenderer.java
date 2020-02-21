package splashjs.render.net;

import def.dom.XMLHttpRequest;
import def.js.ArrayBuffer;
import def.js.DataView;

import splashjs.events.iface.IEventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.net.iface.IURLLoaderRenderer;
import splashjs.net.URLRequestMethod;
import splashjs.net.URLLoaderDataFormat;
import splashjs.net.iface.IURLLoader;
import splashjs.net.iface.IURLRequest;
import splashjs.utils.iface.IByteArray;
import splashjs.utils.ByteArray;
import splashjs.render.utils.iface.IByteArrayRenderer;
import splashjs.render.HTMLDomEventName;

public class URLLoaderRenderer extends EventDispatcherRenderer implements IURLLoaderRenderer {

	private XMLHttpRequest xmlHttpRequest;
	private IURLLoader urlLoader;
	private int bytesLoaded;
	private int bytesTotal;
	private Object data;
	
	public URLLoaderRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		xmlHttpRequest = new XMLHttpRequest();
		urlLoader = (IURLLoader)renderObject;
	}
	
	public void load() {
		
		IURLRequest urlRequest = urlLoader.getURLRequest();
		String urlRequestMethod = urlRequest.getMethod();
		
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
		
		String dataFormat = urlLoader.getDataFormat();
		
		if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.BINARY))
			xmlHttpRequest.responseType = "arraybuffer";
		else if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.TEXT))
			xmlHttpRequest.responseType = "text";
		else if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.VARIABLES))
			xmlHttpRequest.responseType = "";
		
		String url = urlRequest.getURL();
		xmlHttpRequest.open(method, url);
		xmlHttpRequest.setRequestHeader("Content-Type", "text/html");
		xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, (event) -> {
			def.dom.ProgressEvent progressEvent = (def.dom.ProgressEvent)event;
			bytesLoaded = (int)progressEvent.loaded;
			bytesTotal = (int)progressEvent.total;
			if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.BINARY)) {
				IByteArray byteArray = new ByteArray();
				((IByteArrayRenderer)byteArray.getRenderer()).setDataView(new DataView((def.js.ArrayBuffer)xmlHttpRequest.response));
				data = byteArray;
			}else if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.TEXT)) {
				data = (String)xmlHttpRequest.responseText;
			}
			
			IEvent completeEvent = new splashjs.events.Event(splashjs.events.Event.COMPLETE, urlLoader, urlLoader);
			urlLoader.dispatchEvent(completeEvent);
			System.out.println(event);
		});
		xmlHttpRequest.send();
	}
	
	public Object getData() {
		return data;
	}
	
	public int getBytesTotal() {
		return bytesTotal;
	}
	
	public int getBytesLoaded() {
		return bytesLoaded;
	}
	
	public void close() {
		if(xmlHttpRequest != null)
			xmlHttpRequest.abort();
	}

}