package splashjs.render.display.iface;

public interface ISimpleButtonRenderer extends IInteractiveObjectRenderer {

	public void setUpState();
	public void setDownState();
	public void setOverState();
	
	public void setDisabledState();
	public void setEnabled();
}