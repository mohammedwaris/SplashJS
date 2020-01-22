package splashjs.controls;

import splashjs.controls.iface.IControl;
import splashjs.display.InteractiveObject;

public abstract class Control extends InteractiveObject implements IControl {

	private boolean enabled;
	
	public Control(String id) {
		super(id);
	}
	
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	public boolean getEnabled() {
		return this.enabled;
	}
	
	public boolean isEnabled() {
		return getEnabled();
	}

}