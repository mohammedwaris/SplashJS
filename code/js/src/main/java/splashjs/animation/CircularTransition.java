package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

public class CircularTransition extends Transition {

	private int radius;

	public CircularTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(CircularTransition.class, this));
	}
	
	public void setRadius(int radius) {
		this.radius = radius;
	}
	
	public int getRadius() {
		return this.radius;
	}
	
	public void update(IDisplayObject targetObject, double nextValue) {
		// sin * h = y
		// cos * h = x
		
		targetObject.setX(100 + (int)(Math.cos((Math.PI/180)*(nextValue)) * radius));
		targetObject.setY(100 + (int)(Math.sin((Math.PI/180)*(nextValue)) * radius));
	}
	
}