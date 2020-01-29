package splashjs.render.display;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLSpanElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;
import splashjs.events.iface.IEventDispatcher;

public class SpriteRenderer extends DisplayObjectContainerRenderer {
	
	//private HTMLSpanElement spanElement;
	
	
	
	public SpriteRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement((HTMLSpanElement) document.createElement("span")));
	}
	
	/*public void appendChild(IRenderer childRenderer) {
		IRenderElement childRenderElement = childRenderer.getRenderElement();
		Element childElement = ((RenderElement) childRenderElement).getElement();
		this.getElement().appendChild(childElement);
	}*/
	
	/*
	public void setProperty(String elementProperty, String value) {
		
		HTMLElement htmlElement = (HTMLElement) getElement();
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DISPLAY)) {
			htmlElement.style.display = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.POSITION)) {
			htmlElement.style.position = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER)) {
			htmlElement.style.border = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.MARGIN)) {
			htmlElement.style.margin = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.PADDING)) {
			htmlElement.style.padding = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			htmlElement.style.width = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			htmlElement.style.height = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.OVERFLOW)) {
			htmlElement.style.overflow = value;
		}
		
	}
	
	public void setProperty(String elementProperty) {

		HTMLElement htmlElement = (HTMLElement) getElement();
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.Y)){
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.X)) {
			
			htmlElement.style.left = super.getCSSLeftText(); 
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			
			htmlElement.style.width = super.getCSSWidthText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			
			htmlElement.style.height = super.getCSSHeightText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SCALE_X) || 
				elementProperty.equalsIgnoreCase(ElementProperty.SCALE_Y) ) {
					
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ROTATION)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_X)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_Y)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText(); 
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ID)) {
			
			htmlElement.id = super.getCSSIDText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.COLOR)) {
			
			//Text text = (Text)renderObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}
		
		
	}
	
	*/
	
	
	/*private Element getElement() {
		Element element = ((RenderElement) super.renderElement).getElement();
		return element;
	}*/
	
	
		
}