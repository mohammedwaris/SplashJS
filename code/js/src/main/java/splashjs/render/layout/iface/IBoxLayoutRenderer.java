package splashjs.render.layout.iface;

import splashjs.render.layout.iface.ILayoutRenderer;
import splashjs.layout.iface.IContainer;

public interface IBoxLayoutRenderer extends ILayoutRenderer {

	public void add(IContainer container);
	public void setHAlign(String hAlign);
	
}