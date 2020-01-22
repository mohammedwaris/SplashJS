package splashjs.filters.iface;

public interface IDropShadowFilter extends IFilter {
	
	public int getHorizontalShadow();
	public int getVerticalShadow();
	public int getBlur();
	public int getSpread();
	
}