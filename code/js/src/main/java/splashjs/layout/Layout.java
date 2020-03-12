package splashjs.layout;


import splashjs.display.DisplayObject;

import splashjs.layout.iface.ILayout;
import splashjs.render.layout.iface.ILayoutRenderer;

public abstract class Layout extends DisplayObject implements ILayout {

	public Layout() {
		
	}
	
	public Layout(String id) {
		super(id);
	}
	
	public void setPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom) {
		((ILayoutRenderer)super.getRenderer()).setPadding(paddingLeft, paddingTop, paddingRight, paddingBottom);
	}
	
	public void setPaddingTop(int paddingTop) {
		((ILayoutRenderer)super.getRenderer()).setPaddingTop(paddingTop);
	}

	public void setPaddingBottom(int paddingBottom) {
		((ILayoutRenderer)super.getRenderer()).setPaddingBottom(paddingBottom);
	}

	public void setPaddingLeft(int paddingLeft) {
		((ILayoutRenderer)super.getRenderer()).setPaddingLeft(paddingLeft);
	}

	public void setPaddingRight(int paddingRight) {
		((ILayoutRenderer)super.getRenderer()).setPaddingRight(paddingRight);
	}
	
	public void setWidth(int width) {
		((ILayoutRenderer)super.getRenderer()).setWidth(width);
	}
	
	public void setHeight(int height) {
		((ILayoutRenderer)super.getRenderer()).setHeight(height);
	}
	
	
}