package splashjs.render.layout;

import def.dom.HTMLElement;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.layout.iface.ILayoutRenderer;

public abstract class LayoutRenderer extends DisplayObjectRenderer implements ILayoutRenderer {

	private int paddingTop = 0;
	private int paddingBottom = 0;
	private int paddingLeft = 0;
	private int paddingRight = 0;
	
	public void setPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom) {
		this.setPaddingLeft(paddingLeft);
		this.setPaddingTop(paddingTop);
		this.setPaddingRight(paddingRight);
		this.setPaddingBottom(paddingBottom);
	}

	public void setPaddingTop(int paddingTop) {
		this.paddingTop = paddingTop;
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingTop = this.paddingTop + UNIT;
	}

	public void setPaddingBottom(int paddingBottom) {
		this.paddingBottom = paddingBottom;
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingBottom = this.paddingBottom + UNIT;
	}

	public void setPaddingLeft(int paddingLeft) {
		this.paddingLeft = paddingLeft;
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingLeft = this.paddingLeft + UNIT;
	}

	public void setPaddingRight(int paddingRight) {
		this.paddingRight = paddingRight;
		((HTMLElement)super.getRenderElement().getDOMElement()).style.paddingRight = this.paddingRight + UNIT;
	}
	
	public void setWidth(int width) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.width = width + UNIT;
	}
	
	public int getWidth() {
		return (int)super.getRenderElement().getDOMElement().clientWidth;
	}
	
	public void setHeight(int height) {
		((HTMLElement)super.getRenderElement().getDOMElement()).style.height = height + UNIT;
	}
	
	public int getHeight() {
		return (int)super.getRenderElement().getDOMElement().clientHeight;
	}
	
	public void applyStyle() {
		
		super.applyStyle();
		((HTMLElement)super.getRenderElement().getDOMElement()).style.border = "1px solid red";
		this.setPadding(0, 0, 0, 0);
	}
	
}