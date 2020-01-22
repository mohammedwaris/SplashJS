package splashjs.render.display;

import def.dom.SVGElement;


import splashjs.utils.ColorName;
import splashjs.utils.ColorType;
import splashjs.utils.iface.IColor;
import splashjs.display.iface.IShape;
import splashjs.render.display.iface.IShapeRenderer;

public abstract class ShapeRenderer extends InteractiveObjectRenderer implements IShapeRenderer {

	
	protected SVGElement childSVGElement;
	
	
	
	

	/*
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DRAW)) {
		//	draw();
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.UPDATE_DRAW)) {
		//	update();
		}
	}*/

	public String getStrokeColorNameAsString() {
		
		String strokeColorName = ColorName.BLACK;
		IColor strokeColor = ((IShape) super.getRenderObject()).getStrokeColor();
		if(strokeColor.getColorType() == ColorType.NAME)
			strokeColorName = strokeColor.getColorName();
		else if(strokeColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			strokeColorName = strokeColor.getHEX();
		
		return strokeColorName;
	}
	
	public String getFillColorNameAsString() {
		
		String fillColorName = ColorName.BLACK;
		IColor fillColor = ((IShape) super.getRenderObject()).getFillColor();
		if(fillColor.getColorType().equalsIgnoreCase(ColorType.NAME))
			fillColorName = fillColor.getColorName();
		else if(fillColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			fillColorName = fillColor.getHEX();
		
		return fillColorName;
	}
	
	public String getStrokeWidthAsString() {
		String strokeWidth = "1";
		strokeWidth = ((IShape) super.getRenderObject()).getStrokeWidth() + "";
		return strokeWidth;
	}
	
	public SVGElement getSVGElement() {
		return (SVGElement) super.getDOMElement();
	}
	
	public int getOriginalWidth() {
		return (int)super.getDOMElement().clientWidth;
	}
	
	public int getOriginalHeight() {
		return (int)super.getDOMElement().clientHeight;
	}

}