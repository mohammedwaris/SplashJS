package splashjs.events.iface;

import java.util.function.Consumer;

import splashjs.render.iface.IRenderer;
import splashjs.display.iface.IStage;

public interface IEventDispatcher {
	
	public void addEventListener(String eventName, Consumer<IEvent> eventHandler);
	public void removeEventListener(String eventName, Consumer<IEvent> eventHandler);
	public void removeAllEventListeners(String eventName);


	public void setRenderer(IRenderer renderer);
	public IRenderer getRenderer();
	public IStage getStage();
	
	//public void setRendererFromStage(IStage stage);
	
	public boolean dispatchEvent(IEvent event);
	
	public String getUniqueID();
	public String getID();
	
	public void render();
}