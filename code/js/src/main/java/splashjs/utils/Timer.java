package splashjs.utils;

import splashjs.events.EventDispatcher;


import splashjs.utils.iface.ITimer;

public class Timer extends EventDispatcher implements ITimer {
	
	
	
	private int currentCount = 0;
	private int delay = 0;
	private int repeatCount = 0;
	private boolean running = false;
	private ITimer self = this;

	private java.util.Timer jTimer = new java.util.Timer();
	
	public Timer() {
		super("timer");
	}
	
	public Timer(int delay) {
		super("timer");
		this.delay = delay;
	}
	
	public Timer(int delay, int repeatCount) {
		super("timer");
		this.delay = delay;
		this.repeatCount = repeatCount;
	}
	
	public void reset() {
		jTimer.cancel();
		this.currentCount = 0;
		this.running = false;
	}
	
	public void start() {
			//jTimer = new java.util.Timer();
			jTimer.scheduleAtFixedRate(new java.util.TimerTask(){
				public void run() {
					dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER, self, self));
					currentCount += 1;
					if(currentCount == repeatCount) {
						jTimer.cancel();
						running = false;
						dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER_COMPLETE, self, self));
						
					}
					
				}
			}, delay, delay);
			this.running = true;

	}
	
	public void stop() {
		jTimer.cancel();
		this.running = false;
	}
	
	public int getCurrentCount() {
		return this.currentCount;
	}
	
	public int getDelay() {
		return this.delay;
	}
	public void setDelay(int delay) {
		this.delay = delay;
	}
	
	public int getRepeatCount() {
		return this.repeatCount;
	}
	public void setRepeatCount(int repeatCount) {
		this.repeatCount = repeatCount;
	}
	
	public boolean isRunning() {
		return this.running;
	}
}