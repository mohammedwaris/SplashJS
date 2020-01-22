package splashjs.display;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.IRectangle;

public class Rectangle extends Shape implements IRectangle {
	
	private int rectangleWidth = 0;
	private int rectangleHeight = 0;
	private int cornerRadiusX = 0;
	private int cornerRadiusY = 0;
	
	public Rectangle() {
		super("rectangle");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Rectangle.class, this));
	}
	
	public Rectangle(int rectangleWidth, int rectangleHeight) {
		this();
		this.rectangleWidth = rectangleWidth;
		this.rectangleHeight = rectangleHeight;
	}
	
	public Rectangle(int rectangleWidth, int rectangleHeight, int cornerRadiusX, int cornerRadiusY) {
		this();
		this.rectangleWidth = rectangleWidth;
		this.rectangleHeight = rectangleHeight;
		this.cornerRadiusX = cornerRadiusX;
		this.cornerRadiusY = cornerRadiusY;
	}
	
	public int getCornerRadiusX() {
		return cornerRadiusX;
	}
	public void setCornerRadiusX(int cornerRadiusX) {
		this.cornerRadiusX = cornerRadiusX;
	}
	
	public int getCornerRadiusY() {
		return cornerRadiusY;
	}
	public void setCornerRadiusY(int cornerRadiusY) {
		this.cornerRadiusY = cornerRadiusY;
	}
	
	public int getRectangleWidth() {
		return this.rectangleWidth;
	}
	public void setRectangleWidth(int rectangleWidth) {
		this.rectangleWidth = rectangleWidth;
	}
	
	public int getRectangleHeight() {
		return this.rectangleHeight;
	}
	public void setRectangleHeight(int rectangleHeight) {
		this.rectangleHeight = rectangleHeight;
	}
	
	
	@Override
	public boolean dispatchEvent(IEvent event) {
		boolean val = super.dispatchEvent(event);
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			
		}
		
		return val;
	}
	
}