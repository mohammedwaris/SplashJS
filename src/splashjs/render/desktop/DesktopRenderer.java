package flashjs.render.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;
import org.w3c.dom.events.*;
import netscape.javascript.JSObject;

import flashjs.render.*;
import flashjs.display.*;
import flashjs.events.*;

public abstract class DesktopRenderer extends Renderer implements IDesktopRenderer, org.w3c.dom.events.EventListener {
	
	protected javafx.scene.web.WebEngine webEngine;
	protected String js = "";

	protected void setWebEngine(javafx.scene.web.WebEngine webEngine) {
		this.webEngine = webEngine;
	}
	
	public void createEventListeners() {
		Element htmlElement = (Element) webEngine.executeScript(super.getRenderObjectID());
		
		if(htmlElement != null) {
		
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.LOAD, this, true);
		
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.CLICK, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.DBLCLICK, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEDOWN, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEENTER, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSELEAVE, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEMOVE, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEOUT, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEOVER, this, true);
			((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEUP, this, true);
		}
	}

	public void appendChild(IRenderer childRenderer) {
		Element childElement = ((IDesktopRenderer) childRenderer).getDesktopDOMElement();
		getDesktopDOMElement().appendChild(childElement);
	}
	
	public void removeChild(IRenderer childRenderer){
		Element childElement = ((IDesktopRenderer) childRenderer).getDesktopDOMElement();
		getDesktopDOMElement().removeChild(childElement);
	}

	public void setProperty(String elementProperty) {

		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		
		String js = "";
		if(elementProperty.equalsIgnoreCase(ElementProperty.Y)){
			
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.X)) {
			
			
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SCALE_X) || 
				elementProperty.equalsIgnoreCase(ElementProperty.SCALE_Y) ) {
					
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ROTATION)) {
			
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_X)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_Y)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.FILTER)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ALPHA)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.VISIBLE)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ID)) {
			
			
			//htmlElement.id = getCSSIDText();
			
		}
		
		webEngine.executeScript(js);
		
	}
	
	public void setProperty(String elementProperty, String value) {
		
		String js = "";
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DISPLAY)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.POSITION)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.MARGIN)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.PADDING)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			//js = super.getRenderObjectID() + ".style.width = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			//js = super.getRenderObjectID() + ".style.height = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.OVERFLOW)) {
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER_COLLAPSE)) {
			js = super.getRenderObjectID() + ".style.borderCollapse = \"" + value + "\";\r\n";
		}else {
			
		}
		
		webEngine.executeScript(js);
		
	}

	public int getOriginalWidth() {
		js = super.getRenderObjectID() + ".clientWidth;";
		return (int)webEngine.executeScript(js);
	}
	
	public int getOriginalHeight() {
		js = super.getRenderObjectID() + ".clientHeight;";
		return (int)webEngine.executeScript(js);
	}


	public void appendToBody() {
		String js = "document.body.appendChild(" + super.getRenderObjectID() + ");\r\n";
		webEngine.executeScript(js);
		
		
	}

	@Override
	public Element getDesktopDOMElement() {
		Element element = ((DesktopRenderElement) super.renderElement).getDesktopDOMElement();
		return element;
	}
	
	@Override
	public void handleEvent(org.w3c.dom.events.Event evt) {
		
		
		boolean isMouseEvent = false;
		String eventName = null;
		
		if(evt.getType().equalsIgnoreCase(HTMLDomEventName.CLICK)) {
			
			isMouseEvent = true;
			eventName = EventName.CLICK;
			
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.DBLCLICK)) {
			
			isMouseEvent = true;
			eventName = EventName.DOUBLE_CLICK;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEDOWN)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_DOWN;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEENTER)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_ENTER;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSELEAVE)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_LEAVE;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEMOVE)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_MOVE;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEOUT)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_OUT;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEOVER)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_OVER;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEUP)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_UP;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.LOAD)) {
			IEvent event = new flashjs.events.impl.Event(flashjs.events.EventName.LOADED);
			getRenderObject().dispatchEvent(event);
			
			/*
			if(super.getRenderObject() instanceof IImage) {
				//String js = "console.log(" + super.getRenderObjectID() + ".naturalWidth" + ");";
				//System.out.println(js);
				//webEngine.executeScript(js);
				int naturalWidth = (int) webEngine.executeScript(super.getRenderObjectID() + ".naturalWidth");
				int naturalHeight = (int) webEngine.executeScript(super.getRenderObjectID() + ".naturalHeight");
				IEvent event = new flashjs.events.impl.Event(EventName.COMPLETE);
				((IImage)super.getRenderObject()).dispatchCompleteEvent(event, naturalWidth, naturalHeight);
				//System.out.println(naturalWidth + " " + naturalHeight);
			}*/
			
		}
		
		if(isMouseEvent) {
			org.w3c.dom.events.MouseEvent domMouseEvent = (org.w3c.dom.events.MouseEvent) evt;
			IMouseEvent mouseEvent = new flashjs.events.impl.MouseEvent(eventName, super.getRenderObject(), super.getRenderObject());
			//mouseEvent.setAltKey(domMouseEvent.getAltKey());
			super.getRenderObject().dispatchEvent(mouseEvent);
		}

	}
}