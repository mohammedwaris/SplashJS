package splashjs.filters;

import splashjs.filters.iface.ISepiaFilter;

public class SepiaFilter extends Filter implements ISepiaFilter {

	private double sepia;
	
	public SepiaFilter() {
		
	}
	
	public SepiaFilter(double sepia) {
		this.sepia = sepia;
	}
	
	public ISepiaFilter setSepia(double sepia) {
		this.sepia= sepia;
		return this;
	}
	
	public double getSepia() {
		return this.sepia;
	}
	
}