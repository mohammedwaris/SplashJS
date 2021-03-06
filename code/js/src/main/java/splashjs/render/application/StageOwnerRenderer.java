package splashjs.render.application;

import def.dom.HTMLElement;
import def.dom.HTMLDivElement;
import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.js.Globals.undefined;


import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.application.iface.IStageOwner;
import splashjs.render.application.iface.IStageOwnerRenderer;
import splashjs.render.RenderElement;

public class StageOwnerRenderer extends EventDispatcherRenderer implements IStageOwnerRenderer {
	
	private IStageOwner stageOwner = null;
	
	public StageOwnerRenderer(IEventDispatcher renderObject) {
		stageOwner = (IStageOwner)renderObject;
		super.setRenderObject(renderObject);
		create();
	}
	
	public void create() {
		
		HTMLElement htmlElement = document.getElementById(super.getRenderObject().getID());
		if(htmlElement == null) {
			htmlElement = (HTMLDivElement) document.createElement("div");
			htmlElement.id = super.getRenderObject().getID();
			htmlElement.style.position = "absolute";
			htmlElement.style.top = "0" + UNIT; 
			htmlElement.style.left = "0" + UNIT; 
			htmlElement.style.bottom = "0" + UNIT;
			htmlElement.style.right = "0" + UNIT;
			super.setRenderElement(new RenderElement(htmlElement));
			appendToBody();
		}else{
			super.setRenderElement(new RenderElement(htmlElement));
			if(htmlElement.style.width == undefined)
				htmlElement.style.width = stageOwner.getWidth() + UNIT;
			if(htmlElement.style.height == undefined)
				htmlElement.style.height = stageOwner.getHeight() + UNIT;
		}
		
		stageOwner.setWidth((int) ((HTMLDivElement) htmlElement).clientWidth);
		stageOwner.setHeight((int) ((HTMLDivElement) htmlElement).clientHeight);
		
		
		window.addEventListener("resize", (event) -> {
			
			IEvent resizeEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE);
			resizeEvent.setTarget(super.getRenderObject());
			resizeEvent.setCurrentTarget(super.getRenderObject());
			int newWidth = (int) ((HTMLDivElement) super.getDOMElement() ).clientWidth;
			int newHeight = (int) ((HTMLDivElement) super.getDOMElement() ).clientHeight;
			stageOwner.setWidth(newWidth);
			stageOwner.setHeight(newHeight);
			stageOwner.dispatchEvent(resizeEvent);
			
		});
	}
}