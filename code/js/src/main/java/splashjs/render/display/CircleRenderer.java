package splashjs.render.display;

import def.dom.SVGElement;
import def.dom.SVGCircleElement;
import static def.dom.Globals.document;



import splashjs.render.RenderElement;



import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.iface.ICircleRenderer;

public class CircleRenderer extends ShapeRenderer implements ICircleRenderer {
	
	public CircleRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement((SVGElement) document.createElementNS(SVGNS, "svg")));
		create();
	}
	
	public void create() {
		super.childSVGElement = (SVGCircleElement) document.createElementNS(SVGNS, "circle");
		setCircleAttributes();
		getSVGElement().appendChild(super.childSVGElement);
	}
	
	public void update() {
		setCircleAttributes();
	}
	
	private void setCircleAttributes() {
		super.childSVGElement.setAttributeNS(null, "r", getSVGCircleRadiusText());
		super.childSVGElement.setAttributeNS(null, "cx", getSVGCircleCenterXText());
		super.childSVGElement.setAttributeNS(null, "cy", getSVGCircleCenterYText());
		//super.childSVGElement.setAttributeNS(null, "height", getHeightAsString());
		//super.childSVGElement.setAttributeNS(null, "width", getWidthAsString());
		super.childSVGElement.setAttributeNS(null, "stroke", getSVGShapeStrokeColorNameText());
		super.childSVGElement.setAttributeNS(null, "fill", getSVGShapeFillColorNameText());
		super.childSVGElement.setAttributeNS(null, "stroke-width", getSVGShapeStrokeWidthText());
		getSVGElement().setAttributeNS(null, "height", getSVGCircleHeightText());
		getSVGElement().setAttributeNS(null, "width", getSVGCircleWidthText());
		//((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getWidthAsString()));
		//((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getHeightAsString()));
	}
	
	/*
	private String getRadiusAsString() {
		String radius = "10";
		radius = ((ICircle) super.getRenderObject()).getRadius() + "";
		return radius;
	}
	
	private String getCenterXAsString() {
		String cx = "0";
		int strokeWidth = ((IShape) super.getRenderObject()).getStrokeWidth();
		int radius = ((ICircle) super.getRenderObject()).getRadius();
		cx = Math.ceil( ((double)(radius + (double)strokeWidth/2)) ) + "";
		return cx;
	}
	
	private String getCenterYAsString() {
		String cy = "0";
		int strokeWidth = ((IShape) super.getRenderObject()).getStrokeWidth();
		int radius = ((ICircle) super.getRenderObject()).getRadius();
		cy = Math.ceil( ((double)(radius + (double)strokeWidth/2)) ) + "";
		return cy;
	}
	
	private String getWidthAsString() {
		String width = "0";
		int radius = ((ICircle) super.getRenderObject()).getRadius();
		int strokeWidth = ((ICircle) super.getRenderObject()).getStrokeWidth();
		width = (radius * 2) + (strokeWidth * 2) + "";
		return width;
	}
	
	private String getHeightAsString() {
		String height = "0";
		int radius = ((ICircle) super.getRenderObject()).getRadius();
		int strokeWidth = ((ICircle) super.getRenderObject()).getStrokeWidth();
		height = (radius * 2) + (strokeWidth * 2) + "";
		return height;
	}*/
	
	@Override
	public void setRadius() {
		super.childSVGElement.setAttributeNS(null, "r", getSVGCircleRadiusText());
		super.childSVGElement.setAttributeNS(null, "cx", getSVGCircleCenterXText());
		super.childSVGElement.setAttributeNS(null, "cy", getSVGCircleCenterYText());
		getSVGElement().setAttributeNS(null, "height",  getSVGCircleHeightText());
		getSVGElement().setAttributeNS(null, "width",  getSVGCircleWidthText());
	}
	
	public int getOriginalWidth() {
		return Integer.parseInt(getSVGCircleWidthText());
	}
	
	public int getOriginalHeight() {
		return Integer.parseInt(getSVGCircleHeightText());
	}
		
	
	

}