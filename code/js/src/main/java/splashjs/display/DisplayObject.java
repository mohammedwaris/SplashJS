package splashjs.display;

import java.util.ArrayList;

import splashjs.events.EventDispatcher;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IStage;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.filters.iface.IFilter;
import splashjs.ui.iface.IMouseCursor;
import splashjs.ui.MouseCursor;
import splashjs.geom.Point;
import splashjs.geom.iface.IPoint;
import splashjs.render.display.iface.IDisplayObjectRenderer;
import splashjs.display.iface.IBitmapDrawable;




public abstract class DisplayObject extends EventDispatcher implements IDisplayObject, IBitmapDrawable {
	
	private int x;
	private int y;
	protected int width;
	protected int height;
	private int regX;
	private int regY;
	protected double scaleX;
	protected double scaleY;
	private double rotation;
	private boolean visible;
	private double alpha;
	private String name;
	protected IDisplayObjectContainer parent;
	private int mouseX;
	private int mouseY;
	private boolean mouseVisible;
	private IMouseCursor mouseCursor;
	
	protected int originalWidth;
	protected int originalHeight;
	
	//private	IRenderer renderer;
	
	private ArrayList<IFilter> filters;
	
	protected DisplayObject() {
		this("splashjs");
	}
	
	protected DisplayObject(String id) {
		super(id);
		x = 0;
		y = 0;
		width = 0;
		height = 0;
		regX = 0;
		regY = 0;
		scaleX  = 1.0;
		scaleY = 1.0;
		rotation = 0.0;
		visible = true;
		alpha = 1.0;
		name = null;
		parent = null;
		mouseX = null;
		mouseY = null;
		mouseVisible = true;
		mouseCursor = MouseCursor.AUTO;
		filters = new ArrayList<IFilter>();
		
	}
	
