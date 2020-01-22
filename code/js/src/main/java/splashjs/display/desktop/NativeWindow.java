package splashjs.display;


import splashjs.display.desktop.iface.INativeWindow;
import splashjs.display.desktop.stubs.NativeWindowStub;

public class NativeWindow implements INativeWindow {

	private NativeWindowInitOptions initOptions;
	private NativeWindowStub nativeWindowStub;
	
	public NativeWindow() {
		this(new NativeWindowInitOptions());
	}
	
	public NativeWindow(NativeWindowInitOptions initOptions) {
		this.initOptions = initOptions;
		this.nativeWindowStub = NativeWindowStub.newInstance();
	}
	
	public void activate() {
		this.nativeWindowStub.show();
	}
	
	public Object getStage() {
		return this.nativeWindowStub.getStage();
	}
}