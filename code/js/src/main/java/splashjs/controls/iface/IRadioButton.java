package splashjs.controls.iface;

import splashjs.lang.iface.ISplashObject;

public interface IRadioButton extends IControl {

	public void setValue(ISplashObject value);
	public ISplashObject getValue();
	public IRadioButtonGroup getGroup();
	public void setGroup(IRadioButtonGroup group);
	public void setSelected(boolean selected);
	public boolean getSelected();
	public boolean isSelected();
}