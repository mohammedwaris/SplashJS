package splashjs.render.display;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.DisplayObjectContainerRenderer;
import splashjs.render.RenderElement;

public class SceneRenderer extends DisplayObjectContainerRenderer {

	HTMLDivElement htmlDivElement;
	
	public SceneRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlDivElement = (HTMLDivElement) document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
	}
	
	
	public void applyCSS() {
		htmlDivElement.style.display = "inline-block";
	}

}