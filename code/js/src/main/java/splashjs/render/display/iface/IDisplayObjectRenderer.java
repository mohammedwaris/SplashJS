package splashjs.render.display.iface;

import splashjs.render.events.iface.IEventDispatcherRenderer;

public interface IDisplayObjectRenderer extends IEventDispatcherRenderer {
	
	

	public void setBorder(String value);
	public void setPosition(String value);
	public void setMargin(String value);
	public void setPadding(String value);
	public void setZIndex(String value);
	public void setOverflow(String value);
	public void setResize(String value);

	public void setX();
	public void setY();
	public void setXY();
	
	public void setRegX();
	public void setRegY();
	public void setRegXY();
	
	public void setScaleX();
	public void setScaleY();
	
	public void setScaleXY();
	
	public void setRotation();
	
	public void setAlpha();
	
	public void setVisible();
	
	public void setMouseVisible();
	public void setMouseCursor();
	
	public void setID();
	
	public void setWidth();
	public void setHeight();
	
	public void addFilter();
	public void removeFilter();
	
	public int getOriginalWidth();
	public int getOriginalHeight();
	
}