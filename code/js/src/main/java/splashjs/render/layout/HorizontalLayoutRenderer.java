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
import splashjs.layout.iface.IHorizontalLayout;
import splashjs.layout.iface.IBox;
import splashjs.render.RenderElement;
import splashjs.layout.iface.ILayout;

public class HorizontalLayoutRenderer extends LayoutRenderer {

	private IHorizontalLayout horizontalLayout;
	//private HTMLTableElement htmlTableElement;
	//private HTMLTableRowElement htmlTableRowElement;
	
	private HTMLDivElement htmlDivElement;
	
	private ArrayList<IBox> boxes = new ArrayList<IBox>();
	//private ArrayList<HTMLTableDataCellElement> htmlTableDataCellElements = new ArrayList<HTMLTableDataCellElement>();
	
	public HorizontalLayoutRenderer(IEventDispatcher renderObject) {
		horizontalLayout = (IHorizontalLayout)renderObject;
		super.setRenderObject(renderObject);
		//htmlTableElement = (HTMLTableElement)document.createElement("table");
		//htmlTableRowElement = (HTMLTableRowElement)document.createElement("tr");
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		//htmlTableElement.appendChild(htmlTableRowElement);
	}
	
	public void add(IBox box) {
			
			htmlDivElement.appendChild(box.getRenderer().getDOMElement());
			
			boxes.add(box);
			((HTMLElement)box.getRenderer().getDOMElement()).style.display = "inline-block";
			((HTMLElement)box.getRenderer().getDOMElement()).style.height = "100%";
			
			for(int i=0;i<boxes.size();i++) {
				((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.width = ((int)100/boxes.size()) + "%";
			}
			applyCSS();
		
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
	
	public void applyCSS() {
		super.applyCSS();
		htmlDivElement.style.border = "0px solid red";
		htmlDivElement.style.position = "static";
		htmlDivElement.style.width = "100%";
		htmlDivElement.style.height = "100%";
		//htmlTableElement.style.position = "static";
		//htmlTableElement.style.width = "100%";
		//htmlTableElement.style.height = "100%";
		//htmlTableRowElement.style.border = "1px dashed green";
		//htmlTableRowElement.style.display = "block";
		//htmlTableRowElement.style.position = "static";
		//htmlTableRowElement.style.width = "100%";
		//htmlTableRowElement.style.height = "100%";
		

	}
	
}