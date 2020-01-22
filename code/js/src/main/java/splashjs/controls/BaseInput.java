package splashjs.controls;

import splashjs.controls.iface.IBaseInput;
import splashjs.render.controls.iface.IBaseInputRenderer;


public abstract class BaseInput extends BaseText implements IBaseInput {

	private String placeHolderText;
	private int maxChars = 0;
	private int selectionBeginIndex;
	private int selectionEndIndex;
	
	private boolean editable = true;
	
	public BaseInput(String id) {
		super(id);
	}
	
	public void setMaxChars(int maxChars) {
		this.maxChars = maxChars;
		if(super.getRenderer() != null)
			((IBaseInputRenderer)super.getRenderer()).setMaxChars();
	}
	
	public int getMaxChars() {
		return this.maxChars;
	}
	
	
	
	public void setEditable(boolean editable) {
		this.editable = editable;
	}
	
	public boolean getEditable() {
		return this.editable;
	}
	
	public boolean isEditable() {
		return this.getEditable();
	}
	
	public void setPlaceHolderText(String placeHolderText) {
		this.placeHolderText = placeHolderText;
		if(super.getRenderer() != null)
			((IBaseInputRenderer)super.getRenderer()).setPlaceHolderText();
	}
	
	public String getPlaceHolderText() {
		return this.placeHolderText;
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
		((IBaseInputRenderer)super.getRenderer()).setMaxChars();
		
		((IBaseInputRenderer)super.getRenderer()).setEditable();
		((IBaseInputRenderer)super.getRenderer()).setPlaceHolderText();
	}
}