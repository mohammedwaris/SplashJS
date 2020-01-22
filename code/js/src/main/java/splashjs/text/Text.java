
package splashjs.text;


import splashjs.display.InteractiveObject;
import splashjs.render.text.iface.ITextRenderer;
import splashjs.text.iface.IText;
import splashjs.text.iface.ITextFormat;
import splashjs.text.iface.IFont;
import splashjs.utils.iface.IColor;
import splashjs.utils.Color;


public abstract class Text extends InteractiveObject implements IText {
	
	private String text = "";
	private int fontSize = 12;
	private String fontStyle = FontStyle.NORMAL;
	private String fontWeight = FontWeight.NORMAL;
	private IColor color = Color.BLACK;
	private boolean selectable = true;
	private ITextFormat textFormat = null;
	
	private IFont font;
	
	public Text(String id) {
		super(id);

	}
	
	public void setText(String text) {
		this.text = text;
		((ITextRenderer)super.getRenderer()).setText();
	}
	
	public String getText() {
		return text;
	}
	
	public void setFontSize(int fontSize) {
		this.fontSize = fontSize;
		((ITextRenderer)super.getRenderer()).setFontSize();
	}
	
	public int getFontSize() {
		return fontSize;
	}
	
	public void setFontStyle(String fontStyle) {
		this.fontStyle = fontStyle;
		((ITextRenderer)super.getRenderer()).setFontStyle();
	}
	
	public String getFontStyle() {
		return fontStyle;
	}
	
	public void setFontWeight(String fontWeight) {
		this.fontWeight = fontWeight;
		((ITextRenderer)super.getRenderer()).setFontWeight();
	}
	
	public String getFontWeight() {
		return fontWeight;
	}
	
	public void setColor(IColor color) {
		this.color = color;
		((ITextRenderer)super.getRenderer()).setColor();
	}
	
	public IColor getColor() {
		return this.color;
	}
	
	public void setFont(IFont font) {
		this.font = font;
		((ITextRenderer)super.getRenderer()).setFont();
	}
	
	public IFont getFont() {
		return this.font;
	}
	
	public void setTextFormat(ITextFormat textFormat) {
		this.textFormat = textFormat;
		((ITextRenderer)super.getRenderer()).setTextFormat();
	}
	public ITextFormat getTextFormat() {
		return this.textFormat;
	}
	
	
	public void setSelectable(boolean selectable) {
		this.selectable = selectable;
		((ITextRenderer)super.getRenderer()).setSelectable();
	}
	
	public boolean isSelectable() {
		return selectable;
	}
	
	
	public void render() {
		
		super.render();
		
		((ITextRenderer)super.getRenderer()).setText();
		((ITextRenderer)super.getRenderer()).setSelectable();
		((ITextRenderer)super.getRenderer()).setColor();
		((ITextRenderer)super.getRenderer()).setFont();
		((ITextRenderer)super.getRenderer()).setFontSize();
		((ITextRenderer)super.getRenderer()).setFontStyle();
		((ITextRenderer)super.getRenderer()).setFontWeight();
		((ITextRenderer)super.getRenderer()).setBorder("0px dotted blue");
		

	}
}