package splashjs.display.iface;



public interface ISimpleButton extends IInteractiveObject {

	public void setUpState(IDisplayObject upState);
	public IDisplayObject getUpState();
	
	public void setDownState(IDisplayObject downState);
	public IDisplayObject getDownState();
	
	public void setOverState(IDisplayObject OverState);
	public IDisplayObject getOverState();
	
	public void setDisabledState(IDisplayObject disabledState);
	public IDisplayObject getDisabledState();
	
	public void setEnabled(boolean enabled);
	public boolean getEnabled();
	
	public boolean isEnabled();

}