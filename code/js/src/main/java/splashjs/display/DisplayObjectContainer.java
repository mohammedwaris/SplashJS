package splashjs.display;

import java.util.ArrayList;


import splashjs.events.Event;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IStage;
import splashjs.events.iface.IEvent;
import splashjs.render.display.iface.IDisplayObjectRenderer;

public abstract class DisplayObjectContainer extends InteractiveObject implements IDisplayObjectContainer {
	
	protected ArrayList<IDisplayObject> children = new ArrayList<IDisplayObject>();
	
	protected IDisplayObjectContainer parent;

	
	public DisplayObjectContainer() {
		super();
	}
	
	public DisplayObjectContainer(String id) {
		super(id);
	}
	
	public void addChild(IDisplayObject child) {
		if(this == child)
			throw new IllegalArgumentException("A DisplayObject cannot be added to itself.");
		else if(child instanceof IStage)
			throw new IllegalArgumentException("Stage cannot be added to DisplayObject.");
		
		if(child.getParent() != null) {
			child.getParent().getRenderer().removeChild(child.getRenderer());
		}
		
		children.add(child);
		((IDisplayObjectRenderer)child.getRenderer()).setZIndex((children.size()-1)+"");
		super.getRenderer().appendChild(child.getRenderer());
		IEvent addedEvent = new Event(Event.ADDED, child, child);
		addedEvent.setData(this);
		child.dispatchEvent(addedEvent);
		
		if(this.getStage() != null) {
			IEvent addedToStageEvent = new Event(Event.ADDED_TO_STAGE, child, child);
			addedToStageEvent.setData(this.getStage());
			child.dispatchEvent(addedToStageEvent);
		}
	}
	
	public void addChildAt(IDisplayObject child, int index) {
		if(this == child)
			throw new IllegalArgumentException("A DisplayObject cannot be added to itself.");
		else if(child instanceof IStage)
			throw new IllegalArgumentException("Stage cannot be added to DisplayObject.");
		else if(index < 0 || index > children.size())
			throw new IllegalArgumentException("Child index is not within the limit.");
		
		if(child.getParent() != null) {
			child.getParent().getRenderer().removeChild(child.getRenderer());
		}
		
		children.add(index, child);
		super.getRenderer().appendChild(child.getRenderer());
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = (IDisplayObject) children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i+"");
		}
		IEvent addedEvent = new Event(Event.ADDED, child, child);
		addedEvent.setData(this);
		child.dispatchEvent(addedEvent);
		
		if(this.getStage() != null) {
			IEvent addedToStageEvent = new Event(Event.ADDED_TO_STAGE, child, child);
			addedToStageEvent.setData(this.getStage());
			child.dispatchEvent(addedToStageEvent);
		}
	}
	
	public void removeChild(IDisplayObject child) {
		if(this.contains(child) == false)
			throw new IllegalArgumentException("Child does not exists.");
		
		
		children.remove(child);
		super.getRenderer().removeChild(child.getRenderer());
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i + "");
		}
		IEvent removedEvent = new Event(Event.REMOVED, child, child);
		child.dispatchEvent(removedEvent);
		
		if(this.getStage() != null) {
			IEvent removedFromStageEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
			child.dispatchEvent(removedFromStageEvent);
		}
	}
	
	public void removeChildAt(int index) {
		if(index < 0)
			throw new IllegalArgumentException("Child index is not within the limit.");
		
		IDisplayObject child = getChildAt(index);
		children.remove(index);
		super.getRenderer().removeChild(child.getRenderer());
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i + "");
		}
		IEvent removedEvent = new Event(Event.REMOVED, child, child);
		child.dispatchEvent(removedEvent);
		
		if(this.getStage() != null) {
			IEvent removedFromStageEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
			child.dispatchEvent(removedFromStageEvent);
		}
	}
	
	public IDisplayObject getChildByName(String name) {
		IDisplayObject outChild = null;
		for(IDisplayObject child : children) {
			if(child.getName().equals(name)) {
				outChild = child;
				break;
			}
		}
		return outChild;
	}
	
	public IDisplayObject getChildAt(int index) {
		IDisplayObject outChild = null;
		outChild = children.get(index);
		return outChild;
	}
	
	public int getChildIndex(IDisplayObject child) {
		int index = -1;
		index = children.indexOf(child);
		return index;
	}
	
	public void setChildIndex(IDisplayObject child, int index) {
		if(this == child)
			throw new IllegalArgumentException("A DisplayObject cannot be added to itself.");
		else if(child instanceof IStage)
			throw new IllegalArgumentException("Stage cannot be added to DisplayObject.");
		else if(index < 0)
			throw new IllegalArgumentException("Child index is not within the limit.");
		else if(this.contains(child) == false)
			throw new IllegalArgumentException("Child does not exists.");
		
		int currentIndex = this.getChildIndex(child);
		if(currentIndex < index) {
			children.remove(child);
			children.add(index, child);
		}else if(currentIndex > index) {
			children.remove(child);
			children.add(index-1, child);
		}
		
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i + "");
		}
		
	}
	
	public void swapChildren(IDisplayObject child1, IDisplayObject child2) {
		if(this == child1 || this == child2)
			throw new IllegalArgumentException("A DisplayObject cannot be swapped to its parent.");
		else if(this.contains(child1) == false || this.contains(child2) == false)
			throw new IllegalArgumentException("Child does not exists.");
		
		int child1Index = this.getChildIndex(child1);
		int child2Index = this.getChildIndex(child2);
		
		IDisplayObject tempChild = child1;
		children.set(child1Index, child2);
		children.set(child2Index, tempChild);
		
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i + "");
		}
	}
	
	public void swapChildrenAt(int index1, int index2) {
		
		if(index1 >= children.size() || index2 >= children.size() || index1 < 0 || index2 < 0)
			throw new IllegalArgumentException("Child index is not within the limit.");
		else if(index1 == index2)
			return;
		
		IDisplayObject child1 = getChildAt(index1);
		IDisplayObject child2 = getChildAt(index2);
		
		IDisplayObject tempChild = child1;
		children.set(index1, child2);
		children.set(index2, tempChild);
		
		for(int i=0;i<children.size();i++) {
			IDisplayObject myChild = children.get(i);
			((IDisplayObjectRenderer)myChild.getRenderer()).setZIndex(i + "");
		}
		
	}
	
	public boolean contains(IDisplayObject displayObject) {
		boolean out = false;
		out = children.contains(displayObject);
		return out;
	}
	
	public int getNumChildren() {
		return children.size();
	}
	
	public boolean dispatchEvent(IEvent event) {
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			for(int i=0;i<children.size();i++) {
				IDisplayObject child = (IDisplayObject) children.get(i);

				IEvent addedToStageEvent = new Event(Event.ADDED_TO_STAGE, child, child);
				addedToStageEvent.setData(event.getData());
				child.dispatchEvent(addedToStageEvent);
			}
			
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED_FROM_STAGE)) {
			super.stage = null;
			for(IDisplayObject child : children) {
				IEvent removedFromStageEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
				child.dispatchEvent(removedFromStageEvent);
			}
		}
		return super.dispatchEvent(event);
		
	}
	
	public void render() {
		super.render();
		for(IDisplayObject child : children) {
			child.render();
		}
	}
	
}