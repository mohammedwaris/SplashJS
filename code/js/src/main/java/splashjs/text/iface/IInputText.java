package splashjs.text.iface;

import splashjs.utils.iface.IColor;

public interface IInputText extends IText {
	
	public void setPlaceholder(String placeholder);
	public String getPlaceholder();
	public void setBackgroundColor(IColor backgroundColor);
	public IColor getBackgroundColor();
	public void setBorderColor(IColor borderColor);
	public IColor getBorderColor();


}