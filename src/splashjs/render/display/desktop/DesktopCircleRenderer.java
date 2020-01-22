package flashjs.render.display.desktop;


import org.w3c.dom.html.*;
import org.w3c.dom.*;

import flashjs.display.*;
import flashjs.render.desktop.*;
import flashjs.render.*;
import flashjs.utils.*;
import flashjs.events.*;
import flashjs.render.display.*;

public class DesktopCircleRenderer extends DesktopInteractiveObjectRenderer implements ICircleRenderer {
	
	public DesktopCircleRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);

		String js = "var " + super.getRenderObjectID() + " = document.createElementNS('" + SVGNS + "', \"svg\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		super.setRenderElement(new DesktopRenderElement((Element)webEngine.executeScript(js)));
		//super.renderElement = new BrowserRenderElement((SVGElement) document.createElementNS(SVGNS, "svg"));
	}
	
	public void create() {
		String childSVGElement = super.getRenderObjectID() + "child";
		String js = "var " + childSVGElement + " = document.createElementNS('" + SVGNS + "', \"circle\");";
			   js += childSVGElement + ".id = '" + super.getRenderObjectID() + "';"; 
		//webEngine.executeScript(js);
		
		js += childSVGElement + ".setAttributeNS(null, \"r\", " + getSVGCircleRadiusText() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"cx\", " + getSVGCircleCenterXText() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"cy\", " + getSVGCircleCenterYText() + ");";
		//js += childSVGElement + ".setAttributeNS(null, \"height\", " + getHeight() + ");";
		//js += childSVGElement + ".setAttributeNS(null, \"width\", " + getWidth() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"stroke\", \"" + getSVGShapeStrokeColorNameText() + "\");";
		js += childSVGElement + ".setAttributeNS(null, \"fill\", \"" + getSVGShapeFillColorNameText() + "\");";
		js += childSVGElement + ".setAttributeNS(null, \"stroke-width\", " + getSVGShapeStrokeWidthText() + ");";
		js += super.getRenderObjectID() + ".setAttributeNS(null, \"height\", " + getSVGCircleHeightText() + ");";
		js += super.getRenderObjectID() + ".setAttributeNS(null, \"width\", " + getSVGCircleWidthText() + ");";
		//((IDisplayObject)super.getRenderObject()).setWidth();
		//((IDisplayObject)super.getRenderObject()).setHeight((int)Double.parseDouble(getHeight()));
		js += super.getRenderObjectID() + ".appendChild(" + childSVGElement + ");";
		webEngine.executeScript(js);
	}
	
	public void setRadius() {
	}
	
	private void setAttributes() {
	}
	
	public int getOriginalWidth() {
		return (int)Double.parseDouble(getSVGCircleWidthText());
	}
	
	public int getOriginalHeight() {
		return (int)Double.parseDouble(getSVGCircleHeightText());
	}
	
	/*
	public void setRadius(int radius) {
		if(childSVGElement != null) {
			SVGCircleElement circle = (SVGCircleElement)childSVGElement;
			circle.setAttributeNS(null, "r", radius + "");
			circle.setAttributeNS(null, "cx", getCenterX(radius));
			circle.setAttributeNS(null, "cy", getCenterY(radius));
			circle.setAttributeNS(null, "height", getHeight(radius));
			circle.setAttributeNS(null, "width", getWidth(radius));
			getSVGElement().setAttributeNS(null, "height", getHeight(radius));
			getSVGElement().setAttributeNS(null, "width", getWidth(radius));
			((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getWidth(radius)));
			((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getHeight(radius)));
		}
	}
	
	private String getStrokeColorName() {
		
		String strokeColorName = ColorName.BLACK;
		Color strokeColor = ((IShape) super.getRenderObject()).getStrokeColor();
		if(strokeColor.getColorType() == ColorType.NAME)
			strokeColorName = strokeColor.getColorName();
		else if(strokeColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			strokeColorName = strokeColor.getHEX();
		
		return strokeColorName;
	}
	
	private String getFillColorName() {
		
		String fillColorName = ColorName.BLACK;
		Color fillColor = ((IShape) super.getRenderObject()).getFillColor();
		if(fillColor.getColorType().equalsIgnoreCase(ColorType.NAME))
			fillColorName = fillColor.getColorName();
		else if(fillColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			fillColorName = fillColor.getHEX();
		
		return fillColorName;
	}
	
	private String getStrokeWidth() {
		String strokeWidth = "1";
		strokeWidth = ((IShape) super.getRenderObject()).getStrokeWidth() + "";
		return strokeWidth;
	}*/
	
	
	
	
	
	
		
	
	

}