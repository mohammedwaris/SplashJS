package splashjs.net;


import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IProgressEvent;
import splashjs.net.iface.IURLLoader;
import splashjs.net.iface.IURLRequest;
import splashjs.render.net.iface.IURLLoaderRenderer;


public class URLLoader extends EventDispatcher implements IURLLoader {
	
	private int bytesLoaded;
	private int bytesTotal;
	private Object data;
	private String dataFormat;
	private IURLRequest urlRequest;
	
	public URLLoader() {
		this.dataFormat = URLLoaderDataFormat.TEXT;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(URLLoader.class, this));
	}
	
	public URLLoader(IURLRequest urlRequest) {
		this.urlRequest = urlRequest;
		this.dataFormat = URLLoaderDataFormat.TEXT;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(URLLoader.class, this));
	}
	
	@Override
	public void close() {
		((IURLLoaderRenderer)super.getRenderer()).close();
	}
	
	@Override
	public void load(IURLRequest urlRequest) {
		this.urlRequest = urlRequest;
		this.load();
	}

	@Override
	public void load() {
		((IURLLoaderRenderer)super.getRenderer()).load();
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
		return ((IURLLoaderRenderer)super.getRenderer()).getBytesTotal();
	}
	
	@Override
	public int getBytesLoaded() {
		return ((IURLLoaderRenderer)super.getRenderer()).getBytesLoaded();
	}
	
	@Override
	public Object getData() {
		return ((IURLLoaderRenderer)super.getRenderer()).getData();
	}
	
	
}