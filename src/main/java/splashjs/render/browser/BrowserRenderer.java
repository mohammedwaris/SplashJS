package splashjs.render.browser;

import def.dom.*;
import static def.dom.Globals.*;

import splashjs.render.*;
import splashjs.render.iface.*;
import splashjs.events.*;
import splashjs.events.iface.*;

public abstract class BrowserRenderer extends Renderer implements IBrowserRenderer {
	
	

/*
	public void setProperty(String elementProperty, String value) {
		
		HTMLElement htmlElement = (HTMLElement) getBrowserDOMElement();
		
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
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.Z_INDEX)) {
			htmlElement.style.zIndex = value;
		}
		
	}*/

/*
	public void setProperty(String elementProperty) {

		//IDisplayObject renderObject = (IDisplayObject) super.getRenderObject();
		HTMLElement htmlElement = (HTMLElement) getBrowserDOMElement();
		
		/*if(elementProperty.equalsIgnoreCase(ElementProperty.Y)){
			
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
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SCALE_X) || 
				elementProperty.equalsIgnoreCase(ElementProperty.SCALE_Y) ) {
					
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ROTATION)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_X)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_Y)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ID)) {
			
			
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.COLOR)) {
			
			//Text text = (Text)renderObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ALPHA)) {
			
			
			//Text text = (Text)renderObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.VISIBLE)) {
			
			
			//Text text = (Text)renderObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}
		
		
	}*/

	

	
	public Element getDOMElement() {
		Element element = ((RenderElement) super.renderElement).getDOMElement();
		return element;
	}


}//end of class