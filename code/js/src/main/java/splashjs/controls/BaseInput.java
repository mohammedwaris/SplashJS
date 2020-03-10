package splashjs.controls;

import splashjs.controls.iface.IBaseInput;
import splashjs.render.controls.iface.IBaseInputRenderer;


public abstract class BaseInput extends BaseText implements IBaseInput {

	//private String placeHolderText;
	//private int maxChars = 0;
	private int selectionBeginIndex;
	private int selectionEndIndex;
	
	//private boolean editable = true;
	
	public BaseInput(String id) {
		super(id);
	}
	
	public void setMaxChars(int maxChars) {
		//this.maxChars = maxChars;
		//if(super.getRenderer() != null)
		((IBaseInputRenderer)super.getRenderer()).setMaxChars(maxChars);
	}
	
	public int getMaxChars() {
		return ((IBaseInputRenderer)super.getRenderer()).getMaxChars();
	}
	
	
	
	public void setEditable(boolean editable) {
		//this.editable = editable;
		((IBaseInputRenderer)super.getRenderer()).setEditable(editable);
	}
	
	public boolean getEditable() {
		return ((IBaseInputRenderer)super.getRenderer()).getEditable();
	}
	
	public boolean isEditable() {
		return ((IBaseInputRenderer)super.getRenderer()).getEditable();
	}
	
	public void setPlaceHolderText(String placeHolderText) {
		//this.placeHolderText = placeHolderText;
		//if(super.getRenderer() != null)
		((IBaseInputRenderer)super.getRenderer()).setPlaceHolderText(placeHolderText);
	}
	
	public String getPlaceHolderText() {
		return ((IBaseInputRenderer)super.getRenderer()).getPlaceHolderText();
	}
	
	public int getSelectionBeginIndex() {
		return this.selectionBeginIndex;
	}
	
	public int getSelectionEndIndex() {
		return this.selectionEndIndex;
	}
	
	public void setSelection(int beginIndex, int endIndex) {
		this.selectionBeginIndex = beginIndex;
		this.selectionEndIndex = endIndex;
		if(super.getRenderer() != null)
			((IBaseInputRenderer)super.getRenderer()).setSelection();
	}
	
	public void render() {
		super.render();
		//((IBaseInputRenderer)super.getRenderer()).setMaxChars();
		
		//((IBaseInputRenderer)super.getRenderer()).setEditable();
		//((IBaseInputRenderer)super.getRenderer()).setPlaceHolderText();
	}
}