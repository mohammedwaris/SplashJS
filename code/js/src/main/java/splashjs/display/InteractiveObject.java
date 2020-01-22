package splashjs.display;

import java.util.function.Consumer;

import splashjs.events.iface.IMouseEvent;
import splashjs.display.iface.IInteractiveObject;



public abstract class InteractiveObject extends DisplayObject implements IInteractiveObject {
	
	
	public InteractiveObject() {
		super();
	}
	
	public InteractiveObject(String id) {
		super(id);
		
		
	}
	
	public void dispatchClickEvent(IMouseEvent mouseEvent) {
		dispatchEvent(mouseEvent);
	}
	
	public void dispatchDoubleClickEvent(IMouseEvent mouseEvent) {
		dispatchEvent(mouseEvent);
	}
	
	public void dispatchMouseMoveEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_MOVE));
	}

	public void dispatchMouseDownEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_DOWN));
	}
	
	public void dispatchMouseUpEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_UP));
	}
	
	public void dispatchMouseOverEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_OVER));
	}
	
	public void dispatchMouseEnterEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_ENTER));
	}
	
	public void dispatchMouseLeaveEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_LEAVE));
	}
	
	public void dispatchMouseOutEvent() {
		//dispatchEvent(new UMouseEvent(MouseEvent.MOUSE_OUT));
	}
	
	
	
	
	
	
	
	
	
}