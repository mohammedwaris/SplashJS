package splashjs.render.text.iface;

import splashjs.render.display.iface.IInteractiveObjectRenderer;

public interface ITextRenderer extends IInteractiveObjectRenderer {

	public void setColor();
	public void setFont();
	public void setFontSize();
	public void setFontWeight();
	public void setFontStyle();
	public void setText();
	public void setSelectable();
	
	public void setTextFormat();

}