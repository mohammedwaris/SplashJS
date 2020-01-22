package splashjs.display;

import splashjs.Global;
import splashjs.events.Event;

import splashjs.utils.iface.IColor;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.ILine;
import splashjs.render.display.iface.ILineRenderer;

public class Line extends Shape implements ILine {


	private int length = 0;
	
	public Line() {
		super("line");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Line.class, this));
	}
	
	public Line(int length) {
		this();
		this.length = length;
	}
	
	
	public void setLength(int length) {
		this.length = length;
	}
	public int getLength() {
		return this.length;
	}	
	
	public boolean dispatchEvent(IEvent event) {
		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			this.originalWidth = ((ILineRenderer)super.getRenderer()).getOriginalWidth();
			this.originalHeight = ((ILineRenderer)super.getRenderer()).getOriginalHeight();
			this.width = this.originalWidth;
			this.height = this.originalHeight;
		}
		
		boolean val = super.dispatchEvent(event);
		return val;
	}
	
	@Override
	public void setFillColor(IColor fillColor) {
		//does nothing
	}
	
	@Override
	public IColor getFillColor() {
		return null;
	}
	
	@Override
	public void setWidth(int width) {
	}
	
	public void setHeight(int height) {
	}
	
}