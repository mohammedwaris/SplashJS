package splashjs.events;

import splashjs.events.iface.IEvent;
import splashjs.events.iface.IEventDispatcher;


public class Event implements IEvent {
	
	public static final String OPEN = "open";
	public static final String LOAD = "load";
	public static final String ONLINE = "online";
	public static final String OFFLINE = "offline";
	public static final String LOADED = "loaded";
	public static final String ADDED_TO_STAGE = "added_to_stage";
	public static final String REMOVED_FROM_STAGE = "removed_from_stage";
	public static final String ADDED = "added";
	public static final String REMOVED = "removed";
	public static final String ENTER_FRAME = "enter_frame";
	public static final String EXIT_FRAME = "exit_frame";
	public static final String SELECT = "select";
	public static final String CANCEL = "cancel";
	public static final String COMPLETE = "complete";
	public static final String RESIZE = "resize";
	public static final String CHANGE = "change";
	
	private String type;
	private IEventDispatcher target;
	private IEventDispatcher currentTarget;
	
	private Object data;
	
	private boolean altKey;
	
	public Event(String type) {
		this.type = type;
	}
	
	public Event(String type, IEventDispatcher target, IEventDispatcher currentTarget) {
		this.type = type;
		this.target = target;
		this.currentTarget = currentTarget;
	}
	
	public String getType() {
		return type;
	}
	
	public void setTarget(IEventDispatcher target) {
		this.target = target;
	}
	
	public IEventDispatcher getTarget() {
		return target;
	}
	
	public void setCurrentTarget(IEventDispatcher currentTarget) {
		this.currentTarget = currentTarget;
	}
	
	public IEventDispatcher getCurrentTarget() {
		return currentTarget;
	}
	
	public void setData(Object data) {
		this.data = data;
	}
	
	public Object getData() {
		return this.data;
	}
	
	public String toString() {
		String info = "[object " + getClass().getName() + "]";
		return info;
	}
	
}