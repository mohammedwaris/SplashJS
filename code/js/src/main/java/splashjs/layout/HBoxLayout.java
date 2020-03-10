package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

import splashjs.layout.iface.ILayout;
import splashjs.layout.iface.IContainer;
import splashjs.render.layout.iface.IHBoxLayoutRenderer;
import splashjs.layout.iface.IHBoxLayout;

public class HBoxLayout extends BoxLayout implements IHBoxLayout {

	
	
	public HBoxLayout() {
		super("hBoxLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(HBoxLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IContainer container = new Container(displayObject);
		((IHBoxLayoutRenderer)super.getRenderer()).add(container);
	}
	
	public void refreshLayout() {
		((IHBoxLayoutRenderer)super.getRenderer()).refreshLayout();
	}
	
	//public ArrayList<IBox> getAll() {
		//return this.boxes;
	//}
	
	public int getWidth() {
		return ((IHBoxLayoutRenderer)super.getRenderer()).getWidth();
	}
	
	public int getHeight() {
		return ((IHBoxLayoutRenderer)super.getRenderer()).getHeight();
	}
		
	
}