package splashjs.utils;

import splashjs.utils.iface.IRadialGradient;

public class RadialGradient extends Gradient implements IRadialGradient {
	
	private String gradientShape = GradientShape.ELLIPSE;
	private String gradientSize;
	
	public void setGradientShape(String gradientShape) {
		this.gradientShape = gradientShape;
	}
	
	public String getGradientShape() {
		return this.gradientShape;
	}
	
	public void setGradientSize(String gradientSize) {
		this.gradientSize = gradientSize;
	}
	
	public String getGradientSize() {
		return this.gradientSize;
	}

}