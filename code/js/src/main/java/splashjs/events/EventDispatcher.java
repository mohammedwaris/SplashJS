package splashjs.events;

import java.util.ArrayList;
import java.util.function.Consumer;

import splashjs.render.iface.IRenderer;
import splashjs.display.iface.IStage;
import splashjs.events.iface.IEventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.lang.SplashObject;

public abstract class EventDispatcher extends SplashObject implements IEventDispatcher {
	
	private EventStore eventStore;
	private String uniqueID;
	private String id;
	
	private IRenderer renderer;
	
	protected IStage stage;
	
	public EventDispatcher() {
		this("splashjs");
	}
	
	public EventDispatcher(String id) {
		eventStore = new EventStore();
		this.id = id;
		this.uniqueID = id + System.nanoTime();
	}
	
	public void setRenderer(IRenderer renderer) {
		this.renderer = renderer;
	}
	
	public IRenderer getRenderer() {
		return this.renderer;
	}
	
	public IStage getStage() {
		return this.stage;
	}
	
	
	
	public void render() {
	}
	
	
	public void addEventListener(String eventName, Consumer<IEvent> eventHandler) {
		eventStore.add(eventName, eventHandler);
	}
	
	public void removeEventListener(String eventName, Consumer<IEvent> eventHandler) {
		eventStore.remove(eventName, eventHandler);
	}
	
	public void removeAllEventListeners(String eventName) {
		eventStore.removeAll(eventName);
	}
	
	public boolean dispatchEvent(IEvent event) {
		String eventName = event.getType();
		for(Consumer<IEvent> eventHandler : eventStore.getEventHandlersByName(eventName))
			eventHandler.accept(event);
		return true;
	}
	
	@Override
	public String getUniqueID() {
		return this.uniqueID;
	}
	
	@Override
	public String getID() {
		return this.id;
	}
	
	
	
	
	
	
	class EventStore {

		private ArrayList<String> eventNames = new ArrayList<String>();
		private ArrayList<Consumer<IEvent>> eventHandlers = new ArrayList<Consumer<IEvent>>();
	
		public EventStore() {
		}
	
		public void add(String eventName, Consumer<IEvent> eventHandler) {
			eventNames.add(eventName);
			eventHandlers.add(eventHandler);
		}
		
		public void remove(String eventName, Consumer<IEvent> eventHandler) {
			
			int pos = -1;
			for(int i=0;i<eventHandlers.size();i++){
				if(eventHandlers.get(i) == eventHandler) {
					pos = i;
					break;
				}
			}
			
			if(pos >= 0) {
				eventNames.remove(pos);
				eventHandlers.remove(pos);
			}
			
		}
		
		public void removeAll(String eventName) {
			
			
			
		}
	
		public ArrayList<Consumer<IEvent>> getEventHandlersByName(String eventName) {
		
			ArrayList<Consumer<IEvent>> eHandlers = new ArrayList<Consumer<IEvent>>();
			for(int i=0;i<eventNames.size();i++) {
				if(eventNames.get(i).equalsIgnoreCase(eventName))
				eHandlers.add(eventHandlers.get(i));
			}
			return eHandlers;
		}

	}//end of internal EventStore class
	
}//end of class