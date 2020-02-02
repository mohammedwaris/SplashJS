package splashjs.text;

import splashjs.Global;
import splashjs.text.iface.IInputText;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.render.text.iface.*;
import splashjs.utils.iface.*;
import splashjs.utils.*;

public class InputText extends Text implements IInputText {
	
	private String placeholder = "";
	private IColor backgroundColor = Color.NONE;
	private IColor borderColor = Color.BLACK;
	
	public InputText() {
		super("inputText");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(InputText.class, this));
	}
	
	public InputText(String text) {
		super("inputText");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(InputText.class, this));
		super.setText(text);
	}
	
	
	public boolean dispatchEvent(IEvent event) {
		boolean val = super.dispatchEvent(event);
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.width = ((ITextRenderer)super.getRenderer()).getOriginalWidth();
			super.height = ((ITextRenderer)super.getRenderer()).getOriginalHeight();
		}
		
		return val;
	}
	
	public void setPlaceholder(String placeholder) {
		this.placeholder = placeholder;
		((IInputTextRenderer)super.getRenderer()).setPlaceholder();
	}
	
	public String getPlaceholder() {
		return this.placeholder;
	}

	public void setBackgroundColor(IColor backgroundColor) {
		this.backgroundColor = backgroundColor;
		((IInputTextRenderer)super.getRenderer()).setBackgroundColor();
	}

	public IColor getBackgroundColor() {
		return this.backgroundColor;
	}

	public void setBorderColor(IColor borderColor) {
		this.borderColor = borderColor;
		((IInputTextRenderer)super.getRenderer()).setBorderColor();
	}

	public IColor getBorderColor() {
		return this.borderColor;
	}
	
	@Override
	public int getWidth() {
		return ((ITextRenderer)super.getRenderer()).getWidth();
	}
	
	@Override
	public int getHeight() {
		return ((ITextRenderer)super.getRenderer()).getHeight();
	}
	
	@Override
	public void setWidth(int width) {
		throw new UnsupportedOperationException();
	}
	
	@Override
	public void setHeight(int height) {
		throw new UnsupportedOperationException();
	}
	
	@Override
	public void setSize(int width, int height) {
		throw new UnsupportedOperationException();
	}
	


	

}