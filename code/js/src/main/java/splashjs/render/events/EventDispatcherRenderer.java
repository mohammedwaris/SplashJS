package splashjs.render.events;

import def.dom.HTMLElement;

import splashjs.render.events.iface.IEventDispatcherRenderer;
import splashjs.render.lang.SplashObjectRenderer;

public class EventDispatcherRenderer extends SplashObjectRenderer implements IEventDispatcherRenderer {
	
	private HTMLElement htmlElement;
	
	
	public void setDisplay(String value) {
		htmlElement = (HTMLElement) getDOMElement();
		htmlElement.style.display = value;
	}
	
	public void applyStyle() {
		
		super.applyStyle();
		
	}
}