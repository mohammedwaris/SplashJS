package splashjs.events;

import splashjs.events.iface.IIOErrorEvent;

public class IOErrorEvent extends Event implements IIOErrorEvent {
	
	public static final String IO_ERROR = "io_error";
	
	private String text = null;
	
	public IOErrorEvent(String type) {
		super(type);
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public String getText() {
		return this.text;
	}
}