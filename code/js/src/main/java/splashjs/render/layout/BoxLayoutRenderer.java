package splashjs.render.layout;

import def.dom.HTMLElement;

import java.util.ArrayList;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.layout.iface.IBoxLayoutRenderer;
import splashjs.layout.HAlign;
import splashjs.layout.iface.IContainer;

public abstract class BoxLayoutRenderer extends LayoutRenderer implements IBoxLayoutRenderer {

	protected ArrayList<IContainer> containers = new ArrayList<IContainer>();

	public void add(IContainer container) {
			
			super.getDOMElement().appendChild(container.getRenderer().getDOMElement());
			//((HTMLElement)box.getRenderer().getDOMElement()).style.width = "100%";
			//((HTMLElement)box.getRenderer().getDOMElement()).style.maxWidth = "100%";
			//((HTMLElement)box.getRenderer().getDOMElement()).style.position = "relative";
			//((HTMLElement)box.getRenderer().getDOMElement()).style.display = "inline-block";
			((HTMLElement)container.getTheOnlyMember().getRenderer().getDOMElement()).style.position = "relative";
			containers.add(container);
			//((HTMLElement)box.getRenderer().getDOMElement()).style.display = "inline-block";
			//((HTMLElement)box.getRenderer().getDOMElement()).style.height = "100%";
			
			//for(int i=0;i<boxes.size();i++) {
			//	((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.width = ((int)100/boxes.size()) + "%";
			//}
			//applyCSS();
		
	}
	
	public void setHAlign(String hAlign) {
		if(hAlign.equalsIgnoreCase(HAlign.CENTER)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "center";
		}else if(hAlign.equalsIgnoreCase(HAlign.LEFT)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "flex-start";
		}else if(hAlign.equalsIgnoreCase(HAlign.RIGHT)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "flex-end";
		}
	}

	public void applyCSS() {
		super.applyCSS();

		HTMLElement htmlElement = (HTMLElement)super.getDOMElement();
		htmlElement.style.border = "0px solid red";
		htmlElement.style.display = "flex";		
		htmlElement.style.width = "100%";
		//htmlElement.style.height = "100%";

	}
	
}