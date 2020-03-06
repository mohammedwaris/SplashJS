package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.layout.iface.IBox;
import splashjs.layout.iface.IVerticalLayout;
import splashjs.render.layout.iface.IVerticalLayoutRenderer;

import splashjs.layout.iface.ILayout;

public class VerticalLayout extends Layout implements IVerticalLayout {

	
	
	public VerticalLayout() {
		super("verticalLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(VerticalLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IBox box = new Box(displayObject);
		((IVerticalLayoutRenderer)super.getRenderer()).add(box);
	}
	
	public void refreshLayout() {
		((IVerticalLayoutRenderer)super.getRenderer()).refreshLayout();
	}
	
	
	//public ArrayList<IBox> getAll() {
		//return this.boxes;
	//}
	
	public int getWidth() {
		return ((IVerticalLayoutRenderer)super.getRenderer()).getWidth();
	}
	
	public int getHeight() {
		return ((IVerticalLayoutRenderer)super.getRenderer()).getHeight();
	}
		
	
}