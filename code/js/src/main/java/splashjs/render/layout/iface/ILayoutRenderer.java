package splashjs.render.layout.iface;

import splashjs.render.display.iface.IDisplayObjectRenderer;

public interface ILayoutRenderer extends IDisplayObjectRenderer {

	public void refreshLayout();
	public void setPadding(int left, int top, int right, int bottom);
	public void setLeftPadding(int left);
	public void setTopPadding(int top);
	public void setRightPadding(int right);
	public void setBottomPadding(int bottom);
	
}