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
	
	
	
	public void setPadding(int value) {
		((ILayoutRenderer)super.getRenderer()).setPadding(value);
	}
	
	
}