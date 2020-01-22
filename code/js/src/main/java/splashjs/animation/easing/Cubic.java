package splashjs.animation.easing;

public class Cubic {
	
	public static final String EASE_IN = "cubic_ease_in";
	public static final String EASE_OUT = "cubic_ease_out";
	public static final String EASE_IN_OUT = "cubic_ease_in_out";
	
	public static double easeIn (double t,double b , double c, double d) {
		return c*(t/=d)*t*t + b;
	}
	
	public static double easeOut (double t,double b , double c, double d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}
	
	public static double easeInOut (double t,double b , double c, double d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}

}