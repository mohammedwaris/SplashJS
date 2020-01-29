package splashjs.filters;

import splashjs.filters.iface.IBrightnessFilter;

public class BrightnessFilter extends Filter implements IBrightnessFilter {

	private double brightness;
	
	public BrightnessFilter() {
		
	}
	
	public BrightnessFilter(double brightness) {
		this.brightness = brightness;
	}
	
	public IBrightnessFilter setBrightness(double brightness) {
		this.brightness = brightness;
		return this;
	}
	
	public double getBrightness() {
		return this.brightness;
	}
	
}