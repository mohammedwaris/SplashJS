package splashjs.text.iface;


import splashjs.utils.iface.IColor;
import splashjs.display.iface.IDisplayObject;


public interface IText extends IDisplayObject {
	
	public void setText(String text);
	public String getText();
	
	public void setFontSize(int size);
	public int getFontSize();
	
	public void setFontStyle(String fontStyle);
	public String getFontStyle();
	
	public void setFontWeight(String fontWeight);
	public String getFontWeight();
	
	public void setFont(IFont font);
	public IFont getFont();
	
	public void setColor(IColor color);
	public IColor getColor();
	
	public void setSelectable(boolean selectable);
	public boolean isSelectable();
	
	public void setTextFormat(ITextFormat textFormat);
	public ITextFormat getTextFormat();
	
}