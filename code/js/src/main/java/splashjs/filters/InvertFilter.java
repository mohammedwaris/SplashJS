package splashjs.filters;

import splashjs.filters.iface.IInvertFilter;

public class InvertFilter extends Filter implements IInvertFilter {

	private double invert;
	
	public InvertFilter() {
		
	}
	
	public InvertFilter(double invert) {
		this.invert = invert;
	}
	
	public IInvertFilter setInvert(double invert) {
		this.invert = invert;
		return this;
	}
	
	public double getInvert() {
		return this.invert;
	}
}