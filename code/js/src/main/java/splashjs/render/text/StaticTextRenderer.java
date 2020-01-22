package splashjs.render.text;

import def.dom.HTMLParagraphElement;
import def.dom.HTMLElement;
import static def.dom.Globals.document;

import splashjs.render.RenderElement;
import splashjs.text.iface.IStaticText;
import splashjs.render.text.iface.IStaticTextRenderer;
import splashjs.events.iface.IEventDispatcher;

public class StaticTextRenderer extends TextRenderer implements IStaticTextRenderer {

	HTMLParagraphElement htmlParagraphElement;
	
	public StaticTextRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlParagraphElement = (HTMLParagraphElement)document.createElement("p");
		super.renderElement = new RenderElement(htmlParagraphElement);
	}
	
	
	
	public void create() {
		htmlParagraphElement.innerText = ((IStaticText) super.getRenderObject()).getText();
	}
	
	public int getOriginalWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getOriginalHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}
	
	
	public void setText() {
		htmlParagraphElement.innerText = ((IStaticText) super.getRenderObject()).getText();
	}
	
	private HTMLParagraphElement getHTMLParagraphElement() {
		HTMLParagraphElement htmlParagraphElement = (HTMLParagraphElement) getDOMElement();
		return htmlParagraphElement;
	}

}