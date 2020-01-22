package splashjs.utils;

import splashjs.utils.iface.IColor;
import splashjs.utils.iface.IGradient;

public class Color implements IColor {
	
	public static final Color GREEN = new Color(ColorName.GREEN);
	public static final Color YELLOW = new Color(ColorName.YELLOW);
	public static final Color RED = new Color(ColorName.RED);
	public static final Color BLACK = new Color(ColorName.BLACK);
	public static final Color WHITE = new Color(ColorName.WHITE);
	public static final Color TOMATO = new Color(ColorName.TOMATO);
	public static final Color ORANGE = new Color(ColorName.ORANGE);
	public static final Color DODGER_BLUE = new Color(ColorName.DODGER_BLUE);
	public static final Color MEDIUM_SEA_GREEN = new Color(ColorName.MEDIUM_SEA_GREEN);
	public static final Color GRAY = new Color(ColorName.GRAY);
	public static final Color SLATE_BLUE = new Color(ColorName.SLATE_BLUE);
	public static final Color AQUA = new Color(ColorName.AQUA);
	public static final Color VIOLET = new Color(ColorName.VIOLET);
	public static final Color LIGHT_GRAY = new Color(ColorName.LIGHT_GRAY);
	
	private int red;
	private int green;
	private int blue;
	
	private int hue;
	private double saturation;
	private double lightness;
	
	private double alpha;
	
	private String hex;
	
	private String colorName;
	
	private String colorType;
	
	private IGradient gradient;
	
	private Color() {
		
	}
	
	public Color(IGradient gradient) {
		this.gradient = gradient;
		this.colorType = ColorType.GRADIENT;
	}
	
	private Color(String colorName) {
		if(colorName.charAt(0) == '#') {
			this.hex = colorName;
			this.colorType = ColorType.HEX;
		}else {
			this.colorName = colorName;
			this.colorType = ColorType.NAME;
		}
	}
	
	private Color(int red, int green, int blue) {
		this.green = green;
		this.red = red;
		this.blue = blue;
		this.colorType = ColorType.RGB;
	}
	
	private Color(int hue, double saturation, double lightness) {
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
		this.colorType = ColorType.HSL;
	}
	
	private Color(int hue, double saturation, double lightness, double alpha) {
		this.hue = hue;
		this.saturation = saturation;
		this.lightness = lightness;
		this.alpha = alpha;
		this.colorType = ColorType.HSLA;
	}
	
	
	private Color(int red, int green, int blue, double alpha) {
		this.green = green;
		this.red = red;
		this.blue = blue;
		this.alpha = alpha;
		this.colorType = ColorType.RGBA;
	}
	

	
	
	public static Color createRGB(int red, int green, int blue) {
		return new Color(red, green, blue);
	}
	
	public static Color createRGBA(int red, int green, int blue, double alpha) {
		return new Color(red, green, blue, alpha);
	}
	
	public static Color createHEX(String hex) {
		return new Color(hex);
	}
	
	public static Color createHSL(int hue, double saturation, double lightness) {
		return new Color(hue, saturation, lightness);
	}
	
	public static Color createHSLA(int hue, double saturation, double lightness, double alpha) {
		return new Color(hue, saturation, lightness, alpha);
	}
	

	
	public String getColorName() {
		return colorName;
	}
	
	public String getColorType() {
		return colorType;
	}
	
	public int getRed() {
		return this.red;
	}
	
	public int getGreen() {
		return this.green;
	}
	
	public int getBlue() {
		return this.blue;
	}
	
	public int getHue() {
		return this.hue;
	}
	
	public double getSaturation() {
		return this.saturation;
	}
	
	public double getLightness() {
		return this.lightness;
	}
	
	public double getAlpha() {
		return this.alpha;
	}
	
	public String getHEX() {
		return this.hex;
	}
	
	public IGradient getGradient() {
		return this.gradient;
	}
	
	
	

	
}

