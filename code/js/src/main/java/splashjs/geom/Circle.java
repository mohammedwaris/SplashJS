package splashjs.geom;

import splashjs.geom.iface.ICircle;

public class Circle implements ICircle {

	private int centerX;
	private int centerY;
	private int radius;
	
	public Circle() {
		
	}
	
	public Circle(int centerX, int centerY, int radius) {
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
	}
	
	public ICircle setCenterX(int centerX) {
		this.centerX = centerX;
		return this;
	}
	
	public int getCenterX() {
		return this.centerX;
	}
	
	public ICircle setCenterY(int centerY) {
		this.centerY = centerY;
		return this;
	}
	
	public int getCenterY() {
		return this.centerY;
	}
	
	public ICircle setRadius(int radius) {
		this.radius = radius;
		return this;
	}
	
	public int getRadius() {
		return this.radius;
	}

}