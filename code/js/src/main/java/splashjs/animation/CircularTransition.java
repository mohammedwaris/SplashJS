package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.animation.iface.ITransition;
import splashjs.animation.iface.ICircularTransition;
import splashjs.geom.iface.ICircle;
import splashjs.geom.Circle;

public class CircularTransition extends Transition implements ICircularTransition {

	private int radius = 50;
	private int centerX = 0;
	private int centerY = 0;

	public CircularTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(CircularTransition.class, this));
	}
	
	public ICircularTransition setCenterX(int centerX) {
		this.centerX = centerX;
		return this;
	}
	
	public int getCenterX() {
		return this.centerX;
	}
	
	public ICircularTransition setCenterY(int centerY) {
		this.centerY = centerY;
		return this;
	}
	
	public int getCenterY() {
		return this.centerY;
	}
	
	public ICircularTransition setRadius(int radius) {
		this.radius = radius;
		return this;
	}
	
	public int getRadius() {
		return this.radius;
	}
	
	public ICircularTransition setCircle(ICircle circle) {
		this.centerX = circle.getCenterX();
		this.centerY = circle.getCenterY();
		this.radius = circle.getRadius();
		return this;
	}
	
	public ICircle getCircle() {
		return new Circle(this.centerX, this.centerY, this.radius);
	}
	
	public ICircularTransition setCircle(int centerX, int centerY, int radius) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		return this;
	}
	
	public ITransition update(double nextValue) {
		IDisplayObject targetObject = super.getTargetObject();
		targetObject.setX(100 + (int)(Math.cos((Math.PI/180)*(nextValue)) * radius));
		targetObject.setY(100 + (int)(Math.sin((Math.PI/180)*(nextValue)) * radius));
		return this;
	}
	
}