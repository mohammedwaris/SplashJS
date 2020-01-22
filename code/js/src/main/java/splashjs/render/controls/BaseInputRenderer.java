package splashjs.render.controls;


import splashjs.render.HTMLDomEventName;
import splashjs.render.controls.iface.IBaseInputRenderer;
import splashjs.controls.iface.IBaseInput;

public abstract class BaseInputRenderer extends BaseTextRenderer implements IBaseInputRenderer {
	
	
	public void createEventListeners() {
		super.createEventListeners();
		super.getDOMElement().addEventListener(HTMLDomEventName.SELECT, (event) -> {
			
		});
	}

	public void setPlaceHolderText() {
		
		String placeHolderText = ((IBaseInput)super.getRenderObject()).getPlaceHolderText();
		if(placeHolderText != null)
			super.getDOMElement().setAttribute("placeHolder", placeHolderText);
		else
			super.getDOMElement().setAttribute("placeHolder", "");
	}
	
	public void setMaxChars() {
		int maxChars = ((IBaseInput)super.getRenderObject()).getMaxChars();
		if(maxChars >= 1)
			super.getDOMElement().setAttribute("maxLength", maxChars + "");
	}
	
	
	
	public void setEditable() {
		boolean editable = ((IBaseInput)super.getRenderObject()).getEditable();
		if(editable == true)
			super.getDOMElement().removeAttribute("readOnly");
		else if(editable == false)
			super.getDOMElement().setAttribute("readOnly", "readonly");
	}
	
	public abstract void setSelection(); 
}