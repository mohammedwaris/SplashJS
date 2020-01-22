package flashjs.render.display.desktop;

import org.w3c.dom.html.*;
import org.w3c.dom.*;

import flashjs.display.*;
import flashjs.render.*;
import flashjs.utils.*;
import flashjs.events.*;
import flashjs.render.display.*;

public abstract class DesktopShapeRenderer extends DesktopInteractiveObjectRenderer implements IShapeRenderer {


	protected Element childSVGElement;
	
	
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DRAW)) {
			//draw();
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.UPDATE_DRAW)) {
			//update();
		}
	}


	
	public Element getSVGElement() {
		return (Element) super.getDesktopDOMElement();
	}

}