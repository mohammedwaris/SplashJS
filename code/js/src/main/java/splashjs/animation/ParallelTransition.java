package splashjs.animation;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.animation.iface.ITransition;
import splashjs.animation.iface.IParallelTransition;
import splashjs.display.iface.IDisplayObject;

public class ParallelTransition extends Transition implements IParallelTransition {

	private ArrayList<ITransition> transitions = new ArrayList<ITransition>();

	public ParallelTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ParallelTransition.class, this));
	}
	
	public ITransition add(ITransition transition) {
		transitions.add(transition);
		return this;
	}
	
	public ITransition play() {
		
		for(int i=0;i<transitions.size();i++) {
			transitions.get(i).play();
		}
		return this;
	}
	
	public ITransition stop() {
		for(int i=0;i<transitions.size();i++) {
			transitions.get(i).stop();
		}
		return this;
	}
	
	@Override
	public int getDuration() {
		int maxDuration = 0;
		int duration = 0;
		for(int i=0;i<transitions.size();i++) {
			duration = transitions.get(i).getDuration();
			if(duration > maxDuration)
				maxDuration = duration;
		}
		return maxDuration;
	}
	
	public ITransition update(double nextValue) {
		return this;
	}
	
	
	

}