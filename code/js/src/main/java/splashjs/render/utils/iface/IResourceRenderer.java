package splashjs.render.utils.iface;

import splashjs.render.events.iface.*;

public interface IResourceRenderer extends IEventDispatcherRenderer {
	
	public void setResourceBase64(String resourceBase64);
	public String getResourceBase64();
	
}