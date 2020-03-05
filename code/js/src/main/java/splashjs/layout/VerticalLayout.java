package splashjs.layout;

import java.util.ArrayList;
import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.layout.iface.IBox;
import splashjs.layout.iface.IVerticalLayout;
import splashjs.render.layout.iface.IVerticalLayoutRenderer;

import splashjs.layout.iface.ILayout;

public class VerticalLayout extends Layout implements IVerticalLayout {

	public ArrayList<IBox> boxes = new ArrayList<IBox>();
	
	public VerticalLayout() {
		super("verticalLayout");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(VerticalLayout.class, this));
	}
	
	public void add(IDisplayObject displayObject) {
		IBox box = new Box(displayObject);
		((IVerticalLayoutRenderer)super.getRenderer()).add(box);
		//boxes.add(box);
	}
	
	
	public ArrayList<IBox> getAll() {
		return this.boxes;
	}
	
	public int getWidth() {
		int width = 0;
		for(int i=0;i<boxes.size();i++) {
			if(boxes.get(i).getWidth() > width)
				width = boxes.get(i).getWidth();
			
		}
		return width;
	}
	
	public int getHeight() {
		int height = 0;
		for(int i=0;i<boxes.size();i++) {
			height += boxes.get(i).getHeight();
		}
		return height;
	}
		
	
}