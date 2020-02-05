package splashjs.render.net;

import def.dom.XMLHttpRequest;
import def.js.ArrayBuffer;
import def.js.DataView;

import splashjs.events.iface.*;
import splashjs.render.events.iface.*;
import splashjs.render.events.*;
import splashjs.render.net.iface.*;
import splashjs.net.*;
import splashjs.net.iface.*;
import splashjs.render.*;
import splashjs.utils.iface.*;
import splashjs.utils.*;
import splashjs.render.utils.iface.*;

public class URLLoaderRenderer extends EventDispatcherRenderer implements IURLLoaderRenderer {

	private XMLHttpRequest xmlHttpRequest;
	private IURLLoader urlLoader;
	
	public URLLoaderRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		xmlHttpRequest = new XMLHttpRequest();
		urlLoader = (IURLLoader)renderObject;
	}
	
	public void load() {
		
		IURLRequest urlRequest = urlLoader.getURLRequest();
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
		
		String dataFormat = urlLoader.getDataFormat();
		
		if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.BINARY))
			xmlHttpRequest.responseType = "arraybuffer";
		else if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.TEXT))
			xmlHttpRequest.responseType = "text";
		else if(dataFormat.equalsIgnoreCase(URLLoaderDataFormat.VARIABLES))
			xmlHttpRequest.responseType = "";
		
		String url = urlRequest.getURL();
		xmlHttpRequest.open(method, url);
		xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, (event) -> {
			IByteArray byteArray = new ByteArray();
			((IByteArrayRenderer)byteArray.getRenderer()).setDataView(new DataView((def.js.ArrayBuffer)xmlHttpRequest.response));
			urlLoader.setData(byteArray);
			IEvent completeEvent = new splashjs.events.Event(splashjs.events.Event.COMPLETE, urlLoader, urlLoader);
			urlLoader.dispatchEvent(completeEvent);
			System.out.println(event);
		});
		xmlHttpRequest.send();
	}

}