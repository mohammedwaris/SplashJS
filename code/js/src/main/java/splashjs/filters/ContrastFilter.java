package splashjs.filters;

import splashjs.filters.iface.IContrastFilter;

public class ContrastFilter extends Filter implements IContrastFilter {

	private double contrast;
	
	public ContrastFilter() {
		
	}
	
	public ContrastFilter(double contrast) {
		this.contrast = contrast;
	}
	
	public IContrastFilter setContrast(double contrast) {
		this.contrast = contrast;
		return this;
	}
	
	public double getContrast() {
		return this.contrast;
	}
}