package splashjs.filters.iface;

import splashjs.utils.iface.IColor;

public interface IGlowFilter extends IFilter {

	public IGlowFilter setBlur(int blur);
	public int getBlur();
	
	public IGlowFilter setColor(IColor color);
	public IColor getColor();
}