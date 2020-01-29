package splashjs.filters;

import splashjs.filters.iface.IGrayscaleFilter;

public class GrayscaleFilter extends Filter implements IGrayscaleFilter {

	private double grayscale;
	
	public GrayscaleFilter() {
		
	}
	
	public GrayscaleFilter(double grayscale) {
		this.grayscale = grayscale;
	}
	
	public IGrayscaleFilter setGrayscale(double grayscale) {
		this.grayscale = grayscale;
		return this;
	}
	
	public double getGrayscale() {
		return this.grayscale;
	}
	
}