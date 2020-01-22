package splashjs.controls;

import splashjs.controls.iface.IBaseText;
import splashjs.render.controls.iface.IBaseTextRenderer;

public abstract class BaseText extends Control implements IBaseText {

	protected String text;
	
	public BaseText(String id) {
		super(id);
	}
	
	public void setText(String text) {
		this.text = text;
		if(super.getRenderer() != null)
			((IBaseTextRenderer)super.getRenderer()).setText();
	}
	
	public String getText() {
		return this.text;
	}
}