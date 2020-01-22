package splashjs.animation.easing;

public class Quint {
	
	public static final String EASE_IN = "quint_ease_in";
	public static final String EASE_OUT = "quint_ease_out";
	public static final String EASE_IN_OUT = "quint_ease_in_out";
	
	public static double easeIn (double t,double b , double c, double d) {
		return c*(t/=d)*t*t*t*t + b;
	}
	
	public static double easeOut (double t,double b , double c, double d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
	
	public static double easeInOut (double t,double b , double c, double d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
	
}