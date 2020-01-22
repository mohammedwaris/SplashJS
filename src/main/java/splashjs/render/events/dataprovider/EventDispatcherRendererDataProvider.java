package splashjs.render.events.dataprovider;

import splashjs.render.lang.dataprovider.*;
import splashjs.events.*;
import splashjs.events.iface.*;

public class EventDispatcherRendererDataProvider extends SplashObjectRendererDataProvider implements IEventDispatcherRendererDataProvider {
	
	private IEventDispatcher renderObject;
	private String renderObjectID;
	
	public void setRenderObject(IEventDispatcher renderObject) {
		this.renderObject = renderObject;
		this.renderObjectID = renderObject.getUniqueID();
	}
	
	public IEventDispatcher getRenderObject() {
		return this.renderObject;
	}
	
	public String getRenderObjectID() {
		return this.renderObjectID;
	}
}