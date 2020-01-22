package splashjs.ui;

import splashjs.display.iface.IImage;
import splashjs.ui.iface.IMouseCursor;

public class MouseCursor implements IMouseCursor {

	public static final IMouseCursor ALIAS = new MouseCursor(MouseCursorName.ALIAS, MouseCursorType.SYSTEM);
	public static final IMouseCursor ALL_SCROLL = new MouseCursor(MouseCursorName.ALL_SCROLL, MouseCursorType.SYSTEM);
	public static final IMouseCursor AUTO = new MouseCursor(MouseCursorName.AUTO, MouseCursorType.SYSTEM);
	public static final IMouseCursor CELL = new MouseCursor(MouseCursorName.CELL, MouseCursorType.SYSTEM);
	public static final IMouseCursor CONTEXT_MENU = new MouseCursor(MouseCursorName.CONTEXT_MENU, MouseCursorType.SYSTEM);
	public static final IMouseCursor COL_RESIZE = new MouseCursor(MouseCursorName.COL_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor COPY = new MouseCursor(MouseCursorName.COPY, MouseCursorType.SYSTEM);
	public static final IMouseCursor CROSSHAIR = new MouseCursor(MouseCursorName.CROSSHAIR, MouseCursorType.SYSTEM);
	public static final IMouseCursor DEFAULT = new MouseCursor(MouseCursorName.DEFAULT, MouseCursorType.SYSTEM);
	public static final IMouseCursor E_RESIZE = new MouseCursor(MouseCursorName.E_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor EW_RESIZE = new MouseCursor(MouseCursorName.EW_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor GRAB = new MouseCursor(MouseCursorName.GRAB, MouseCursorType.SYSTEM);
	public static final IMouseCursor GRABBING = new MouseCursor(MouseCursorName.GRABBING, MouseCursorType.SYSTEM);
	public static final IMouseCursor HELP = new MouseCursor(MouseCursorName.HELP, MouseCursorType.SYSTEM);
	public static final IMouseCursor MOVE = new MouseCursor(MouseCursorName.MOVE, MouseCursorType.SYSTEM);
	public static final IMouseCursor N_RESIZE = new MouseCursor(MouseCursorName.N_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NE_RESIZE = new MouseCursor(MouseCursorName.NE_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NESW_RESIZE = new MouseCursor(MouseCursorName.NESW_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NS_RESIZE = new MouseCursor(MouseCursorName.NS_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NW_RESIZE = new MouseCursor(MouseCursorName.NW_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NWSE_RESIZE = new MouseCursor(MouseCursorName.NWSE_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor NO_DROP = new MouseCursor(MouseCursorName.NO_DROP, MouseCursorType.SYSTEM);
	public static final IMouseCursor NOT_ALLOWED = new MouseCursor(MouseCursorName.NOT_ALLOWED, MouseCursorType.SYSTEM);
	public static final IMouseCursor POINTER = new MouseCursor(MouseCursorName.POINTER, MouseCursorType.SYSTEM);
	public static final IMouseCursor PROGRESS = new MouseCursor(MouseCursorName.PROGRESS, MouseCursorType.SYSTEM);
	public static final IMouseCursor ROW_RESIZE = new MouseCursor(MouseCursorName.ROW_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor S_RESIZE = new MouseCursor(MouseCursorName.S_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor SE_RESIZE = new MouseCursor(MouseCursorName.SE_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor SW_RESIZE = new MouseCursor(MouseCursorName.SW_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor TEXT = new MouseCursor(MouseCursorName.TEXT, MouseCursorType.SYSTEM);
	public static final IMouseCursor W_RESIZE = new MouseCursor(MouseCursorName.W_RESIZE, MouseCursorType.SYSTEM);
	public static final IMouseCursor WAIT = new MouseCursor(MouseCursorName.WAIT, MouseCursorType.SYSTEM);
	public static final IMouseCursor ZOOM_IN = new MouseCursor(MouseCursorName.ZOOM_IN, MouseCursorType.SYSTEM);
	public static final IMouseCursor ZOOM_OUT = new MouseCursor(MouseCursorName.ZOOM_OUT, MouseCursorType.SYSTEM);
	
	
	private String mouseCursorName;
	private String mouseCursorImagePath;
	private String mouseCursorType;
	

	
	private MouseCursor(String mouseCursorNameOrImagePath, String mouseCursorType) {
		if(mouseCursorType.equalsIgnoreCase(MouseCursorType.SYSTEM)) {
			this.mouseCursorName = mouseCursorNameOrImagePath;
			this.mouseCursorType = MouseCursorType.SYSTEM;
		}else if(mouseCursorType.equalsIgnoreCase(MouseCursorType.IMAGE)) {
			this.mouseCursorImagePath = mouseCursorNameOrImagePath;
			this.mouseCursorType = MouseCursorType.IMAGE;
		}else {
			this.mouseCursorName = MouseCursorName.AUTO;
			this.mouseCursorType = MouseCursorType.SYSTEM;
		}
		
		
	}
	
	public String getMouseCursorType() {
		return this.mouseCursorType;
	}
	
	public String getMouseCursorName() {
		return this.mouseCursorName;
	}
	
	public String getMouseCursorImagePath() {
		return this.mouseCursorImagePath;
	}
	
	public static IMouseCursor setImagePath(String mouseCursorImagePath) {
		IMouseCursor mouseCursor = new MouseCursor(mouseCursorImagePath, MouseCursorType.IMAGE);
		return mouseCursor;
	}
	
	
	

}