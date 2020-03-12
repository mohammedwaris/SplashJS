package splashjs.render.layout;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.RenderElement;
import splashjs.layout.iface.IContainer;
import splashjs.render.layout.iface.IContainerRenderer;

public class ContainerRenderer extends DisplayObjectRenderer implements IContainerRenderer {

	private IContainer container;
	private HTMLDivElement htmlDivElement;
	
	public ContainerRenderer(IEventDispatcher renderObject) {
		container = (IContainer)renderObject;
		super.setRenderObject(renderObject);
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		create();
		
	}
	
	public void create() {
		IDisplayObject theOnlyMember = container.getTheOnlyMember();
		if(theOnlyMember != null && (theOnlyMember instanceof IDisplayObject)) {
			htmlDivElement.appendChild(theOnlyMember.getRenderer().getDOMElement());
		}
	}
	
	public void applyStyle() {
		super.applyStyle();
		htmlDivElement.style.border = "0px dotted green";
		htmlDivElement.style.display = "flex";
		//htmlDivElement.style.flexGrow = "1";
		//htmlDivElement.style.justifyContent = "center";
		//htmlDivElement.style.alignItems = "center";
		htmlDivElement.style.position = "static";

		htmlDivElement.style.overflow = "auto";
		//htmlDivElement.style.width = "100%";
		//htmlDivElement.style.height = "100%";
		
			
	}
	
	public int getWidth() {
		return (int)htmlDivElement.clientWidth;
	}
	
	public int getHeight() {
		return (int)htmlDivElement.clientHeight;
	}
	
}