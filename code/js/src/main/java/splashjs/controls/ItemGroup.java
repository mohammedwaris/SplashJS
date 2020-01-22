package splashjs.controls;

import java.util.ArrayList;

import splashjs.controls.iface.IItem;
import splashjs.controls.iface.IItemGroup;

public class ItemGroup extends BaseItem implements IItemGroup {

	private String title;
	private ArrayList<IItem> items = new ArrayList<IItem>();
	
	public ItemGroup(String title) {
		this.title = title;
	}
	
	public void addItem(IItem item) {
		this.items.add(item);
	}
	
	public void removeItem(IItem item) {
		this.items.remove(item);
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getTitle() {
		return this.title;
	}
	
	public ArrayList<IItem> getAllItems() {
		return this.items;
	}
	
}