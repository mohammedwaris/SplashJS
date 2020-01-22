package splashjs.render.controls.iface;


import splashjs.controls.iface.IItemGroup;
import splashjs.controls.iface.IItem;

public interface IListRenderer extends IBaseListRenderer {
	
	public void addAllItems();
	public void addItemGroup(IItemGroup itemGroup);
	public void addItem(IItem item);
}