package splashjs.layout;

import splashjs.Global;
import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.layout.iface.IBox;

public class Box extends DisplayObject implements IBox {

	private IDisplayObject theOnlyMember;
	
	public Box(IDisplayObject theOnlyMember) {
		super("box");
		this.theOnlyMember = theOnlyMember;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Box.class, this));
	}
	
	public IDisplayObject getTheOnlyMember() {
		return this.theOnlyMember;
	}
	
	public int getWidth() {
		//((IBoxRenderer)super.getRenderer()).getWidth();
		return this.theOnlyMember.getWidth();
	}
	
	public int getHeight() {
		//((IBoxRenderer)super.getRenderer()).getHeight();
		return this.theOnlyMember.getHeight();
	}
	
}