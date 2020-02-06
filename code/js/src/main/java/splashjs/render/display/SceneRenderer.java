package splashjs.render.display;

import def.dom.*;
import static def.dom.Globals.*;

import splashjs.events.iface.*;
import splashjs.render.*;

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