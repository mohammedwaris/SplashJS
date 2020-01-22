package flashjs.render.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.render.*;

public class DesktopRenderElement implements IRenderElement {

	private Element element;
	
	public DesktopRenderElement(Element element) {
		this.element = element;
	}
	
	public Element getDesktopDOMElement() {
		return this.element;
	}
	
}