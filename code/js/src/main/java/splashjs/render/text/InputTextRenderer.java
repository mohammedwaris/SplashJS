package splashjs.render.text;

import def.dom.HTMLElement;


public class InputTextRenderer extends TextRenderer {
	
	public int getClientWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getClientHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}
}