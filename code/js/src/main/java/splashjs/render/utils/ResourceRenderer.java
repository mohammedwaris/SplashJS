package splashjs.render.utils;

import splashjs.render.utils.iface.*;
import splashjs.events.iface.*;
import splashjs.render.events.*;


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