package splashjs.layout;


import splashjs.display.DisplayObject;

import splashjs.layout.iface.IBoxLayout;
import splashjs.render.layout.iface.IBoxLayoutRenderer;

public abstract class BoxLayout extends Layout implements IBoxLayout {

	
	public BoxLayout() {
		
	}
	
	public BoxLayout(String id) {
		super(id);
	}

	public void setHAlign(String hAlign) {
		((IBoxLayoutRenderer)super.getRenderer()).setHAlign(hAlign);
	}
	
	
	
	
}