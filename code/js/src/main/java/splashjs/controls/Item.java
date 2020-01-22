package splashjs.controls;

import splashjs.controls.iface.IItem;

public class Item extends BaseItem implements IItem {

	private String text;
	private Object value;
	
	public Item(String text, Object value) {
		this.text = text;
		this.value = value;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public String getText() {
		return this.text;
	}
	
	public void setValue(Object value) {
		this.value = value;
	}
	
	public Object getValue() {
		return this.value;
	}
}