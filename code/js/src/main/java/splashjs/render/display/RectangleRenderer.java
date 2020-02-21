package splashjs.render.display;

import def.dom.SVGElement;
import def.dom.SVGRectElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;

import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IRectangle;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.iface.IRectangleRenderer;

public class RectangleRenderer extends ShapeRenderer implements IRectangleRenderer{
	
	public RectangleRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement((SVGElement) document.createElementNS(SVGNS, "svg")));
	}
	
	public void create() {
		super.childSVGElement = (SVGRectElement) document.createElementNS(SVGNS, "rect");
		setRectangleAttributes();
		getSVGElement().appendChild(super.childSVGElement);
	}
	
	public void update() {
		setRectangleAttributes();
	}
	
	private void setRectangleAttributes() {
		super.childSVGElement.setAttributeNS(null, "x", "0"); //getStrokeWidthAsString());
		super.childSVGElement.setAttributeNS(null, "y", "0");//getStrokeWidthAsString());
		super.childSVGElement.setAttributeNS(null, "rx", getCornerRadiusXAsString());
		super.childSVGElement.setAttributeNS(null, "ry", getCornerRadiusYAsString());
		super.childSVGElement.setAttributeNS(null, "height", getRectangleHeightAsString());
		super.childSVGElement.setAttributeNS(null, "width", getRectangleWidthAsString());
		super.childSVGElement.setAttributeNS(null, "stroke", getStrokeColorNameAsString());
		super.childSVGElement.setAttributeNS(null, "fill", getFillColorNameAsString());
		super.childSVGElement.setAttributeNS(null, "stroke-width", getStrokeWidthAsString());
		getSVGElement().setAttributeNS(null, "height", getRectangleHeightAsString());
		getSVGElement().setAttributeNS(null, "width", getRectangleWidthAsString());
		((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getRectangleWidthAsString()));
		((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getRectangleHeightAsString()));
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
	}*/
	
	
	private String getCornerRadiusXAsString() {
		String cornerRadiusX = "0";
		cornerRadiusX = ((IRectangle) super.getRenderObject()).getCornerRadiusX() + "";
		return cornerRadiusX;
	}
	
	private String getCornerRadiusYAsString() {
		String cornerRadiusY = "0";
		cornerRadiusY = ((IRectangle) super.getRenderObject()).getCornerRadiusY() + "";
		return cornerRadiusY;
	}
	
	
	private String getRectangleWidthAsString() {
		String width = "0";
		width = ((IRectangle) super.getRenderObject()).getRectangleWidth() + "";
		//width = (Integer.parseInt(width) + Integer.parseInt(getStrokeWidth())) + ""; //Math.ceil( (double)(Double.parseDouble(getCenterX())*2) ) + "";
		return width;
	}
	
	private String getRectangleHeightAsString() {
		String height = "0";
		height = ((IRectangle) super.getRenderObject()).getRectangleHeight() + "";
		//height = (Integer.parseInt(height) + Integer.parseInt(getStrokeWidth())) + ""; //Math.ceil( (double)(Double.parseDouble(getCenterY())*2) ) + "";
		return height;
	}
		
	
	public void setCornerRadiusX() {
		super.childSVGElement.setAttributeNS(null, "rx", getCornerRadiusXAsString());
	}
	
	public void setCorcnerRadiusY() {
		super.childSVGElement.setAttributeNS(null, "ry", getCornerRadiusYAsString());
	}
	
	public void setRectangleWidth() {
		super.childSVGElement.setAttributeNS(null, "width", getRectangleWidthAsString());
	}
	
	public void setRectangleHeight() {
		super.childSVGElement.setAttributeNS(null, "height", getRectangleHeightAsString());
	}

}