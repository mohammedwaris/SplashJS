package splashjs.text.iface;


public interface ITextFormat {

	public void setFont(IFont font);
	public IFont getFont();
	
	public void setFontStyle(String fontStyle);
	public String getFontStyle();
	
	public void setFontWeight(String fontWeight);
	public String getFontWeight();
	
	public void setFontSize(int fontSize);
	public int getFontSize();

}