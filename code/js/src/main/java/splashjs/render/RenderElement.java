package splashjs.render;

import def.dom.Element;

import splashjs.render.iface.IRenderElement;

public class RenderElement implements IRenderElement {

	private Element element;
	
	public RenderElement(Element element) {
		this.element = element;
	}
	
	public Element getDOMElement() {
		return this.element;
	}
	
}