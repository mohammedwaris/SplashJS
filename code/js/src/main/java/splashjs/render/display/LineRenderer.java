package splashjs.render.display;

import def.dom.SVGElement;
import def.dom.SVGLineElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.ILine;
import splashjs.events.iface.IEventDispatcher;

public class LineRenderer extends ShapeRenderer {
	
	public LineRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement((SVGElement) document.createElementNS(SVGNS, "svg")));
		create();
	}
	
	

	
	@Override
	public void create() {
		super.childSVGElement = (SVGLineElement) document.createElementNS(SVGNS, "line");
		setLineAttributes();
		super.getSVGElement().appendChild(super.childSVGElement);
	}
	
	public void update() {
		if(super.childSVGElement != null) {
			setLineAttributes();
		}
	}
	
	private void setLineAttributes() {
		super.childSVGElement.setAttributeNS(null, "x1", "0");
		super.childSVGElement.setAttributeNS(null, "y1", getSVGLineY1Text());
		super.childSVGElement.setAttributeNS(null, "x2", getSVGLineX2Text());
		super.childSVGElement.setAttributeNS(null, "y2", getSVGLineY2Text());
		//childSVGElement.setAttributeNS(null, "height", getHeight());
		//childSVGElement.setAttributeNS(null, "width", getWidth());
		
		childSVGElement.setAttributeNS(null, "stroke", getSVGShapeStrokeColorNameText());
		childSVGElement.setAttributeNS(null, "stroke-width", getSVGShapeStrokeWidthText());
		
		getSVGElement().setAttributeNS(null, "height", getSVGLineHeightText());
		getSVGElement().setAttributeNS(null, "width", getSVGLineWidthText());
		 
		((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getWidthAsString()));
		((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getHeightAsString()));
	}
	
	public int getOriginalWidth() {
		return Integer.parseInt(getSVGLineWidthText());
	}
	
	public int getOriginalHeight() {
		return Integer.parseInt(getSVGLineHeightText());
	}
	

	/*
	private String getX2AsString() {
		String x2 = "0";
		int length = ((ILine) super.getRenderObject()).getLength()-1;
		x2 = length + "";
		return x2;
	}
	
	private String getY2AsString() {
		return getY1AsString();
	}
	
	private String getY1AsString() {
		String y1 = Integer.parseInt(getStrokeWidthAsString())/2 + "";
		return y1;
	}
	

	*/
	private String getWidthAsString() {
		String width = "0";
		width = ((ILine) super.getRenderObject()).getLength() + "";
		return width;
	}
	
	private String getHeightAsString() {
		String height = "0";
		height = getStrokeWidthAsString();
		return height;
	}
		
	
	

}