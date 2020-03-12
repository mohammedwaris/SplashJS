package splashjs.render.layout;

import def.dom.HTMLElement;

import java.util.ArrayList;

import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.layout.iface.IBoxLayoutRenderer;
import splashjs.layout.HAlign;
import splashjs.layout.VAlign;
import splashjs.layout.iface.IContainer;

public abstract class BoxLayoutRenderer extends LayoutRenderer implements IBoxLayoutRenderer {

	protected ArrayList<IContainer> containers = new ArrayList<IContainer>();
	private int hGap = 0;
	private int vGap = 0;
	
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
			//refreshHGap();
			//refreshVGap();
		
	}
	
	public void setHAlign(String hAlign) {
		
	}
	
	public void setVAlign(String vAlign) {
		
	}
	
	public void setHGap(int hGap) {
		
		this.hGap = hGap;
		refreshHGap();
		
	}
	
	public void setVGap(int vGap) {
		
		this.vGap = vGap;
		refreshVGap();
		
	}
	
	protected void refreshHGap() {
		if(containers.size() <= 1 || this.hGap == 0)
			return;
		
		for(int i=0;i<containers.size();i++) {
			IContainer container = containers.get(i);
			if(i == 0){
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginRight = (int)this.hGap/2 + UNIT;
			}else if(i == containers.size()-1) {
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginLeft = (int)this.hGap/2 + UNIT;
			}else{
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginRight = (int)this.hGap/2 + UNIT;
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginLeft = (int)this.hGap/2 + UNIT;
			}
		}
	}
	
	protected void refreshVGap() {
		if(containers.size() <= 1 || this.vGap == 0)
			return;
		
		for(int i=0;i<containers.size();i++) {
			IContainer container = containers.get(i);
			if(i == 0){
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginBottom = (int)this.vGap/2 + UNIT;
			}else if(i == containers.size()-1) {
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginTop = (int)this.vGap/2 + UNIT;
			}else{
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginBottom = (int)this.vGap/2 + UNIT;
				((HTMLElement)container.getRenderer().getDOMElement()).style.marginTop = (int)this.vGap/2 + UNIT;
			}
		}
	}

	public void applyStyle() {
		super.applyStyle();

		HTMLElement htmlElement = (HTMLElement)super.getDOMElement();
		//htmlElement.style.border = "0px solid red";
		htmlElement.style.display = "flex";		
		//htmlElement.style.width = "100%";
		//htmlElement.style.height = "100%";

	}
	
}