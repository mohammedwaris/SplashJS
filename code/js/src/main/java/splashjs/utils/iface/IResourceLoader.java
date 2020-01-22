package splashjs.utils.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IResourceLoader extends IEventDispatcher {
	
	public void addResource(IResource resource);
	public IResource getResourceByName(String resourceName);
	public void loadAll();
	
}