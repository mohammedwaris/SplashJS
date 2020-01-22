package splashjs.utils.iface;

public interface IColor {

	public String getColorName();
	public String getColorType();
	public int getRed();
	public int getGreen();
	public int getBlue();
	
	public int getHue();
	public double getSaturation();
	public double getLightness();
	public double getAlpha();
	public String getHEX();
	
	public IGradient getGradient();
}