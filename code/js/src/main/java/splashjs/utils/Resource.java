package splashjs.utils;

import splashjs.utils.iface.IResource;

public class Resource implements IResource {
	
	private String resourceName;
	private String resourcePath;
	private String resourceType;

	public Resource(String resourceName, String resourcePath, String resourceType) {
		this.resourceName = resourceName;
		this.resourcePath = resourcePath;
		this.resourceType = resourceType;
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
	
}
		