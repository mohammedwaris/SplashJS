package splashjs.display.iface;

import java.util.function.Consumer;

import splashjs.events.iface.IMouseEvent;

public interface IInteractiveObject extends IDisplayObject {

		public void dispatchClickEvent(IMouseEvent mouseEvent);
		public void dispatchDoubleClickEvent(IMouseEvent mouseEvent);
		public void dispatchMouseMoveEvent();
		public void dispatchMouseEnterEvent();
		public void dispatchMouseLeaveEvent();
		public void dispatchMouseOverEvent();
		public void dispatchMouseOutEvent();
		public void dispatchMouseUpEvent();
}