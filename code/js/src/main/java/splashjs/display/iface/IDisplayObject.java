package splashjs.display.iface;

import java.util.ArrayList;

import splashjs.filters.iface.IFilter;
import splashjs.render.iface.IRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.ui.iface.IMouseCursor;
import splashjs.geom.iface.IPoint;






public interface IDisplayObject extends IEventDispatcher {

	public int getX();
	public void setX(int x);
	
	public int getY();
	public void setY(int y);
	
	public void setXY(int x, int y);
	
	public int getWidth();
	public void setWidth(int width);
	
	public int getHeight();
	public void setHeight(int height);
	
	public void setSize(int width, int height);
	
	public Integer getRegX();
	public void setRegX(Integer regX);
	
	public Integer getRegY();
	public void setRegY(Integer regY);
	
	public void setRegXY(int regX, int regY);
	
	public double getScaleX();
	public void setScaleX(double scaleX);
	
	public double getScaleY();
	public void setScaleY(double scaleY);
	
	public void setScaleXY(double scaleX, double scaleY);
	
	public double getRotation();
	public void setRotation(double rotation);
	
	public Boolean getVisible();
	public void setVisible(Boolean visible);
	
	public Double getAlpha();
	public void setAlpha(Double alpha);
	
	public String getName();
	public void setName(String name);
	

	
	public IDisplayObjectContainer getParent();
	
	public Integer getMouseX();
	
	public Integer getMouseY();
	
	public void setMouseVisible(boolean mouseVisible);
	public boolean getMouseVisible();
	
	public void setMouseCursor(IMouseCursor mouseCursor);
	public IMouseCursor getMouseCursor();
	
	public void addFilter(IFilter filter);
	public void removeFilter(IFilter filter);
	public void removeAllFilters();
	public boolean hasFilter(IFilter filter);
	public ArrayList<IFilter> getAllFilters();
	
	public IPoint localToGlobal(IPoint point);
	
	public IPoint globalToLocal(IPoint point);
	
	public boolean hitTestObject(IDisplayObject displayObject);
	public boolean hitTestPoint(int x, int y);
	
	
	
	
	

	
	
}

