package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.layout.iface.IContainer;
import splashjs.layout.iface.IVBoxLayout;
import splashjs.render.layout.iface.IVBoxLayoutRenderer;

import splashjs.layout.iface.ILayout;

public class VBoxLayout extends BoxLayout implements IVBoxLayout {

	
	
	public VBoxLayout() {
		super("vBoxLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(VBoxLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IContainer container = new Container(displayObject);
		((IVBoxLayoutRenderer)super.getRenderer()).add(container);
	}
	
	public void refreshLayout() {
		((IVBoxLayoutRenderer)super.getRenderer()).refreshLayout();
	}
	
	
	//public ArrayList<IBox> getAll() {
		//return this.boxes;
	//}
	
	public int getWidth() {
		return ((IVBoxLayoutRenderer)super.getRenderer()).getWidth();
	}
	
	public int getHeight() {
		return ((IVBoxLayoutRenderer)super.getRenderer()).getHeight();
	}
		
	
}