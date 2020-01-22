package splashjs.controls;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.controls.iface.ITextInput;
import splashjs.events.iface.IEvent;
import splashjs.render.controls.iface.ITextInputRenderer;




public class TextInput extends BaseInput implements ITextInput {

	private boolean displayAsPassword = false;
	
	public TextInput() {
		super("textInput");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(TextInput.class, this));
	}
	
	public void setDisplayAsPassword(boolean displayAsPassword) {
		this.displayAsPassword = displayAsPassword;
	}
	
	public boolean getDisplayAsPassword() {
		return this.displayAsPassword;
	}
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.originalWidth = ((ITextInputRenderer)super.getRenderer()).getOriginalWidth();
			super.originalHeight = ((ITextInputRenderer)super.getRenderer()).getOriginalHeight();
			if(super.width == 0 && super.originalWidth != 0)
				super.setWidth(super.originalWidth);
			if(super.height == 0 && super.originalHeight != 0)
				super.setHeight(super.originalHeight);
		}
		
		return super.dispatchEvent(event);
	}
	
	/*
	public void setRendererFromStage(IStage stage) {
		super.stage = stage;
		super.setRenderer(stage.createRenderer(TextInput.class, this));
		((ITextInputRenderer)super.getRenderer()).create();
		this.render();
	}*/
	
	
	
	@Override
	public void setText(String text) {
		
		super.text = text;
		if(super.getRenderer() != null)
			((ITextInputRenderer)super.getRenderer()).setText();
	}
	
	@Override
	public void render() {
		super.render();
		((ITextInputRenderer)super.getRenderer()).setDisplayAsPassword();
		((ITextInputRenderer)super.getRenderer()).setText();
	}

}