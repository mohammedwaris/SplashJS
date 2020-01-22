package splashjs.render.iface;

import splashjs.render.events.iface.IEventDispatcherRenderer;

public interface IGlobalRenderer extends IEventDispatcherRenderer {
	
	public void render(Object divID, Object jsClass, int width, int height);
	
}