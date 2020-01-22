package splashjs.display;

import splashjs.display.desktop.iface.INativeWindow;

public class NativeWindowInitOptions {
	
	private boolean maximizable = true;
	private boolean minimizable = true;
	private INativeWindow owner = null;
	private String renderMode = null;
	private boolean resizable = true;
	private String systemChrome = NativeWindowSystemChrome.STANDARD;
	private boolean transparent = false;;
	private String type = NativeWindowType.NORMAL;
	
	public NativeWindowInitOptions() {
		
	}
	
	public void setMaximizable(boolean maximizable) {
		this.maximizable = maximizable;
	}
	
	public boolean getMaximizable() {
		return this.maximizable;
	}
	
	public void setMinizable(boolean minimizable) {
		this.minimizable = minimizable;
	}
	
	public void setOwner(INativeWindow owner) {
		this.owner = owner;
	}
	
	public INativeWindow getOwner() {
		return this.owner;
	}

}