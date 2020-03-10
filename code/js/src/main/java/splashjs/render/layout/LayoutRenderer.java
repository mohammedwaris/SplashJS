package splashjs.render.layout;

import def.dom.HTMLElement;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.layout.iface.ILayoutRenderer;

public abstract class LayoutRenderer extends DisplayObjectRenderer implements ILayoutRenderer {

	
	public void setPadding(int left, int top, int right, int bottom) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingLeft = left + "px";
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingTop = top + "px";
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingRight = right + "px";
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingBottom = bottom + "px";
	}

	public void setTopPadding(int top) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingTop = top + "px";
	}

	public void setBottomPadding(int bottom) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingBottom = bottom + "px";
	}

	public void setLeftPadding(int left) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingLeft = left + "px";
	}

	public void setRightPadding(int right) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingRight = right + "px";
	}
	
	
	public int getWidth() {
		return (int)super.getRenderElement().getDOMElement().clientWidth;
	}
	
	public int getHeight() {
		return (int)super.getRenderElement().getDOMElement().clientHeight;
	}
	
}