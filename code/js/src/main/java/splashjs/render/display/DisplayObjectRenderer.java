package splashjs.render.display;

import def.dom.HTMLElement;
import static def.dom.Globals.document;

import java.util.ArrayList;

import splashjs.render.HTMLDomEventName;
import splashjs.events.iface.IMouseEvent;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.render.display.iface.IDisplayObjectRenderer;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.filters.iface.IFilter;
import splashjs.ui.iface.IMouseCursor;
import splashjs.geom.iface.IPoint;


public abstract class DisplayObjectRenderer extends EventDispatcherRenderer implements IDisplayObjectRenderer, IDisplayObject {
	
	private HTMLElement htmlElement;
	
	private int x;
	private int y;
	private int regX;
	private int regY;
	private double scaleX;
	private double scaleY;
	private int rotation;
	private boolean visible;
	private double alpha;
	private String name;
	private int mouseX;
	private int mouseY;
	private boolean mouseVisible;
	private IMouseCursor mouseCursor;
	private ArrayList<IFilter> filters;
	
	public DisplayObjectRenderer() {
		htmlElement = (HTMLElement) getDOMElement();
	}
	
	public void createEventListeners() {
		super.createEventListeners();
		
		getDOMElement().addEventListener(HTMLDomEventName.MOUSEMOVE, (event) -> {
			//if(htmlElement == event.target) {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, getRenderObject());
			def.dom.MouseEvent domMouseEvent = (def.dom.MouseEvent)event;
			
				mouseEvent.setLocalX((int)domMouseEvent.clientX-((IDisplayObject)getRenderObject()).getX());
				mouseEvent.setLocalY((int)domMouseEvent.clientY-((IDisplayObject)getRenderObject()).getY());
	
			//System.out.println(event);
			getRenderObject().dispatchEvent(mouseEvent);
			//}
		});
	}
	
	public void create() {
	}
	
	public int getOriginalWidth() {
		return 0;
	}
	
	public int getOriginalHeight() {
		return 0;
	}
	
	public void setX(int x) {
		
		this.x = x;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
	}
	
	public int getX() {
		return this.x;
	}
	
	public void setY(int y) {
		
		this.y = y;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
		
		/*
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();*/
	}
	
	public int getY() {
		return this.y;
	}
	
	public void setXY(int x, int y) {
		this.setX(x);
		this.setY(y);
	}
	
	public void setRegX(int regX) {
		
		this.regX = regX;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
		
		/*htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();*/
	}
	
	public void setRegY(int regY) {
		
		this.regY = regY;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
		
		/*htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText(); */
	}
	
	public void setRegXY(int regX, int regY) {
		this.setRegX(regX);
		this.setRegY(regY);
	}
	
	public void setScaleX(double scaleX) {
		
		this.scaleX = scaleX;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
		
		/*
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
		*/
	}
	
	public double getScaleX() {
		return this.scaleX;
	}
	
	public void setScaleY(double scaleY) {
		
		this.scaleY = scaleY;
		htmlElement.style.left = (this.x - this.regX) + UNIT;
		
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
		htmlElement.style.top = (this.y - this.regY) + UNIT;
		htmlElement.style.transformOrigin = this.regX + UNIT + " " + this.regY + UNIT;
		
		
		/*
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
		*/
	}
	
	public void getScaleY() {
		return this.scaleY;
	}
	
	public void setScaleXY() {
		this.setScaleX(scaleX);
		this.setScaleY(scaleY);		
	}
	
	public void setRotation(int rotation) {
		this.rotation = rotation;
		//htmlElement = (HTMLElement) getDOMElement();
		String scale = "scale(" + this.scaleX + ", " + this.ScaleY + ")";
		String rotate = "rotate(" + this.rotation + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		htmlElement.style.transform = transformText;
		
	}
	
	public int getRotation() {
		return this.rotation;
	}
	
	public void setAlpha(double alpha) {
		this.alpha = alpha;
		//htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.opacity = this.alpha + "";
	}
	
	public double getAlpha() {
		return this.alpha;
	}
	
	public void addFilter() {
		htmlElement = (HTMLElement) getDOMElement();		
		htmlElement.style.setProperty("filter", super.getCSSFilterText());
	}
	
	public void removeFilter() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.filter = super.getCSSFilterText();
	}
	
	public void setVisible() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.visibility = super.getCSSVisibilityText();
	}
	
	public boolean getVisible() {
		return false;
	}
	
	public void setMouseVisible() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.cursor = super.getCSSCursorVisibleText();
	}
	
	public void setMouseCursor() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.cursor = super.getCSSCursorText();
	}
	
	public void setMouseVisible(boolean mouseVisible) {
		
	}
	public boolean getMouseVisible() {
		return this.mouseVisible;
	}
	
	public void setMouseCursor(IMouseCursor mouseCursor) {
		
	}
	
	public IMouseCursor getMouseCursor() {
		return this.mouseCursor;
	}
	
	public void addFilter(IFilter filter) {
	}
	
	public void removeFilter(IFilter filter) {
	}
	
	public void removeAllFilters() {
	}
	
	public boolean hasFilter(IFilter filter) {
		return false;
	}
	
	public ArrayList<IFilter> getAllFilters() {
		return this.filters;
	}
	
	public IPoint localToGlobal(IPoint point) {
		return null;
	}
	
	public IPoint globalToLocal(IPoint point) {
		return null;
	}
	
	public boolean hitTestObject(IDisplayObject displayObject) {
		return false;
	}
	
	public boolean hitTestPoint(int x, int y) {
		return false;
	}
	
	public IDisplayObjectContainer getParent() {
		return null;
	}
	
	public String getName() {
		return null;
	}
	
	public void setName(String name) {
	}
	
	public int getMouseX() {
		return 0;
	}
	public int getMouseY() {
		return 0;
	}
	
	public void setID() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.id = super.getCSSIDText();
	}
	
	public void setWidth() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.width = super.getCSSWidthText();
	}
	
	public void setHeight() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.height = super.getCSSHeightText();
	}
	
	public int getWidth() {
		htmlElement = (HTMLElement) getDOMElement();
		return (int)htmlElement.clientWidth;
	}
	
	public int getHeight() {
		htmlElement = (HTMLElement) getDOMElement();
		return (int)htmlElement.clientHeight;
	}
	
	
	
	public void setBorder(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.border = value;
	}
	
	public void setPosition(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.position = value;
	}
	
	public void setMargin(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.margin = value;
	}
	
	public void setPadding(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.padding = value;
	}
	
	public void setZIndex(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.zIndex = value;
	}
	
	public void setOverflow(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.overflow = value;
	}
	
	public void setResize(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.setProperty("resize", value);
	}
}