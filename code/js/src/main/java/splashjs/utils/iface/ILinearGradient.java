package splashjs.utils.iface;

public interface ILinearGradient extends IGradient {

	public void setGradientDirection(String gradientDirection);
	public String getGradientDirection();
	public void setGradientAngle(Integer gradientAngle);
	public Integer getGradientAngle();
}