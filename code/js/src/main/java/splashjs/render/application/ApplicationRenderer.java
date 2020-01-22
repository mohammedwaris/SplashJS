package splashjs.render.application;


import static def.dom.Globals.document;
import static def.dom.Globals.navigator;

import splashjs.events.Event;
import splashjs.render.application.iface.IApplicationRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.events.iface.IEvent;



public class ApplicationRenderer extends EventDispatcherRenderer implements IApplicationRenderer {

	
	public ApplicationRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
	
		
		
		
		
		document.body.addEventListener("online", (event) -> {
			
			IEvent onlineEvent = new splashjs.events.Event(Event.ONLINE);
			getRenderObject().dispatchEvent(onlineEvent);
			
		});
		
		document.body.addEventListener("offline", (event) -> {
			
			IEvent offlineEvent = new splashjs.events.Event(Event.OFFLINE);
			getRenderObject().dispatchEvent(offlineEvent);
	
		});
		
	}
	
	public boolean isOnline() {
		boolean online = false;
		if(navigator.onLine == true)
			online = true;
		return online;
	}
	
	
}