package splashjs.render.animation;

import static def.js.Globals.undefined;
import static def.dom.Globals.requestAnimationFrame;

import splashjs.utils.iface.ITimer;
import splashjs.events.TimerEvent;
import splashjs.utils.Timer;
import splashjs.animation.TransitionState;
import splashjs.animation.iface.ITransition;
import splashjs.animation.iface.IScaleTransition;
import splashjs.events.TransitionEvent;
import splashjs.animation.easing.Linear;
import splashjs.animation.easing.Elastic;
import splashjs.animation.easing.Quint;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.events.iface.ITransitionEvent;
import splashjs.animation.ScaleTransitionType;
import splashjs.animation.TransitionType;
import splashjs.animation.ScaleTransition;

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
				nextValue = getNextValue(currentTime, transition.getFrom(),
											transition.getTo(), transition.getDuration(),
											transition.getEasing());
			else if(currentState.equalsIgnoreCase(TransitionState.REVERSE))
				nextValue = getNextValue(currentTime, transition.getTo(),
											transition.getFrom(), transition.getDuration(),
											transition.getEasing());
			transition.update(nextValue);
			
			//final double nv = nextValue;		
			//requestAnimationFrame((data) -> {transition.update(nv);});
			
			ctr++;
			System.out.println("nextValue: " + nextValue + " ctr: " + ctr + " " + "currentCount: " + animTimer.getCurrentCount() + " repeatCount: " + repeatCount);


			
		});
		animTimer.addEventListener(TimerEvent.TIMER_COMPLETE, (event) -> {
			
			//System.out.println("anim timer complete");
			if(currentState.equalsIgnoreCase(TransitionState.NORMAL))
				transition.update(transition.getTo());
			else if(currentState.equalsIgnoreCase(TransitionState.REVERSE))
				transition.update(transition.getFrom());
			
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
	
	
		
	
	private double getNextValue(double currentTime, double from, double to, int duration, String easing) {
		
		
		double nextValue = 0.0;
		
		if(easing.equalsIgnoreCase(Linear.EASE_NONE)) {
			nextValue = Linear.easeNone(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_IN)) {
			nextValue = Linear.easeIn(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_OUT)) {
			nextValue = Linear.easeOut(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Linear.EASE_IN_OUT)) {
			nextValue = Linear.easeInOut(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_IN)) {
			nextValue = Elastic.easeIn(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_OUT)) {
			nextValue = Elastic.easeOut(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Elastic.EASE_IN_OUT)) {
			nextValue = Elastic.easeInOut(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_IN)) {
			nextValue = Quint.easeIn(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_OUT)) {
			nextValue = Quint.easeOut(currentTime, 
										from, 
										to - from, 
										duration);
		}else if(easing.equalsIgnoreCase(Quint.EASE_IN_OUT)) {
			nextValue = Quint.easeInOut(currentTime, 
										from, 
										to - from, 
										duration);
		}
		
		return nextValue;								
	}
	
	public String getTransitionState() {
		return currentState;
	}
	
	public static ITransition create(Object inparams){
		
		def.js.Object params = (def.js.Object) inparams;
		ITransition transition = null;
		String type = params.$get("type");
		if(type != null && !type.isEmpty()) {
			IDisplayObject target;
			double from;
			double to;
			String ease;
			int duration;
			boolean autoReverse;
			int loopCount;
			int delay;
			def.js.Function onComplete;
			if(type.equalsIgnoreCase(TransitionType.SCALE_X) ||
			   type.equalsIgnoreCase(TransitionType.SCALE_X) ||
			   type.equalsIgnoreCase(TransitionType.SCALE_XY)) {
				transition  = new ScaleTransition();
				target      = params.$get("target");
				from        = params.$get("from");
				to          = params.$get("to");
				ease        = params.$get("ease") == undefined ? transition.getEasing() : params.$get("ease");
				duration    = params.$get("duration") == undefined ? transition.getDuration() : params.$get("duration");
				autoReverse = params.$get("autoReverse") == undefined ? transition.getAutoReverse() : params.$get("autoReverse");
				loopCount   = params.$get("loopCount") == undefined ? transition.getLoopCount() : params.$get("loopCount");
				delay       = params.$get("delay");
				onComplete  = params.$get("onComplete");
				
				transition.setTargetObject(target)
						  .setFrom(from)
						  .setTo(to)
						  .setDuration(duration)
						  .setAutoReverse(autoReverse)
						  .setLoopCount(loopCount)
						  .setDelay(delay)
						  .setEasing(ease)
						  .addEventListener(TransitionEvent.COMPLETE, (event) -> {
							  onComplete.apply(event);
						  });
			}
			if(type.equalsIgnoreCase(TransitionType.SCALE_X))
				((IScaleTransition)transition).setScaleTransitionType(ScaleTransitionType.X); 
			else if(type.equalsIgnoreCase(TransitionType.SCALE_Y))
				((IScaleTransition)transition).setScaleTransitionType(ScaleTransitionType.Y);
			else if(type.equalsIgnoreCase(TransitionType.SCALE_XY))
				((IScaleTransition)transition).setScaleTransitionType(ScaleTransitionType.XY);
		}
		
		
		return transition;
	}
}