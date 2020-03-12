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
import splashjs.layout.iface.IVBoxLayout;
import splashjs.render.layout.iface.IVBoxLayoutRenderer;
import splashjs.layout.iface.IContainer;
import splashjs.display.iface.IStage;
import splashjs.layout.iface.ILayout;
import splashjs.layout.HAlign;
import splashjs.layout.VAlign;

public class VBoxLayoutRenderer extends BoxLayoutRenderer implements IVBoxLayoutRenderer {

	private IVBoxLayout vBoxLayout;
	//private HTMLTableElement htmlTableElement;
	private HTMLDivElement htmlDivElement;
	
	//private ArrayList<IContainer> containers = new ArrayList<IContainer>();
	//private ArrayList<HTMLTableDataCellElement> htmlTableDataCellElements = new ArrayList<HTMLTableDataCellElement>();
	//private ArrayList<HTMLTableRowElement> htmlTableRowElements = new ArrayList<HTMLTableRowElement>();
	
	public VBoxLayoutRenderer(IEventDispatcher renderObject) {
		vBoxLayout = (IVBoxLayout)renderObject;
		super.setRenderObject(renderObject);
		//htmlTableElement = (HTMLTableElement)document.createElement("table");
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		
	}
	
	public void add(IContainer container) {
		
			super.add(container);
			refreshVGap();
		
	}
	
	public void setVAlign(String vAlign) {
		if(vAlign.equalsIgnoreCase(VAlign.MIDDLE)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "center";
		}else if(vAlign.equalsIgnoreCase(VAlign.TOP)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "flex-start";
		}else if(vAlign.equalsIgnoreCase(VAlign.BOTTOM)) {
			((HTMLElement)super.getDOMElement()).style.justifyContent = "flex-end";
		}
	}
	
	public void setHAlign(String hAlign) {
		if(hAlign.equalsIgnoreCase(HAlign.CENTER)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "center";
		}else if(hAlign.equalsIgnoreCase(HAlign.LEFT)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "start";
		}else if(hAlign.equalsIgnoreCase(HAlign.RIGHT)) {
			((HTMLElement)super.getDOMElement()).style.alignItems = "end";
		}
	}
	
	public void refreshLayout() {
		
		
		//htmlTableElement.style.width = verticalLayout.getParent().getWidth() + UNIT;
		//htmlTableElement.style.height = verticalLayout.getParent().getHeight() + UNIT;
		//System.out.println("VL: " + verticalLayout.getStage() + " " + verticalLayout.getParent());
		//for(int i=0;i<boxes.size();i++) {
		//	if(boxes.get(i).getTheOnlyMember() instanceof ILayout) {
		//		((ILayout)boxes.get(i).getTheOnlyMember()).refreshLayout();
		//	}
			//((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.width = boxes.get(i).getTheOnlyMember().getWidth() + UNIT;
			//((HTMLElement)boxes.get(i).getRenderer().getDOMElement()).style.height = boxes.get(i).getTheOnlyMember().getHeight() + UNIT;
		//}
	}
	
	public void applyStyle() {
		super.applyStyle();

		htmlDivElement.style.flexDirection = "column";
		
	}
	
}