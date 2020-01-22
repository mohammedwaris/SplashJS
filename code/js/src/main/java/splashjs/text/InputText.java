package splashjs.text;

import splashjs.Global;
import splashjs.text.iface.IInputText;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.render.text.iface.ITextRenderer;

public class InputText extends Text implements IInputText {
	
	public InputText(String text) {
		super("inputText");
		
		super.setText(text);
		super.setRenderer(Global.global.getRendererCreator().createRenderer(InputText.class, this));

	}
	
	
	public boolean dispatchEvent(IEvent event) {
		boolean val = super.dispatchEvent(event);
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.width = ((ITextRenderer)super.getRenderer()).getOriginalWidth();
			super.height = ((ITextRenderer)super.getRenderer()).getOriginalHeight();
		}
		
		return val;
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