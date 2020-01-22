package splashjs.application.iface;

import splashjs.display.iface.IStage;
import splashjs.events.iface.IEventDispatcher;



public interface IStageOwner extends IEventDispatcher {
	
	//public IRenderer getRenderer();
	//public void setRenderer(IRenderer renderer);
	
	public void setWidth(int width);
	public void setHeight(int height);
	public int getWidth();
	public int getHeight();
	

	
	//public IRenderer createRenderer();
	//public IRenderer createRenderer(Class clazz, IEventDispatcher renderObject);
	
	//public void setStageAsChild();


	//public void dispatchResizeEvent(IEvent resizeEvent, int newWidth, int newHeight);
	
	public IStage getStage();
}