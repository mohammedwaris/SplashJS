package splashjs.filters;

import splashjs.filters.iface.IHueRotateFilter;

public class HueRotateFilter extends Filter implements IHueRotateFilter {

	private int hueRotate;
	
	public HueRotateFilter() {
		
	}
	
	public HueRotateFilter(int hueRotate) {
		this.hueRotate = hueRotate;
	}
	
	public IHueRotateFilter setHueRotate(int hueRotate) {
		this.hueRotate = hueRotate;
		return this;
	}
	
	public int getHueRotate() {
		return this.hueRotate;
	}
	
}