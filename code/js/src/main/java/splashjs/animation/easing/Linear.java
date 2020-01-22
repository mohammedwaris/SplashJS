package splashjs.animation.easing;

public class Linear {
	
	public static final String EASE_NONE = "linear_ease_none";
	public static final String EASE_IN = "linear_ease_in";
	public static final String EASE_OUT = "linear_ease_out";
	public static final String EASE_IN_OUT = "linear_ease_in_out";
	
	public static double easeNone (double t,double b , double c, double d) {
		return c*t/d + b;
	}
	
	public static double easeIn (double t,double b , double c, double d) {
		return c*t/d + b;
	}
	
	public static double easeOut (double t,double b , double c, double d) {
		return c*t/d + b;
	}
	
	public static double easeInOut (double t,double b , double c, double d) {
		return c*t/d + b;
	}
	
}