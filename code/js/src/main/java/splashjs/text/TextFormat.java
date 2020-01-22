package splashjs.text;

import splashjs.text.iface.IFont;
import splashjs.text.iface.ITextFormat;

public class TextFormat implements ITextFormat {

	public IFont font;
	public String fontStyle;
	private String fontWeight;
	public int fontSize;

	public TextFormat() {
		
	}
	
	public TextFormat(IFont font, String fontStyle, String fontWeight, int fontSize) {
		this.font = font;
		this.fontStyle = fontStyle;
		this.fontWeight = fontWeight;
		this.fontSize = fontSize;
	}
	
	public void setFont(IFont font) {
		this.font = font;
	}
	public IFont getFont() {
		return this.font;
	}
	
	public void setFontStyle(String fontStyle) {
		this.fontStyle = fontStyle;
	}
	public String getFontStyle() {
		return this.fontStyle;
	}
	
	public void setFontWeight(String fontWeight) {
		this.fontWeight = fontWeight;
	}
	public String getFontWeight() {
		return this.fontWeight;
	}
	
	public void setFontSize(int fontSize) {
		this.fontSize = fontSize;
	}
	public int getFontSize() {
		return this.fontSize;
	}
}