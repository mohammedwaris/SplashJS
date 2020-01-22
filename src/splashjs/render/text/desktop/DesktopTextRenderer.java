package flashjs.render.text.desktop;

import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.render.*;
import flashjs.utils.*;
import flashjs.events.*;
import flashjs.text.*;
import flashjs.render.text.*;
import flashjs.render.display.desktop.*;

public abstract class DesktopTextRenderer extends DesktopInteractiveObjectRenderer implements ITextRenderer {

	
	
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		
		String js = "";
		if(elementProperty.equalsIgnoreCase(ElementProperty.COLOR)) {
			js = super.getRenderObjectID() + ".style.color = '" + getCSSColorText() + "';\r\n";
			//((HTMLElement)getBrowserDOMElement()).style.color = getCSSColorText();
		}
		
		webEngine.executeScript(js);
	}
	
	public int getClientWidth() {
		String js = super.getRenderObjectID() + ".clientWidth;";
		//webEngine.executeScript("console.log(document.getElementById(\"" + super.getRenderObjectID() + ".id" + "\"));");
		int clientWidth = (int) webEngine.executeScript(js);
		return clientWidth;
	}
	
	public int getClientHeight() {
		String js = super.getRenderObjectID() + ".clientHeight;";
		int clientHeight = (int) webEngine.executeScript(js);
		return clientHeight;
	}
	
	private String getCSSColorText() {
		
		String colorName = ColorName.BLACK;
		IColor color = ((IText) super.getRenderObject()).getColor();
		if(color.getColorType().equalsIgnoreCase(ColorType.NAME))
			colorName = color.getColorName();
		else if(color.getColorType().equalsIgnoreCase(ColorType.HEX))
			colorName = color.getHEX();
		
		return colorName;
	}
	
	public void setColor() {
	}
	
	public void setText() {
	}
	
	public void setFont() {
	}
	
	public void setFontSize() {
	}
	
	public void setFontWeight() {
	}
	
	public void setFontStyle() {
	}
	
	public void setSelectable() {
	}

}