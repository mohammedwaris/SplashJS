package splashjs.animation;

import splashjs.display.iface.IDisplayObject;
import splashjs.utils.iface.ITimer;
import splashjs.utils.Timer;
import splashjs.events.TimerEvent;
import splashjs.animation.iface.ITransition;

public class FadeTransition extends Transition {
	
	private double currentValue;

	@Override
	public ITransition update(double nextValue) {
		IDisplayObject targetObject = super.getTargetObject();
		targetObject.setAlpha(nextValue);
		return this;
	}
	
	public ITransition play() {
		/*double fromValue = getFromValue();
		double toValue = getToValue();
		IDisplayObject targetObject = getTargetObject();
		int duration = getDuration();
		int deltaTime = getDeltaTime();
		int waitTime = getDelay();
		double deltaValue = ((toValue - fromValue)/duration)*deltaTime;
		int repeatCount = (int)(duration/deltaTime);
		currentValue = fromValue;
		getAnimTimer().setDelay(deltaTime);
		getAnimTimer().setRepeatCount(repeatCount);
		getAnimTimer().addEventListener(TimerEvent.TIMER, (event) -> {
			currentValue += deltaValue;
			targetObject.setAlpha(currentValue);
		});
		getAnimTimer().addEventListener(TimerEvent.TIMER_COMPLETE, (event) -> {
			System.out.println("finish");
		});
		
		if(waitTime > 0) {
			getDelayTimer().setDelay(waitTime);
			getDelayTimer().setRepeatCount(1);
			getDelayTimer().addEventListener(TimerEvent.TIMER_COMPLETE, (event) -> {
				System.out.println("delay end");
				targetObject.setAlpha(currentValue);
				getAnimTimer().start();
			});
			getDelayTimer().start();
		}else{
			targetObject.setAlpha(currentValue);
			getAnimTimer().start();
		}*/
		return this;
	}
}