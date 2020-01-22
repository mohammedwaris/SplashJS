package splashjs.display.desktop;

import splashjs.display.desktop.iface.INativeWindow;

public class Stage extends splashjs.display.Stage implements splashjs.display.desktop.iface.IStage {
	
	INativeWindow nativeWindow;
	
	public Stage(String stageOwnerName, int width, int height) {
		super(stageOwnerName, width, height);
	}
	
	public void setNativeWindow(INativeWindow nativeWindow) {
		this.nativeWindow = nativeWindow;
	}
	public INativeWindow getNativeWindow() {
		return this.nativeWindow;
	}
}