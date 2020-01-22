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
	
	public void add(ITransition transition) {
		transitions.add(transition);
	}
	
	public void play() {
		
		for(int i=0;i<transitions.size();i++) {
			transitions.get(i).play();
		}
		
	}
	
	public void stop() {
		for(int i=0;i<transitions.size();i++) {
			transitions.get(i).stop();
		}
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
	
	public void update(IDisplayObject targetObject, double nextValue) {
	}
	
	
	

}