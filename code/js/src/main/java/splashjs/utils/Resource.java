package splashjs.utils;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.utils.iface.IResource;
import splashjs.render.utils.iface.IResourceRenderer;

public class Resource extends EventDispatcher implements IResource {
	
	private String resourceName;
	private String resourcePath;
	private String resourceType;


	public Resource(String resourceName, String resourcePath, String resourceType) {
		this.resourceName = resourceName;
		this.resourcePath = resourcePath;
		this.resourceType = resourceType;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Resource.class, this));
	}
	
	public String getResourcePath() {
		return resourcePath;
	}
	
	public String getResourceName() {
		return resourceName;
	}
	
	public String getResourceType() {
		return resourceType;
	}
	
	public String getResourceBase64() {
		return ((IResourceRenderer)super.getRenderer()).getResourceBase64();
	}
	
}
		