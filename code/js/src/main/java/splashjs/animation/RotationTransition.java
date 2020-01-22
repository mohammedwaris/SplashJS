package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

public class RotationTransition extends Transition {

	public RotationTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(RotationTransition.class, this));
	}
	
	@Override
	public void update(IDisplayObject targetObject, double nextValue) {
		targetObject.setRotation(nextValue);
	}

}