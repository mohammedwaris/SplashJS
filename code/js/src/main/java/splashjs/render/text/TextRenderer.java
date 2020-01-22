package splashjs.render.text;

import def.dom.HTMLElement;


import splashjs.render.display.InteractiveObjectRenderer;
import splashjs.utils.iface.IColor;
import splashjs.text.iface.IText;
import splashjs.text.iface.ITextFormat;
import splashjs.text.iface.IFont;
import splashjs.utils.ColorName;
import splashjs.utils.ColorType;
import splashjs.render.text.iface.ITextRenderer;


public abstract class TextRenderer extends InteractiveObjectRenderer implements ITextRenderer {

	@Override
	public void setColor() {
		((HTMLElement)getDOMElement()).style.color = getCSSColorText();
	}
	
	public void setText() {
	}
	
	public void setFont() {
		IText text = (IText)super.getRenderObject();
		IFont font = text.getFont();
		if(font != null) {
			String fontID = font.getFontID();
			((HTMLElement)getDOMElement()).style.fontFamily = fontID;
		}
	}
	
	public void setFontSize() {
		IText text = (IText)super.getRenderObject();
		int fontSize = text.getFontSize();
		if(fontSize >= 0)
			((HTMLElement)getDOMElement()).style.fontSize = fontSize + UNIT;
	}
	
	public void setFontWeight() {
		IText text = (IText)super.getRenderObject();
		String fontWeight = text.getFontWeight();
		if(fontWeight != null)
			((HTMLElement)getDOMElement()).style.fontWeight = fontWeight;
	}
	
	public void setFontStyle() {
		IText text = (IText)super.getRenderObject();
		String fontStyle = text.getFontStyle();
		if(fontStyle != null)
			((HTMLElement)getDOMElement()).style.fontStyle = fontStyle;
	}
	
	public void setSelectable() {
	}
	
	public void setTextFormat() {
		IText text = (IText) super.getRenderObject();
		ITextFormat textFormat = (ITextFormat)text.getTextFormat();
		IFont font = textFormat.getFont();
		String fontWeight = textFormat.getFontWeight();
		String fontStyle = textFormat.getFontStyle();
		int fontSize = textFormat.getFontSize();
		if(font != null) {
			String fontID = font.getFontID();
			((HTMLElement)getDOMElement()).style.fontFamily = fontID;
		}
		if(fontWeight != null){
			((HTMLElement)getDOMElement()).style.fontWeight = fontWeight;
		}
		if(fontStyle != null) {
			((HTMLElement)getDOMElement()).style.fontStyle = fontStyle;
		}
		if(fontSize >= 0) {
			((HTMLElement)getDOMElement()).style.fontSize = fontSize + UNIT;
		}
	}
	
	
	public int getClientWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getClientHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}
	
	private String getCSSColorText() {
		
		String colorName = ColorName.BLACK;
		IColor color = ((IText) super.getRenderObject()).getColor();
		if(color.getColorType().equalsIgnoreCase(ColorType.NAME))
			colorName = color.getColorName();
		else if(color.getColorType().equalsIgnoreCase(ColorType.HEX))
			colorName = color.getHEX();
		
		return colorName;
	}

}