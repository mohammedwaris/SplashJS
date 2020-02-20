package splashjs.display.iface;

import java.util.ArrayList;

public interface IDisplayObjectContainer extends IInteractiveObject {
	
	

	public void addChild(IDisplayObject displayObject);
	public void addChildAt(IDisplayObject displayObject, int index);
	
	public void removeChild(IDisplayObject displayObject);
	public void removeChildAt(int index);
	
	public IDisplayObject getChildByName(String name);
	public IDisplayObject getChildAt(int index);
	public int getChildIndex(IDisplayObject displayObject);
	
	public void setChildIndex(IDisplayObject displayObject, int index);
	public void swapChildren(IDisplayObject displayObject1, IDisplayObject displayObject2);
	public void swapChildrenAt(int index1, int index2);
	
	public boolean contains(IDisplayObject displayObject);
	
	public int getNumChildren();
	
	public ArrayList<IDisplayObject> getAllChildren();
	
	
}