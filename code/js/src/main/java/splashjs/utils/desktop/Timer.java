package splashjs.utils.desktop;



import splashjs.events.EventDispatcher;


public class Timer extends EventDispatcher { //implements ITimer {
	/*
	private int currentCount = 0;
	private int delay = 0;
	private int repeatCount = 0;
	private boolean running = false;

	private java.util.Timer jTimer = new java.util.Timer();
	
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

			jTimer.scheduleAtFixedRate(new java.util.TimerTask(){
				public void run() {
					javafx.application.Platform.runLater(new Runnable() {
						public void run() {
							dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.TIMER));
							currentCount += 1;
							if(currentCount == repeatCount) {
								dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.TIMER_COMPLETE));
								jTimer.cancel();
								running = false;
							}
						}
					});
				}
			}, 0, delay);
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
	}*/
}