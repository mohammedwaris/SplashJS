package splashjs.controls;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.controls.iface.IScroller;
import splashjs.render.controls.iface.IScrollerRenderer;

public class Scroller extends Control implements IScroller {

	private IScrollerRenderer scrollerRenderer;
	
	public Scroller() {
		super("scroller");
		scrollerRenderer = (IScrollerRenderer) Global.global.getRendererCreator().createRenderer(Scroller.class, this);
		super.setRenderer(scrollerRenderer);
		
	}
	
	public void setContent(IDisplayObject content) {
		scrollerRenderer.setContent(content);
	}
	
	public IDisplayObject getContent() {
		return scrollerRenderer.getContent();
	}
	
	public void setWidth(int width) {
		scrollerRenderer.setWidth(width);
	}
	
	public int getWidth() {
		return scrollerRenderer.getWidth();
	}
	
	public void setHeight(int height) {
		scrollerRenderer.setHeight(height);
	}
	
	public int getHeight() {
		return scrollerRenderer.getHeight();
	}
}