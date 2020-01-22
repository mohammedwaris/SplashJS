package splashjs.animation.easing;

public class Circ {
	
	public static final String EASE_IN = "circ_ease_in";
	public static final String EASE_OUT = "circ_ease_out";
	public static final String EASE_IN_OUT = "circ_ease_in_out";
	
	public static double  easeIn(double t,double b , double c, double d) {
		return -c * ((double)Math.sqrt(1 - (t/=d)*t) - 1) + b;
	}
	
	public static double  easeOut(double t,double b , double c, double d) {
		return c * (double)Math.sqrt(1 - (t=t/d-1)*t) + b;
	}
	
	public static double  easeInOut(double t,double b , double c, double d) {
		if ((t/=d/2) < 1) return -c/2 * ((double)Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * ((double)Math.sqrt(1 - (t-=2)*t) + 1) + b;
	}

}