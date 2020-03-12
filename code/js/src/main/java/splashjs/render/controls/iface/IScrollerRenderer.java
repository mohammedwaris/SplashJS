package splashjs.render.controls.iface;

import splashjs.display.iface.IDisplayObject;

public interface IScrollerRenderer extends IControlRenderer {

	public void setContent(IDisplayObject content);
	public IDisplayObject getContent();
	
}