package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.events.TimerEvent;
import splashjs.utils.Timer;
import splashjs.animation.iface.ITransition;
import splashjs.animation.iface.IScaleTransition;

import splashjs.animation.easing.Elastic;

public class ScaleTransition extends Transition implements IScaleTransition {

	private String scaleTransitionType = ScaleTransitionType.XY;
	
	public ScaleTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ScaleTransition.class, this));
	}
	
	public void setScaleTransitionType(String scaleTransitionType) {
		this.scaleTransitionType = scaleTransitionType;
	}
	
	public String getScaleTransitionType() {
		return this.scaleTransitionType;
	}
	
	@Override
	public ITransition update(double nextValue) {
		IDisplayObject targetObject = super.getTargetObject();
		if(scaleTransitionType.equalsIgnoreCase(ScaleTransitionType.X)) {
			targetObject.setScaleX(nextValue);
		}else if(scaleTransitionType.equalsIgnoreCase(ScaleTransitionType.Y)) {
			targetObject.setScaleY(nextValue);
		}else if(scaleTransitionType.equalsIgnoreCase(ScaleTransitionType.XY)) {
			targetObject.setScaleX(nextValue);
			targetObject.setScaleY(nextValue);
		}
		return this;
	}
	
	
}