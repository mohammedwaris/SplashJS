package splashjs.layout;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.layout.iface.IGridLayout;
import splashjs.display.iface.IDisplayObject;



public class GridLayout extends Layout implements IGridLayout {

	private int row;
	private int col;
	
	private ArrayList<IDisplayObject> children;
	
	public GridLayout(int row, int col) {
		super("gridLayout");
		this.row = row;
		this.col = col;
		children = new ArrayList<IDisplayObject>();
		super.setRenderer(Global.global.getRendererCreator().createRenderer(GridLayout.class, this));
	}
	
	
	
	public void render() {
		super.render();
		
		//super.getRenderer().setProperty(ElementProperty.BORDER_COLLAPSE, "collapse");
		//super.getRenderer().setProperty(ElementProperty.DISPLAY, "table");
		//super.getRenderer().setProperty(ElementProperty.WIDTH, "100%");
		//super.getRenderer().setProperty(ElementProperty.HEIGHT, "100%");
		//super.getRenderer().setProperty(ElementProperty.BORDER, "1px solid olive");

	}
	
	public int getRow() {
		return this.row;
	}
	
	public int getCol() {
		return this.col;
	}
	
	public void add(IDisplayObject displayObject, int rowNum, int colNum) {

		children.add(displayObject);
		//super.getRenderer().addToGridLayout(displayObject, rowNum, colNum);
		displayObject.render();
		//displayObject.getRenderer().setProperty(ElementProperty.POSITION, "relative");
		
	}
	

	

	
	
}