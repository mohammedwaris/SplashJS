package splashjs.render.controls;

import def.dom.HTMLDivElement;
import static def.dom.Globals.document;
import static def.js.Globals.undefined;

import splashjs.controls.iface.IScroller;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.RenderElement;
import splashjs.render.controls.iface.IScrollerRenderer;
import splashjs.events.iface.IEventDispatcher;

public class ScrollerRenderer extends ControlRenderer implements IScrollerRenderer {

	private IScroller scroller;
	private HTMLDivElement htmlDivElement;
	private IDisplayObject content;
	
	public ScrollerRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		scroller = (IScroller)renderObject;
		htmlDivElement = (HTMLDivElement)document.createElement("div");
		super.setRenderElement(new RenderElement(htmlDivElement));
		
	}
	
	public void setContent(IDisplayObject content) {
		if(this.content != null)
			htmlDivElement.removeChild(this.content.getRenderer().getDOMElement());
		this.content = content;
		htmlDivElement.appendChild(this.content.getRenderer().getDOMElement());
	}
	
	public IDisplayObject getContent() {
		return this.content;
	}
	
	public void setWidth(int width) {
		htmlDivElement.style.width = width + UNIT;
		htmlDivElement.style.minWidth = width + UNIT;
		htmlDivElement.style.maxWidth = width + UNIT;
	}
	
	public int getWidth() {
		return super.getWidth();
	}
	
	public void setHeight(int height) {
		htmlDivElement.style.height = height + UNIT;
		htmlDivElement.style.minHeight = height + UNIT;
		htmlDivElement.style.maxHeight = height + UNIT;
	}
	
	public int getHeight() {
		return super.getHeight();
	}
	
	public void applyStyle() {
		
		super.applyStyle();
		htmlDivElement.style.overflow = "auto";
		
	}
	
	
	

}