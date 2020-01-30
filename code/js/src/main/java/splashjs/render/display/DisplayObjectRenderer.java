package splashjs.render.display;

import def.dom.HTMLElement;
import static def.dom.Globals.document;

import splashjs.render.HTMLDomEventName;
import splashjs.events.iface.IMouseEvent;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.iface.IDisplayObjectRenderer;
import splashjs.render.events.EventDispatcherRenderer;


public abstract class DisplayObjectRenderer extends EventDispatcherRenderer implements IDisplayObjectRenderer {
	
	private HTMLElement htmlElement;
	
	public DisplayObjectRenderer() {
		
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
	
	public void setX() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.left = super.getCSSLeftText(); 
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
	}
	
	public void setY() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
	}
	
	public void setXY() {
		setX();
		setY();
	}
	
	public void setRegX() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
	}
	
	public void setRegY() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText(); 
	}
	
	public void setRegXY() {
		setRegX();
		setRegY();
	}
	
	public void setScaleX() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
	}
	
	public void setScaleY() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
		htmlElement.style.left = super.getCSSLeftText();
		htmlElement.style.top = super.getCSSTopText(); 
		htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
	}
	
	public void setScaleXY() {
		setScaleX();
		setScaleY();		
	}
	
	public void setRotation() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.transform = super.getCSSTransformText();
	}
	
	public void setAlpha() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.opacity = super.getCSSOpacityText();
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
	
	public void setMouseVisible() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.cursor = super.getCSSCursorVisibleText();
	}
	
	public void setMouseCursor() {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.cursor = super.getCSSCursorText();
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