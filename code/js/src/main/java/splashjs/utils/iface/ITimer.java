package splashjs.utils.iface;

import splashjs.events.iface.IEventDispatcher;

public interface ITimer extends IEventDispatcher {
	
	public void start();
	public void reset();
	public void stop();
	public int getCurrentCount();
	public int getDelay();
	public void setDelay(int delay);
	public int getRepeatCount();
	public void setRepeatCount(int repeatCount);
	public boolean isRunning();
	
	
}