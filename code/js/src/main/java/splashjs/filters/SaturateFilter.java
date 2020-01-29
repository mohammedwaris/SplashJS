package splashjs.filters;

import splashjs.filters.iface.ISaturateFilter;

public class SaturateFilter extends Filter implements ISaturateFilter {

	private double saturate;
	
	public SaturateFilter() {
		
	}
	
	public SaturateFilter(double saturate) {
		this.saturate = saturate;
	}
	
	public ISaturateFilter setSaturate(double saturate) {
		this.saturate = saturate;
		return this;
	}
	
	public double getSaturate() {
		return this.saturate;
	}
	
}