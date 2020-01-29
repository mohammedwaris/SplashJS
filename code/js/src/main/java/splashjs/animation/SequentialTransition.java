package splashjs.animation;

import java.util.ArrayList;

import splashjs.animation.iface.ITransition;
import splashjs.display.iface.IDisplayObject;
import splashjs.events.TransitionEvent;

public class SequentialTransition extends Transition {

	private ArrayList<ITransition> transitions = new ArrayList<ITransition>();
	private int currentTransitionNumber = 0;
	private ITransition currentTransition;
	
	public SequentialTransition() {
	}
	
	public ITransition add(ITransition transition) {
		transitions.add(transition);
		return this;
	}
	
	
	public ITransition play() {
		
		ITransition transition = null;
		for(int i=0;i<transitions.size();i++) {
			transition = transitions.get(i);
			transition.addEventListener(TransitionEvent.DURATION_COMPLETE, (event) -> {
				currentTransitionNumber += 1;
				if(currentTransitionNumber < transitions.size()) {
					currentTransition = transitions.get(currentTransitionNumber);
					currentTransition.play();
				}
			});
		}
		currentTransition = transitions.get(currentTransitionNumber);
		currentTransition.play();
		return this;
	}
	
	public ITransition stop() {
		currentTransition.stop();
		return this;
	}
	
	public ITransition update(double value) {
		return this;
	}
}