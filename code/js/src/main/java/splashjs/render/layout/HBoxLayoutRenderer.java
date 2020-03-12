package splashjs.render.layout;

import def.dom.HTMLElement;
import def.dom.HTMLDivElement;
//import def.dom.HTMLTableElement;
//import def.dom.HTMLTableRowElement;
//import def.dom.HTMLTableDataCellElement;
import static def.dom.Globals.document;

import java.util.ArrayList;
import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.layout.iface.IHBoxLayout;
import splashjs.layout.iface.IContainer;
import splashjs.render.RenderElement;
import splashjs.layout.iface.ILayout;
import splashjs.render.layout.iface.IHBoxLayoutRenderer;
import splashjs.layout.HAlign;
import splashjs.layout.VAlign;

public class HBoxLayoutRenderer extends BoxLayoutRenderer implements IHBoxLayoutRenderer {

	private IHBoxLayout hBoxLayout;
	//private HTMLTableElement htmlTableElement;
	//private HTMLTableRowElement htmlTableRowElement;
	
	private HTMLDivElement htmlDivElement;
	
	
	//private ArrayList<HTMLTableDataCellElement> htmlTableDataCellElements = new ArrayList<HTMLTableDataCellElement>();
	
	public HBoxLayoutRenderer(IEventDispatcher renderObject) {
		hBoxLayout = (IHBoxLayout)renderObject;
		super.setRenderObject(renderObject);
		//htmlTableElement = (HTMLTableElement)document.createElement("table");
		//htmlTableRowElement = (HTMLTableRowElement)document.createElement("tr");
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		//htmlTableElement.appendChild(htmlTableRowElement);
	}
	
	public void add(IContainer container) {

		super.add(container);
		refreshHGap();
			//htmlDivElement.appendChild(container.getRenderer().getDOMElement());
			
			//((HTMLElement)container.getTheOnlyMember().getRenderer().getDOMElement()).style.position = "relative";
			//containers.add(container);
			
			
		
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
	
	public void setVAlign(String vAlign) {
		if(vAlign.equalsIgnoreCase(VAlign.MIDDLE)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "center";
		}else if(vAlign.equalsIgnoreCase(VAlign.TOP)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "start";
		}else if(vAlign.equalsIgnoreCase(VAlign.BOTTOM)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "end";
		}
	}
	
	public void refreshLayout() {
		/*
		htmlTableElement.style.width = horizontalLayout.getParent().getWidth() + UNIT;
		htmlTableElement.style.height = horizontalLayout.getParent().getHeight() + UNIT;
		for(int i=0;i<boxes.size();i++) {
			if(boxes.get(i).getTheOnlyMember() instanceof ILayout) {
				((ILayout)boxes.get(i).getTheOnlyMember()).refreshLayout();
			}
			((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.width = boxes.get(i).getTheOnlyMember().getWidth() + UNIT;
			((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.height = boxes.get(i).getTheOnlyMember().getHeight() + UNIT;
		}*/
	}
	
	public void applyStyle() {
		super.applyStyle();
		
		htmlDivElement.style.flexDirection = "row";
		

	}
	
}