	public int getX() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getX();
	}
	public void setX(int x) {
		this.x = x;
		((IDisplayObjectRenderer)super.getRenderer()).setX(x);
	}
	
	public int getY() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getY();
	}
	public void setY(int y) {
		this.y = y;
		((IDisplayObjectRenderer)super.getRenderer()).setY(y);
	}
	
	public void setXY(int x, int y) {
		((IDisplayObjectRenderer)super.getRenderer()).setX(x);
		((IDisplayObjectRenderer)super.getRenderer()).setY(y);
	}
	
	public int getWidth() {
		return this.width;
	}
	public void setWidth(int width) {
		this.width = width;
		((IDisplayObjectRenderer)super.getRenderer()).setWidth();
	}
	
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
		((IDisplayObjectRenderer)super.getRenderer()).setHeight();
	}
	
	public void setSize(int width, int height) {
		this.setWidth(width);
		this.setHeight(height);
	}
	
	public int getRegX() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getRegX();
	}
	public void setRegX(int regX) {
		//this.regX = regX;
		((IDisplayObjectRenderer)super.getRenderer()).setRegX(regX);
	}
	
	public int getRegY() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getRegY();
	}
	public void setRegY(int regY) {
		//this.regY = regY;
		((IDisplayObjectRenderer)super.getRenderer()).setRegY(regY);
	}
	
	public void setRegXY(int regX, int regY) {
		((IDisplayObjectRenderer)super.getRenderer()).setRegX(regX);
		((IDisplayObjectRenderer)super.getRenderer()).setRegY(regY);
	}
	
	public double getScaleX() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getScaleX();
	}
	public void setScaleX(double scaleX) {
		//this.scaleX = scaleX;
		((IDisplayObjectRenderer)super.getRenderer()).setScaleX(scaleX);
	}
	
	public double getScaleY() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getScaleY();
	}
	public void setScaleY(double scaleY) {
		//this.scaleY = scaleY;
		((IDisplayObjectRenderer)super.getRenderer()).setScaleY(scaleY);
	}
	
	public void setScaleXY(double scaleX, double scaleY) {
		((IDisplayObjectRenderer)super.getRenderer()).setScaleX(scaleX);
		((IDisplayObjectRenderer)super.getRenderer()).setScaleY(scaleY);
	}
	
	public double getRotation() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getRotation();
	}
	public void setRotation(double rotation) {
		//this.rotation = rotation;
		((IDisplayObjectRenderer)super.getRenderer()).setRotation(rotation);
	}
	
	public boolean getVisible() {
		return ((IDisplayObjectRenderer)super.getRenderer()).getVisible();
	}
	public void setVisible(boolean visible) {
		//this.visible = visible;
		((IDisplayObjectRenderer)super.getRenderer()).setVisible(visible);
	}
	
	public double getAlpha() {
		return((IDisplayObjectRenderer)super.getRenderer()).getAlpha();
	}
	
	public void setAlpha(double alpha) {
		//this.alpha = alpha;
		((IDisplayObjectRenderer)super.getRenderer()).setAlpha(alpha);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public IDisplayObjectContainer getParent() {
		return this.parent;
	}
	
	public int getMouseX() {
		return mouseX;
	}
	public int getMouseY() {
		return mouseY;
	}
	
	public void setMouseVisible(boolean mouseVisible) {
		this.mouseVisible = mouseVisible;
		((IDisplayObjectRenderer)super.getRenderer()).setMouseVisible();
	}
	
	public boolean getMouseVisible() {
		return this.mouseVisible;
	}
	
	public void setMouseCursor(IMouseCursor mouseCursor) {
		this.mouseCursor = mouseCursor;
		((IDisplayObjectRenderer)super.getRenderer()).setMouseCursor();
	}
	
	public IMouseCursor getMouseCursor() {
		return this.mouseCursor;
	}
	
	
	
	public void addFilter(IFilter filter) {
		filters.add(filter);
		((IDisplayObjectRenderer)super.getRenderer()).addFilter();
	}
	
	public void removeFilter(IFilter filter) {
		filters.remove(filter);
		((IDisplayObjectRenderer)super.getRenderer()).removeFilter();
	}
	
	public void removeAllFilters() {
		filters.clear();
		((IDisplayObjectRenderer)super.getRenderer()).removeFilter();
	}
	
	public boolean hasFilter(IFilter filter) {
		return filters.contains(filter);
	}
	
	public ArrayList<IFilter> getAllFilters() {
		return filters;
	}
	
	public IPoint localToGlobal(IPoint localPoint) {
		IPoint globalPoint = new Point();
		int x = this.x + localPoint.getX();
		int y = this.y + localPoint.getY();
		globalPoint.setX(x);
		globalPoint.setY(y);
		return globalPoint;
	}
	
	public IPoint globalToLocal(IPoint globalPoint) {
		IPoint localPoint = new Point();
		localPoint.setX(globalPoint.getX() - this.x);
		localPoint.setY(globalPoint.getY() - this.y);
		return localPoint;
	}
	
	public boolean hitTestObject(IDisplayObject displayObject) {
		boolean hit = false;
		int dox1 = (int)(displayObject.getX()*displayObject.getStage().getScaleX());
		int doy1 = (int)(displayObject.getY()*displayObject.getStage().getScaleY());
		int dox2 = (int)(displayObject.getX()*displayObject.getStage().getScaleX() + displayObject.getWidth()*displayObject.getStage().getScaleX());
		int doy2 = (int)(displayObject.getY()*displayObject.getStage().getScaleY() + displayObject.getHeight()*displayObject.getStage().getScaleY());
		int myx1 = (int)(this.getX()*this.getStage().getScaleX());
		int myy1 = (int)(this.getY()*this.getStage().getScaleY());
		int myx2 = (int)(this.getX()*this.getStage().getScaleX() + this.getWidth()*this.getStage().getScaleX());
		int myy2 = (int)(this.getY()*this.getStage().getScaleY() + this.getHeight()*this.getStage().getScaleY());

		IPoint displayObjectGlobalStartPoint = displayObject.localToGlobal(new Point(dox1, doy1));
		IPoint displayObjectGlobalEndPoint = displayObject.localToGlobal(new Point(dox2, doy2));
		IPoint myGlobalStartPoint = localToGlobal(new Point(myx1, myy1));
		IPoint myGlobalEndPoint = localToGlobal(new Point(myx2, myy2));
		int displayObjectStartX = displayObjectGlobalStartPoint.getX();
		int displayObjectStartY = displayObjectGlobalStartPoint.getY();
		int displayObjectEndX = displayObjectGlobalEndPoint.getX();
		int displayObjectEndY = displayObjectGlobalEndPoint.getY();
		int myStartX = myGlobalStartPoint.getX();
		int myStartY = myGlobalStartPoint.getY();
		int myEndX = myGlobalEndPoint.getX();
		int myEndY = myGlobalEndPoint.getY();
		System.out.println("x1: " + displayObjectStartX + ", y1: " + displayObjectStartY);
		System.out.println("x2: " + displayObjectEndX + ", y2: " + displayObjectEndY);
		System.out.println("------------");
		System.out.println("x1: " + myStartX + ", y1: " + myStartY);
		System.out.println("x2: " + myEndX + ", y2: " + myEndY);
		if(myStartX >= displayObjectStartX && myStartX <= displayObjectEndX && myStartY >= displayObjectStartY&& myStartY <= displayObjectEndY)
			hit = true;
		else if(myEndX >= displayObjectStartX && myEndX <= displayObjectEndX && myEndY >= displayObjectStartY && myEndY <= displayObjectEndY)
			hit = true;
		
		return hit;
	}
	
	public boolean hitTestPoint(int x, int y) {
		boolean out = false;
		IPoint localPoint = globalToLocal(new Point(x, y));
		int x1 = this.x - this.regX;
		int y1 = this.y - this.regY;
		int x2 = x1 + this.getWidth();
		int y2 = y1 + this.getHeight();
		System.out.println(localPoint.getX() + " " + y1 + "-" + x2 + " " + y2 + "-" + x + " " + y);
		if((x >= x1 &&  x <= x2) && ( y >= y1 && y <= y2))
			out = true;
		
		return out;
	}
	
	@Override
	public void render() {
		
		super.render();
			
		((IDisplayObjectRenderer)super.getRenderer()).setPosition("absolute");
		((IDisplayObjectRenderer)super.getRenderer()).setDisplay("inline-blick");
		((IDisplayObjectRenderer)super.getRenderer()).setMargin("0");
		((IDisplayObjectRenderer)super.getRenderer()).setPadding("0");
		
		((IDisplayObjectRenderer)super.getRenderer()).setID();
		((IDisplayObjectRenderer)super.getRenderer()).setRegXY();
		((IDisplayObjectRenderer)super.getRenderer()).setXY();
		((IDisplayObjectRenderer)super.getRenderer()).setScaleXY();
		((IDisplayObjectRenderer)super.getRenderer()).setRotation();
		((IDisplayObjectRenderer)super.getRenderer()).addFilter();
		((IDisplayObjectRenderer)super.getRenderer()).setVisible();
		((IDisplayObjectRenderer)super.getRenderer()).setAlpha();
		((IDisplayObjectRenderer)super.getRenderer()).setMouseCursor();
		((IDisplayObjectRenderer)super.getRenderer()).setMouseVisible();
		
	}
	
	public boolean dispatchEvent(IEvent event) {
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			this.stage = (IStage)event.getData();
			render();
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED_FROM_STAGE)) {
			this.stage = null;
		}if(event.getType().equalsIgnoreCase(Event.ADDED)) {
			this.parent = (IDisplayObjectContainer)event.getData();
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED)) {
			this.parent = null;
		}
		
		return super.dispatchEvent(event);
	}		
	
	
}//end of class