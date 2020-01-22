package splashjs.controls;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.controls.iface.ITextArea;
import splashjs.events.iface.IEvent;
import splashjs.render.controls.iface.ITextAreaRenderer;


public class TextArea extends BaseInput implements ITextArea {

	
	
	public TextArea() {
		super("textArea");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(TextArea.class, this));
	}
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.originalWidth = ((ITextAreaRenderer)super.getRenderer()).getOriginalWidth();
			super.originalHeight = ((ITextAreaRenderer)super.getRenderer()).getOriginalHeight();
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
		super.setRenderer(stage.createRenderer(TextArea.class, this));
		((ITextAreaRenderer)super.getRenderer()).create();
		this.render();
	}*/
	
	@Override
	public void render() {
		super.render();
		((ITextAreaRenderer)super.getRenderer()).setResize("none");
	}
	
	

}