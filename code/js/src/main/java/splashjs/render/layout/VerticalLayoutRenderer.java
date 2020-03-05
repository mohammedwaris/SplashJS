package splashjs.render.layout;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import java.util.ArrayList;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.RenderElement;
import splashjs.layout.iface.IVerticalLayout;
import splashjs.render.layout.iface.IVerticalLayoutRenderer;
import splashjs.layout.iface.IBox;
import splashjs.display.iface.IStage;

public class VerticalLayoutRenderer extends LayoutRenderer implements IVerticalLayoutRenderer {

	private IVerticalLayout verticalLayout;
	private HTMLDivElement htmlDivElement;
	
	public VerticalLayoutRenderer(IEventDispatcher renderObject) {
		verticalLayout = (IVerticalLayout)renderObject;
		super.setRenderObject(renderObject);
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		
	}
	
	public void add(IBox box) {
		

			
			htmlDivElement.appendChild(box.getRenderer().getDOMElement());
			box.setY(verticalLayout.getHeight());
			verticalLayout.getAll().add(box);
			applyCSS();
		
	}
	
	public void applyCSS() {
		super.applyCSS();
		htmlDivElement.style.border = "1px dashed green";


			htmlDivElement.style.width = verticalLayout.getWidth() + UNIT;
			htmlDivElement.style.height = verticalLayout.getHeight() + UNIT;

	}
	
}