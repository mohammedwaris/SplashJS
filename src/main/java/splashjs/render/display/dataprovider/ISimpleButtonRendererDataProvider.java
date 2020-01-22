package splashjs.render.display.dataprovider;

import splashjs.display.iface.*;

public interface ISimpleButtonRendererDataProvider extends IInteractiveObjectRendererDataProvider  {

	public ISprite getContainer();
	public void setUpState();
	public void setDownState();
	public void setOverState();
	public void setDisabledState();
	public void setEnabled();

}