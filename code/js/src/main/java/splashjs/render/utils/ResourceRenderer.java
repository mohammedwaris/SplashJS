package splashjs.render.utils;

import splashjs.render.utils.iface.IResourceRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;


public class ResourceRenderer extends EventDispatcherRenderer implements IResourceRenderer {
	
	private String resourceBase64;
	
	public ResourceRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}
	
	public void setResourceBase64(String resourceBase64) {
		this.resourceBase64 = resourceBase64;
	}
	
	public String getResourceBase64() {
		return this.resourceBase64;
	}
		
}