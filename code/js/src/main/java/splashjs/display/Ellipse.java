package splashjs.display;


import splashjs.display.iface.IEllipse;

public class Ellipse extends Shape implements IEllipse {

	private int radiusX = 0;
	private int radiusY = 0;
	
	public Ellipse() {
		super("ellipse");
	}
	
	public Ellipse(int radiusX, int radiusY) {
		this();
		this.radiusX = radiusX;
		this.radiusY = radiusY;
	}

}