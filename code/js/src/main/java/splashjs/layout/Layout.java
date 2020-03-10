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
	
	public void setPadding(int left, int top, int right, int bottom) {
		((ILayoutRenderer)super.getRenderer()).setPadding(left, top, right, bottom);
	}
	
	public void setTopPadding(int value) {
		((ILayoutRenderer)super.getRenderer()).setTopPadding(value);
	}

	public void setBottomPadding(int value) {
		((ILayoutRenderer)super.getRenderer()).setBottomPadding(value);
	}

	public void setLeftPadding(int value) {
		((ILayoutRenderer)super.getRenderer()).setLeftPadding(value);
	}

	public void setRightPadding(int value) {
		((ILayoutRenderer)super.getRenderer()).setRightPadding(value);
	}
	
	
}