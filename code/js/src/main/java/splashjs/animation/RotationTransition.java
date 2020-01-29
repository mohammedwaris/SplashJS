package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.animation.iface.ITransition;

public class RotationTransition extends Transition {

	public RotationTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(RotationTransition.class, this));
	}
	
	@Override
	public ITransition update(double nextValue) {
		IDisplayObject targetObject = super.getTargetObject();
		targetObject.setRotation(nextValue);
		return this;
	}

}