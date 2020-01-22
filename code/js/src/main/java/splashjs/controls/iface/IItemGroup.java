package splashjs.controls.iface;

import java.util.ArrayList;

public interface IItemGroup extends IBaseItem {

	public void addItem(IItem item);
	public void removeItem(IItem item);
	public ArrayList<IItem> getAllItems();
	
	public void setTitle(String title);
	public String getTitle();
}