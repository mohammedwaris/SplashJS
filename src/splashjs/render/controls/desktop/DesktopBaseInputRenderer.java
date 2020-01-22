package flashjs.render.controls.desktop;

import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.controls.*;
import flashjs.render.display.desktop.*;

public abstract class DesktopBaseInputRenderer extends DesktopBaseTextRenderer implements IBaseInputRenderer {
	
	
	public void createEventListeners() {
		super.createEventListeners();
		//super.getBrowserDOMElement().addEventListener(HTMLDomEventName.SELECT, (event) -> {
			
		//});
	}

	public void setPlaceHolderText() {
		
		String placeHolderText = ((IBaseInput)super.getRenderObject()).getPlaceHolderText();
		if(placeHolderText != null)
			super.getDesktopDOMElement().setAttribute("placeHolder", placeHolderText);
		else
			super.getDesktopDOMElement().setAttribute("placeHolder", "");
	}
	
	public void setMaxChars() {
		int maxChars = ((IBaseInput)super.getRenderObject()).getMaxChars();
		if(maxChars >= 1)
			super.getDesktopDOMElement().setAttribute("maxLength", maxChars + "");
	}
	
	
	
	public void setEditable() {
		boolean editable = ((IBaseInput)super.getRenderObject()).getEditable();
		if(editable == true)
			super.getDesktopDOMElement().removeAttribute("readOnly");
		else if(editable == false)
			super.getDesktopDOMElement().setAttribute("readOnly", "readonly");
	}
	
	public abstract void setSelection(); 
}