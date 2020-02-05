package splashjs.net;


import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IProgressEvent;
import splashjs.net.iface.IURLLoader;
import splashjs.net.iface.IURLRequest;
import splashjs.render.net.iface.*;


public class URLLoader extends EventDispatcher implements IURLLoader {
	
	private int bytesLoaded;
	private int bytesTotal;
	private Object data;
	private String dataFormat;
	private IURLRequest urlRequest;
	
	public URLLoader(IURLRequest urlRequest) {
		this.urlRequest = urlRequest;
		this.dataFormat = URLLoaderDataFormat.TEXT;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(URLLoader.class, this));
		
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
		
		
		
		//xmlHttpRequest.open(method, url, true);
		//xmlHttpRequest.send();
		((IURLLoaderRenderer)super.getRenderer()).load();
	}
	
	public void setURLRequest(IURLRequest urlRequest) {
		this.urlRequest = urlRequest;
	}
	
	public IURLRequest getURLRequest() {
		return this.urlRequest;
	}
	
	public void setDataFormat(String dataFormat) {
		this.dataFormat = dataFormat;
	}
	
	public String getDataFormat() {
		return this.dataFormat;
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
	
	@Override
	public void setData(Object data) {
		this.data = data;
	}
	
	private void dispatchCompleteEvent(IEvent completeEvent) {
		dispatchEvent(completeEvent);
	}
	
	private void dispatchProgressEvent(IProgressEvent progressEvent) {
		dispatchEvent(progressEvent);
	}
}