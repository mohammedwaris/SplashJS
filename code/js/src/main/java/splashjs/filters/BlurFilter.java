package splashjs.filters;

import splashjs.filters.iface.IBlurFilter;

public class BlurFilter extends Filter implements IBlurFilter {

	private int blur;
	
	public BlurFilter() {
	}
	
	public BlurFilter(int blur) {
		this.blur = blur;
	}
	
	public IBlurFilter setBlur(int blur) {
		this.blur = blur;
		return this;
	}
	
	public int getBlur() {
		return this.blur;
	}
}