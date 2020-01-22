package splashjs.controls;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.controls.iface.ILabel;
import splashjs.render.controls.iface.ILabelRenderer;




public class Label extends BaseText implements ILabel {


	
	public Label(String text) {
		super("label");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Label.class, this));
		super.setText(text);
	}
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			super.originalWidth = ((ILabelRenderer)super.getRenderer()).getOriginalWidth();
			super.originalHeight = ((ILabelRenderer)super.getRenderer()).getOriginalHeight();
			if(super.width == 0 && super.originalWidth != 0)
				super.setWidth(super.originalWidth);
			if(super.height == 0 && super.originalHeight != 0)
				super.setHeight(super.originalHeight);
		}
		
		return super.dispatchEvent(event);
	}
	
	

}