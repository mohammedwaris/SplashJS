package splashjs.events;

import splashjs.events.iface.IMouseEvent;
import splashjs.events.iface.IEventDispatcher;

public class MouseEvent extends Event implements IMouseEvent {
	
	
	public static final String CLICK = "click";
	public static final String DOUBLE_CLICK = "double_click";
	public static final String MOUSE_DOWN = "mouse_down";
	public static final String MOUSE_ENTER = "mouse_enter";
	public static final String MOUSE_LEAVE = "mouse_leave";
	public static final String MOUSE_MOVE = "mouse_move";
	public static final String MOUSE_OUT = "mouse_out";
	public static final String MOUSE_OVER = "mouse_over";
	public static final String MOUSE_UP = "mouse_up";
	

	private boolean altKey;
	
	private int localX;
	private int localY;
	
	public MouseEvent(String name, IEventDispatcher target, IEventDispatcher currentTarget) {
		super(name, target, currentTarget);
		this.altKey = altKey;
		
	}
	
	public boolean getAltKey() {
		return this.altKey;
	}
	
	public void setAltKey(boolean altKey) {
		this.altKey = altKey;
	}
	
	public void setLocalX(int localX) {
		this.localX = localX;
	}
	
	public int getLocalX(){
		return this.localX;
	}
	
	public void setLocalY(int localY) {
		this.localY = localY;
	}
	
	public int getLocalY() {
		return this.localY;
	}
}