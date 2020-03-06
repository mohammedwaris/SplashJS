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
import splashjs.render.RenderElement;
import splashjs.layout.iface.IVerticalLayout;
import splashjs.render.layout.iface.IVerticalLayoutRenderer;
import splashjs.layout.iface.IBox;
import splashjs.display.iface.IStage;
import splashjs.layout.iface.ILayout;

public class VerticalLayoutRenderer extends LayoutRenderer implements IVerticalLayoutRenderer {

	private IVerticalLayout verticalLayout;
	//private HTMLTableElement htmlTableElement;
	private HTMLDivElement htmlDivElement;
	
	private ArrayList<IBox> boxes = new ArrayList<IBox>();
	//private ArrayList<HTMLTableDataCellElement> htmlTableDataCellElements = new ArrayList<HTMLTableDataCellElement>();
	//private ArrayList<HTMLTableRowElement> htmlTableRowElements = new ArrayList<HTMLTableRowElement>();
	
	public VerticalLayoutRenderer(IEventDispatcher renderObject) {
		verticalLayout = (IVerticalLayout)renderObject;
		super.setRenderObject(renderObject);
		//htmlTableElement = (HTMLTableElement)document.createElement("table");
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		
	}
	
	public void add(IBox box) {
		

			htmlDivElement.appendChild(box.getRenderer().getDOMElement());
			
			boxes.add(box);
			((HTMLElement)box.getRenderer().getDOMElement()).style.display = "block";
			((HTMLElement)box.getRenderer().getDOMElement()).style.width = "100%";
			
			for(int i=0;i<boxes.size();i++) {
				((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.height = ((int)100/boxes.size()) + "%";
			}
			applyCSS();
		
	}
	
	public void refreshLayout() {
		
		
		//htmlTableElement.style.width = verticalLayout.getParent().getWidth() + UNIT;
		//htmlTableElement.style.height = verticalLayout.getParent().getHeight() + UNIT;
		//System.out.println("VL: " + verticalLayout.getStage() + " " + verticalLayout.getParent());
		for(int i=0;i<boxes.size();i++) {
			if(boxes.get(i).getTheOnlyMember() instanceof ILayout) {
				((ILayout)boxes.get(i).getTheOnlyMember()).refreshLayout();
			}
			//((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.width = boxes.get(i).getTheOnlyMember().getWidth() + UNIT;
			//((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.height = boxes.get(i).getTheOnlyMember().getHeight() + UNIT;
		}
	}
	
	public void applyCSS() {
		super.applyCSS();
		htmlDivElement.style.border = "0px solid red";
		htmlDivElement.style.position = "static";
		htmlDivElement.style.width = "100%";
		htmlDivElement.style.height = "100%";


			//htmlDivElement.style.width = verticalLayout.getWidth() + UNIT;
			//htmlDivElement.style.height = verticalLayout.getHeight() + UNIT;

	}
	
}