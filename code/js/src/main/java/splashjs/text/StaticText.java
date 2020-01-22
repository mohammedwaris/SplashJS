package splashjs.text;

import splashjs.Global;
import splashjs.events.iface.IEvent;
import splashjs.events.Event;
import splashjs.text.iface.IStaticText;
import splashjs.render.text.iface.IStaticTextRenderer;


public class StaticText extends Text implements IStaticText {
	
	public StaticText(String text) {
		super("staticText");
		
		super.setRenderer(Global.global.getRendererCreator().createRenderer(StaticText.class, this));
		
		super.setText(text);


	}
	
	
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.width = ((IStaticTextRenderer)super.getRenderer()).getOriginalWidth();
			super.height = ((IStaticTextRenderer)super.getRenderer()).getOriginalHeight();
		}
		
		boolean val = super.dispatchEvent(event);
		return val;
	}
	
	public int getWidth() {
		return ((IStaticTextRenderer)super.getRenderer()).getOriginalWidth();
	}
	
	public int getHeight() {
		return ((IStaticTextRenderer)super.getRenderer()).getOriginalHeight();
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