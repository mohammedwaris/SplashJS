package splashjs.display;

import splashjs.utils.Color;
import splashjs.utils.iface.IColor;
import splashjs.display.iface.ICircle;
import splashjs.display.iface.IRectangle;
import splashjs.display.iface.ILine;
import splashjs.display.iface.IEllipse;


public abstract class Shape extends InteractiveObject {

	public static final String CIRCLE = "circle";
	public static final String RECTANGLE = "rectangle";
	public static final String LINE = "line";
	public static final String ELLIPSE = "ellipse";
	
	private IColor strokeColor = Color.BLACK;
	private IColor fillColor = Color.BLACK;
	private int strokeWidth = 1;
	
	public static ICircle createCircle() {
		ICircle circle = new Circle();
		return circle;
	}
	
	public static ICircle createCircle(int radius) {
		ICircle circle = new Circle(radius);
		return circle;
	}
	
	public static IRectangle createRectangle() {
		IRectangle rectangle = new Rectangle();
		return rectangle;
	}
	
	public static IRectangle createRectangle(int rectangleWidth, int rectangleHeight) {
		IRectangle rectangle = new Rectangle(rectangleWidth, rectangleHeight);
		return rectangle;
	}
	
	public static IRectangle createRectangle(int rectangleWidth, int rectangleHeight, int cornerRadiusX, int cornerRadiusY) {
		IRectangle rectangle = new Rectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
		return rectangle;
	}
	
	public static ILine createLine() {
		ILine line = new Line();
		return line;
	}
	
	public static ILine createLine(int length) {
		ILine line = new Line(length);
		return line;
	}
	
	public static IEllipse createEllipse() {
		IEllipse ellipse = new Ellipse();
		return ellipse;
	}
	
	public static IEllipse createEllipse(int radiusX, int radiusY) {
		IEllipse ellipse = new Ellipse(radiusX, radiusY);
		return ellipse;
	}
	
	public Shape(String id) {
		super(id);
	}

	public void setStrokeWidth(int strokeWidth) {
		this.strokeWidth = strokeWidth;
		super.getRenderer().update();
	}
	public int getStrokeWidth() {
		return this.strokeWidth;
	}

	public void setStrokeColor(IColor strokeColor) {
		this.strokeColor = strokeColor;
		super.getRenderer().update();
	}
	public IColor getStrokeColor() {
		return this.strokeColor;
	}

	public void setFillColor(IColor fillColor) {
		this.fillColor = fillColor;
		super.getRenderer().update();
	}
	public IColor getFillColor() {
		return this.fillColor;
	}
	
	@Override
	public int getWidth() {
		return super.getRenderer().getOriginalWidth();
	}
	
	@Override
	public int getHeight() {
		return super.getRenderer().getOriginalHeight();
	}
	
	@Override
	public void setWidth(int width) {
	}
	
	@Override
	public void setHeight(int height) {
	}
	
	
	
	
	
}