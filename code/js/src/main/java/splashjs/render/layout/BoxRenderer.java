package splashjs.render.layout;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.RenderElement;
import splashjs.layout.iface.IBox;
import splashjs.render.layout.iface.IBoxRenderer;

public class BoxRenderer extends DisplayObjectRenderer implements IBoxRenderer {

	private IBox box;
	private HTMLDivElement htmlDivElement;
	
	public BoxRenderer(IEventDispatcher renderObject) {
		box = (IBox)renderObject;
		super.setRenderObject(renderObject);
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		create();
		
	}
	
	public void create() {
		IDisplayObject theOnlyMember = box.getTheOnlyMember();
		if(theOnlyMember != null && (theOnlyMember instanceof IDisplayObject)) {
			htmlDivElement.appendChild(theOnlyMember.getRenderer().getDOMElement());
		}
	}
	
	public void applyCSS() {
		super.applyCSS();
		htmlDivElement.style.border = "0px dotted green";
		htmlDivElement.style.position = "relative";
		htmlDivElement.style.overflow = "auto";
		//htmlDivElement.style.width = getWidth() + UNIT;
		//htmlDivElement.style.height = getHeight() + UNIT;
		
			
	}
	
	public int getWidth() {
		return (int)htmlDivElement.clientWidth;
	}
	
	public int getHeight() {
		return (int)htmlDivElement.clientHeight;
	}
	
}