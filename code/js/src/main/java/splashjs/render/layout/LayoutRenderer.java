package splashjs.render.layout;

import def.dom.HTMLElement;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.layout.iface.ILayoutRenderer;

public abstract class LayoutRenderer extends DisplayObjectRenderer implements ILayoutRenderer {

	
	public void setPadding(int padding) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.padding = padding + "px";
	}
	
	
	public int getWidth() {
		return (int)super.getRenderElement().getDOMElement().clientWidth;
	}
	
	public int getHeight() {
		return (int)super.getRenderElement().getDOMElement().clientHeight;
	}
	
}