package splashjs.events;

import splashjs.events.iface.IEventDispatcher;

public class TimerEvent extends Event {

	public static final String TIMER = "timer";
	public static final String TIMER_COMPLETE = "timer_complete";
	
	
	public TimerEvent(String type, IEventDispatcher target, IEventDispatcher currentTarget) {
		super(type, target, currentTarget);
	}
}