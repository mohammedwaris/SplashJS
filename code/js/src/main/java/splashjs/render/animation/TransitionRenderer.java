package splashjs.render.animation;

import splashjs.utils.iface.ITimer;
import splashjs.events.TimerEvent;
import splashjs.utils.Timer;
import splashjs.animation.iface.ITransition;
import splashjs.events.iface.ITransitionEvent;
import splashjs.events.TransitionEvent;
import splashjs.animation.TransitionState;
import splashjs.animation.easing.*;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.events.iface.IEventDispatcher;

import splashjs.render.animation.iface.ITransitionRenderer;

public abstract class TransitionRenderer extends AnimationRenderer implements ITransitionRenderer {

	protected ITimer animTimer;
	protected ITimer delayTimer;
	
	protected int repeatCount;
	
	protected String currentState = TransitionState.NONE;
	
	protected int fps = 60;
	protected int deltaTime = 1000/fps;
	
	private ITransition transition;
	
	private int currentLoopCount = 0;
	private boolean running = false;
	
	private ITransitionEvent transitionEvent = null;
	
	int ctr = 0;
	
	public TransitionRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		transition = ((ITransition)getRenderObject());
	}
	
	public void play() {
		this.repeatCount = (int)(transition.getDuration()/this.deltaTime);
		animTimer = new Timer(deltaTime, repeatCount);
		System.out.println(deltaTime + " " + repeatCount);
		//targetObject.setScaleX(super.getNextValue(0));
		
		animTimer.addEventListener(TimerEvent.TIMER, (event) -> {
			double currentTime = deltaTime*(animTimer.getCurrentCount()+1);
			
			double nextValue = 0.0;
			if(currentState.equalsIgnoreCase(TransitionState.NORMAL))
				nextValue = getNextValue(currentTime, transition.getFromValue(),
											transition.getToValue(), transition.getDuration(),
											transition.getEasing());
			else if(currentState.equalsIgnoreCase(TransitionState.REVERSE))
				nextValue = getNextValue(currentTime, transition.getToValue(),
											transition.getFromValue(), transition.getDuration(),
											transition.getEasing());
											
					
			transition.update(transition.getTargetObject(), nextValue);
			
			ctr++;
			System.out.println("nextValue: " + nextValue + " ctr: " + ctr + " " + "currentCount: " + animTimer.getCurrentCount() + " repeatCount: " + repeatCount);


			
		});
		animTimer.addEventListener(TimerEvent.TIMER_COMPLETE, (event) -> {
			
			//System.out.println("anim timer complete");
			if(currentState.equalsIgnoreCase(TransitionState.NORMAL))
				transition.update(transition.getTargetObject(), transition.getToValue());
			else if(currentState.equalsIgnoreCase(TransitionState.REVERSE))
				transition.update(transition.getTargetObject(), transition.getFromValue());
			
			//System.out.println("reverse: " + transition.getAutoReverse());
			
			if(transition.getAutoReverse() == true){
				currentLoopCount += 1;
				if(currentState.equalsIgnoreCase(TransitionState.NORMAL))
					currentState = TransitionState.REVERSE;
				else if(currentState.equalsIgnoreCase(TransitionState.REVERSE))
					currentState = TransitionState.NORMAL;
				
			}else{
				currentLoopCount += 2;
			}
			
			if(running == true && (transition.getLoopCount() == 0 || currentLoopCount < transition.getLoopCount()*2)){
				animTimer.reset();
				animTimer.start();
			}else{
				running = false;
				splashjs.events.iface.ITransitionEvent transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE);
				transition.dispatchEvent(transitionEvent);
			}
			
			
			if(transition.getLoopCount() <= currentLoopCount) {
				transitionEvent = new TransitionEvent(TransitionEvent.LOOP_INTERVAL_COMPLETE, transition, transition);
				transition.dispatchEvent(transitionEvent);
			}
			if(transition.getLoopCount() == currentLoopCount) {
				transitionEvent = new TransitionEvent(TransitionEvent.COMPLETE, transition, transition);
				transition.dispatchEvent(transitionEvent);
				currentState = TransitionState.NONE;
			}
		});
		if(transition.getDelay() > 0){
			delayTimer = new Timer(transition.getDelay(), 1);
			delayTimer.addEventListener(TimerEvent.TIMER_COMPLETE, (event) -> {
				transitionEvent = new TransitionEvent(TransitionEvent.DELAY_COMPLETE, transition, transition);
				transition.dispatchEvent(transitionEvent);
				//System.out.println("delay timer completed");
				animTimer.start();
			});
			running = true;
			currentState = TransitionState.NORMAL;
			delayTimer.start();
			
		}else{
			running = true;
			currentState = TransitionState.NORMAL;
			animTimer.start();
			
		}
	}
	
	public void stop() {
		running = false;
	}
	
	public boolean isRunning() {
		return running;
	}
	
	
		
	
	private double getNextValue(double currentTime, double fromValue, double toValue, int duration, String easing) {
		
		
		double nextValue = 0.0;
		
		if(easing.equalsIgnoreCase(Linear.EASE_NONE)) {
			nextValue = Linear.easeNone(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_IN)) {
			nextValue = Linear.easeIn(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_OUT)) {
			nextValue = Linear.easeOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_IN_OUT)) {
			nextValue = Linear.easeInOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_IN)) {
			nextValue = Elastic.easeIn(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_OUT)) {
			nextValue = Elastic.easeOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_IN_OUT)) {
			nextValue = Elastic.easeInOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_IN)) {
			nextValue = Quint.easeIn(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_OUT)) {
			nextValue = Quint.easeOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_IN_OUT)) {
			nextValue = Quint.easeInOut(currentTime, 
										fromValue, 
										toValue - fromValue, 
										duration);
		}
		
		return nextValue;								
	}
	
	public String getTransitionState() {
		return currentState;
	}
}