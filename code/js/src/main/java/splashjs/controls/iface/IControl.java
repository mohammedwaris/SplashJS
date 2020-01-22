package splashjs.controls.iface;

import splashjs.display.iface.IInteractiveObject;

public interface IControl extends IInteractiveObject {

	public void setEnabled(boolean enabled);
	public boolean getEnabled();
	public boolean isEnabled();
	
}