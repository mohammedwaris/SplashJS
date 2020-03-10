package splashjs.render.controls;


import splashjs.render.HTMLDomEventName;
import splashjs.render.controls.iface.IBaseInputRenderer;
import splashjs.controls.iface.IBaseInput;

public abstract class BaseInputRenderer extends BaseTextRenderer implements IBaseInputRenderer {
	
	private int maxChars = 256;
	private String placeHolderText = "";
	private boolean editable = true;

	public void createEventListeners() {
		super.createEventListeners();
		super.getDOMElement().addEventListener(HTMLDomEventName.SELECT, (event) -> {
			
		});
	}

	public void create() {
		create();
		setPlaceHolderText(this.placeHolderText);
		setMaxChars(this.maxChars);
		setEditable(this.editable);
	}

	public void setPlaceHolderText(String placeHolderText) {
		
		//String placeHolderText = ((IBaseInput)super.getRenderObject()).getPlaceHolderText();
		if(placeHolderText != null) {
			super.getDOMElement().setAttribute("placeHolder", placeHolderText);
			this.placeHolderText = placeHolderText;
		}
		else {
			super.getDOMElement().setAttribute("placeHolder", "");
			this.placeHolderText = "";
		}
	}

	public String getPlaceHolderText() {
		return this.placeHolderText;
	}
	
	public void setMaxChars(int maxChars) {
		//int maxChars = ((IBaseInput)super.getRenderObject()).getMaxChars();
		if(maxChars >= 1) {
			super.getDOMElement().setAttribute("maxLength", maxChars + "");
			this.maxChars = maxChars;
		}
	}

	public int getMaxChars() {
		return this.maxChars;
	}
	
	
	
	public void setEditable(boolean editable) {
		//boolean editable = ((IBaseInput)super.getRenderObject()).getEditable();
		if(editable == true) {
			super.getDOMElement().removeAttribute("readOnly");
			this.editable = editable;
		}
		else if(editable == false) {
			super.getDOMElement().setAttribute("readOnly", "readonly");
			this.editable = editable;
		}
	}

	public boolean getEditable() {
		return this.editable;
	}
	
	public abstract void setSelection(); 

	public void applyCSS() {
		super.applyCSS();
		

	}
}