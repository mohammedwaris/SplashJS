package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;

import splashjs.layout.iface.ILayout;
import splashjs.layout.iface.IBox;
import splashjs.render.layout.iface.IHorizontalLayoutRenderer;

public class HorizontalLayout extends Layout {

	public ArrayList<IBox> boxes = new ArrayList<IBox>();
	
	public HorizontalLayout() {
		super("horizontalLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(HorizontalLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IBox box = new Box(displayObject);
		((IHorizontalLayoutRenderer)super.getRenderer()).add(box);
		//boxes.add(box);
	}
	
	public ArrayList<IBox> getAll() {
		return this.boxes;
	}
	
	public int getWidth() {
		int width = 0;
		for(int i=0;i<boxes.size();i++) {
			width += boxes.get(i).getWidth();
		}
		
		return width;
	}
	
	public int getHeight() {
		int height = 0;
		for(int i=0;i<boxes.size();i++) {
			if(boxes.get(i).getHeight() > height)
				height = boxes.get(i).getHeight();
			
		}
		return height;
	}
		
	
}