package splashjs.display.iface;

public interface IRectangle extends IShape {

	public void setCornerRadiusX(int rx);
	public int getCornerRadiusX();
	
	public void setCornerRadiusY(int ry);
	public int getCornerRadiusY();
	
	public int getRectangleWidth();
	public void setRectangleWidth(int rectangleWidth);
	
	public int getRectangleHeight();
	public void setRectangleHeight(int rectangleHeight);
	
}