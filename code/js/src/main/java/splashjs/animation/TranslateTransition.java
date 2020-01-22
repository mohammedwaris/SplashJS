package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

public class TranslateTransition extends Transition {
	
	private int fromX = -1;
	private int toX   = -1;
	private int fromY = -1;
	private int toY   = -1;
	
	public TranslateTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ScaleTransition.class, this));
	}
	
	@Override
	public void update(IDisplayObject targetObject, double nextValue) {
		
	}
	
	
	
}