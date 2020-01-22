package splashjs.display.iface;

import splashjs.utils.iface.IColor;

public interface IShape extends IInteractiveObject {

	public void setStrokeWidth(int strokeWidth);
	public int getStrokeWidth();

	public void setFillColor(IColor fillColor);
	public IColor getFillColor();

	public void setStrokeColor(IColor strokeColor);
	public IColor getStrokeColor();
}