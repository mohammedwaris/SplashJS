package splashjs.utils;

import splashjs.utils.iface.ILinearGradient;

public class LinearGradient extends Gradient implements ILinearGradient {

	private String gradientDirection = GradientDirection.TOP_TO_BOTTOM;
	private Integer gradientAngle = null;
	
	public void setGradientDirection(String gradientDirection) {
		this.gradientAngle = null;
		this.gradientDirection = gradientDirection;
	}
	public String getGradientDirection() {
		return this.gradientDirection;
	}
	
	public void setGradientAngle(Integer gradientAngle) {
		this.gradientDirection = null;
		this.gradientAngle = gradientAngle;
	}
	
	public Integer getGradientAngle() {
		return this.gradientAngle;
	}
}