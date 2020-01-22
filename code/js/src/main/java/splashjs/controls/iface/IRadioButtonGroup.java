package splashjs.controls.iface;

import splashjs.lang.iface.ISplashObject;

public interface IRadioButtonGroup {

	public String getName();
	public int getNumRadioButtons();
	public ISplashObject getSelectedData();
	
	public void setSelection(IRadioButton radioButton);
	public IRadioButton getSelection();

}