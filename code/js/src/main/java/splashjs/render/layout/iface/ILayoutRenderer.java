package splashjs.render.layout.iface;

import splashjs.render.display.iface.IDisplayObjectRenderer;

public interface ILayoutRenderer extends IDisplayObjectRenderer {

	public void refreshLayout();
	public void setPadding(int paddingLeft, int paddingTop, int paddingRight, int paddingBottom);
	public void setPaddingLeft(int paddingLeft);
	public void setPaddingTop(int paddingTop);
	public void setPaddingRight(int paddingRight);
	public void setPaddingBottom(int paddingBottom);
	
}