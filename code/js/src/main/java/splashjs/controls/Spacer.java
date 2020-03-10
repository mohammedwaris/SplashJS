package splashjs.controls;

import splashjs.Global;
import splashjs.controls.iface.ISpacer;

public class Spacer extends Control implements ISpacer {
	
	public Spacer() {
		
		super("spacer");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Spacer.class, this));
	}

}