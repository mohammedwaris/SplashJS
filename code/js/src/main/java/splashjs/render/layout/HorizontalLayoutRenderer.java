package splashjs.render.layout;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import java.util.ArrayList;
import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.layout.iface.IHorizontalLayout;
import splashjs.layout.iface.IBox;
import splashjs.render.RenderElement;

public class HorizontalLayoutRenderer extends LayoutRenderer {

	private IHorizontalLayout horizontalLayout;
	private HTMLDivElement htmlDivElement;
	
	public HorizontalLayoutRenderer(IEventDispatcher renderObject) {
		horizontalLayout = (IHorizontalLayout)renderObject;
		super.setRenderObject(renderObject);
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
	}
	
	public void add(IBox box) {
		

			htmlDivElement.appendChild(box.getRenderer().getDOMElement());
			box.setX(horizontalLayout.getWidth());
			horizontalLayout.getAll().add(box);
				
			applyCSS();
		
	}
	
	public void applyCSS() {
		super.applyCSS();
		htmlDivElement.style.border = "1px dashed green";


			htmlDivElement.style.width = horizontalLayout.getWidth() + UNIT;
			htmlDivElement.style.height = horizontalLayout.getHeight() + UNIT;

	}
	
}