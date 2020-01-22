package splashjs.render.controls;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLParagraphElement;
import static def.dom.Globals.document;

import splashjs.render.RenderElement;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.ILabelRenderer;

public class LabelRenderer extends BaseTextRenderer implements ILabelRenderer {

	private HTMLParagraphElement htmlParagraphElement;
	
	public LabelRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlParagraphElement = (HTMLParagraphElement)document.createElement("p");
		super.setRenderElement (new RenderElement(htmlParagraphElement));
		create();
	}
	
	public void create() {
		super.setText();
	}
	
	

}