package splashjs.filters.iface;

import splashjs.utils.iface.IColor;

public interface IDropShadowFilter extends IFilter {
	
	public IDropShadowFilter setOffsetX(int offsetX);
	public int getOffsetX();
	
	public IDropShadowFilter setOffsetY(int offsetY);
	public int getOffsetY();
	
	public IDropShadowFilter setBlur(int blur);
	public int getBlur();
	
	public IDropShadowFilter setSpread(int spread);
	public int getSpread();
	
	public IDropShadowFilter setColor(IColor color);
	public IColor getColor();
	
}