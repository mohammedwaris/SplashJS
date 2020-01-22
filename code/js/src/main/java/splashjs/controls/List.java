package splashjs.controls;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.controls.iface.IItem;
import splashjs.controls.iface.IList;
import splashjs.controls.iface.IBaseItem;
import splashjs.controls.iface.IItemGroup;
import splashjs.render.controls.iface.IListRenderer;

public class List extends BaseList implements IList {

	private ArrayList<IBaseItem> items = new ArrayList<IBaseItem>();
	private boolean isRenderCalled = false;
	
	public List() {
		super("list");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(List.class, this));
	}
	
	public void addItem(IItem item) {
		this.items.add(item);
		((IListRenderer)super.getRenderer()).addItem(item);
	}
	
	public void addItemGroup(IItemGroup itemGroup) {
		this.items.add(itemGroup);
	}
	
	public ArrayList<IBaseItem> getAllItems() {
		return this.items;
	}
	

	
	public void render() {
		super.render();	
	}
}