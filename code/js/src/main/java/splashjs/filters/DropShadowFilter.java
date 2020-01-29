package splashjs.filters;

import splashjs.filters.iface.IDropShadowFilter;
import splashjs.utils.iface.IColor;
import splashjs.utils.Color;

public class DropShadowFilter extends Filter implements IDropShadowFilter {

	private int offsetX;
	private int offsetY;
	private int blur;
	private int spread;
	private IColor color = Color.BLACK;
	
	public DropShadowFilter() {
		
	}
	
	public DropShadowFilter(int offsetX, int offsetY, int blur, IColor color) {
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.blur = blur;
		this.color = color;
		
	}
	
	public IDropShadowFilter setOffsetX(int offsetX) {
		this.offsetX = offsetX;
		return this;
	}
	public int getOffsetX() {
		return this.offsetX;
	}
	
	public IDropShadowFilter setOffsetY(int offsetY) {
		this.offsetY = offsetY;
		return this;
	}
	public int getOffsetY() {
		return this.offsetY;
	}
	
	public IDropShadowFilter setBlur(int blur) {
		this.blur = blur;
		return this;
	}
	public int getBlur() {
		return this.blur;
	}
	
	public IDropShadowFilter setSpread(int spread) {
		this.spread = spread;
		return this;
	}
	public int getSpread() {
		return this.spread;
	}
	
	public IDropShadowFilter setColor(IColor color) {
		this.color = color;
		return this;
	}
	public IColor getColor() {
		return this.color;
	}
	
	
	
	
}