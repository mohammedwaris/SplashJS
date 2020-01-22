package splashjs.events;

import splashjs.events.iface.ITransitionEvent;
import splashjs.events.iface.IEventDispatcher;

public class TransitionEvent extends Event implements ITransitionEvent {

	public static final String DELAY_COMPLETE = "delay_complete";
	public static final String COMPLETE = "complete";
	public static final String DURATION_COMPLETE = "duration_complete";
	public static final String LOOP_INTERVAL_COMPLETE = "loop_interval_complete";
	
	
	
	
	public TransitionEvent(String type) {
		super(type);
	}
	
	public TransitionEvent(String type, IEventDispatcher e1, IEventDispatcher e2) {
		super(type, e1, e2);
	}
}