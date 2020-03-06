package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

import splashjs.layout.iface.ILayout;
import splashjs.layout.iface.IBox;
import splashjs.render.layout.iface.IHorizontalLayoutRenderer;

public class HorizontalLayout extends Layout {

	
	
	public HorizontalLayout() {
		super("horizontalLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(HorizontalLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IBox box = new Box(displayObject);
		((IHorizontalLayoutRenderer)super.getRenderer()).add(box);
	}
	
	public void refreshLayout() {
		((IHorizontalLayoutRenderer)super.getRenderer()).refreshLayout();
	}
	
	//public ArrayList<IBox> getAll() {
		//return this.boxes;
	//}
	
	public int getWidth() {
		return ((IHorizontalLayoutRenderer)super.getRenderer()).getWidth();
	}
	
	public int getHeight() {
		return ((IHorizontalLayoutRenderer)super.getRenderer()).getHeight();
	}
		
	
}