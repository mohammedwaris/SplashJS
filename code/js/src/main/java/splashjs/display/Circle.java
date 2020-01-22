package splashjs.display;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.ICircle;
import splashjs.render.display.iface.ICircleRenderer;

public class Circle extends Shape implements ICircle {

	private int radius = 0;
	
	public Circle() {
		super("circle");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Circle.class, this));
	}
	
	public Circle(int radius) {
		this();
		this.radius = radius;
	}
	
	public boolean dispatchEvent(IEvent event) {
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			this.originalWidth = ((ICircleRenderer)super.getRenderer()).getOriginalWidth();
			this.originalHeight = ((ICircleRenderer)super.getRenderer()).getOriginalHeight();
			this.width = this.originalWidth;
			this.height = this.originalHeight;
		}
		
		return super.dispatchEvent(event);
	}
	
	public void setRadius(int radius) {
		this.radius = radius;
		((ICircleRenderer)super.getRenderer()).setRadius();
		this.originalWidth = ((ICircleRenderer)super.getRenderer()).getOriginalWidth();
		this.originalHeight = ((ICircleRenderer)super.getRenderer()).getOriginalHeight();

	}
	
	public int getRadius() {
		return this.radius;
	}
	
	
	
	
	
	
}