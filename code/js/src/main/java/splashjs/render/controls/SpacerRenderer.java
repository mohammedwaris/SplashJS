package splashjs.render.controls;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import splashjs.render.RenderElement;
import splashjs.render.controls.iface.ISpacerRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.controls.iface.ISpacer;


public class SpacerRenderer extends ControlRenderer implements ISpacerRenderer {

	private HTMLDivElement htmlDivElement;
	private ISpacer spacer;

	public SpacerRenderer(IEventDispatcher renderObject) {
		spacer = (ISpacer)renderObject;
		htmlDivElement = (HTMLDivElement)document.createElement("div");

		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement(htmlDivElement));
	}
}