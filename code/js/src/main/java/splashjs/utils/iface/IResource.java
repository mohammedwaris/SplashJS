package splashjs.utils.iface;

import splashjs.events.iface.*;

public interface IResource extends IEventDispatcher {
	
	public String getResourcePath();
	public String getResourceName();
	public String getResourceType();
	public String getResourceBase64();
}