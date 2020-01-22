package splashjs.text;

import splashjs.Global;
import splashjs.text.iface.IDynamicText;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;


import splashjs.render.text.iface.ITextRenderer;


public class DynamicText extends Text implements IDynamicText {
	
	public DynamicText(String text) {
		super("dynamicText");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(DynamicText.class, this));
		super.setText(text);


	}
	
	
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.width = ((ITextRenderer)super.getRenderer()).getOriginalWidth();
			super.height = ((ITextRenderer)super.getRenderer()).getOriginalHeight();
		}
		
		boolean val = super.dispatchEvent(event);
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