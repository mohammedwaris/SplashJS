package splashjs.layout;

import splashjs.Global;
import splashjs.display.DisplayObject;
import splashjs.display.iface.IDisplayObject;
import splashjs.layout.iface.IContainer;
import splashjs.render.layout.iface.IContainerRenderer;

public class Container extends DisplayObject implements IContainer {

	private IDisplayObject theOnlyMember;
	
	public Container(IDisplayObject theOnlyMember) {
		super("box");
		this.theOnlyMember = theOnlyMember;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Container.class, this));
	}
	
	public IDisplayObject getTheOnlyMember() {
		return this.theOnlyMember;
	}
	
	public int getWidth() {
		return ((IContainerRenderer)super.getRenderer()).getWidth();
		//return this.theOnlyMember.getWidth();
	}
	
	public int getHeight() {
		return ((IContainerRenderer)super.getRenderer()).getHeight();
		//return this.theOnlyMember.getHeight();
	}
	
}