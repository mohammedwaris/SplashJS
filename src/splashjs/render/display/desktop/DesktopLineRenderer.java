package flashjs.render.display.desktop;

import org.w3c.dom.html.*;
import org.w3c.dom.*;

import flashjs.display.*;
import flashjs.render.desktop.*;
import flashjs.render.*;
import flashjs.utils.*;
import flashjs.events.*;
import flashjs.render.display.*;

public class DesktopLineRenderer extends DesktopShapeRenderer implements ILineRenderer {
	
	public DesktopLineRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);

		String js = "var " + super.getRenderObjectID() + " = document.createElementNS('" + SVGNS + "', \"svg\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		super.setRenderElement(new DesktopRenderElement((Element)webEngine.executeScript(js)));
		//super.renderElement = new DesktopRenderElement((SVGElement) document.createElementNS(SVGNS, "svg"));
	}
	
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		

	}
	
	public void create() {
		String childSVGElement = super.getRenderObjectID() + "child";
		String js = "var " + childSVGElement + " = document.createElementNS('" + SVGNS + "', \"line\");";
			   js += childSVGElement + ".id = '" + super.getRenderObjectID() + "';"; 

		js += childSVGElement + ".setAttributeNS(null, \"x1\", \"0\");";
		js += childSVGElement + ".setAttributeNS(null, \"y1\", " + getSVGLineY1Text() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"x2\", " + getSVGLineX2Text() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"y2\", " + getSVGLineY2Text() + ");";
		//js += childSVGElement + ".setAttributeNS(null, \"height\", " + getHeight() + ");";
		//js += childSVGElement + ".setAttributeNS(null, \"width\", " + getWidth() + ");";
		js += childSVGElement + ".setAttributeNS(null, \"stroke\", \"" + getSVGShapeStrokeColorNameText() + "\");";
		js += childSVGElement + ".setAttributeNS(null, \"stroke-width\", " + getSVGShapeStrokeWidthText() + ");";
		js += super.getRenderObjectID() + ".setAttributeNS(null, \"height\", " + getSVGLineHeightText() + ");";
		js += super.getRenderObjectID() + ".setAttributeNS(null, \"width\", " + getSVGLineWidthText() + ");";
		//((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getWidth()));
		//((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getHeight()));
		js += super.getRenderObjectID() + ".appendChild(" + childSVGElement + ");";
		
		webEngine.executeScript(js);
	}
	
	public void update() {
		if(super.childSVGElement != null) {
			setLineAttributes();
		}
	}
	
	public int getOriginalWidth() {
		return (int)Double.parseDouble(getSVGLineWidthText());
	}
	
	public int getOriginalHeight() {
		return (int)Double.parseDouble(getSVGLineHeightText());
	}
	
	private void setLineAttributes() {
		/*
		super.childSVGElement.setAttributeNS(null, "x1", "0");
		super.childSVGElement.setAttributeNS(null, "y1", "0");
		super.childSVGElement.setAttributeNS(null, "x2", getX2());
		super.childSVGElement.setAttributeNS(null, "y2", getY2());
		childSVGElement.setAttributeNS(null, "height", getHeight());
		childSVGElement.setAttributeNS(null, "width", getWidth());
		childSVGElement.setAttributeNS(null, "stroke", getStrokeColorName());
		childSVGElement.setAttributeNS(null, "stroke-width", getStrokeWidth());
		getSVGElement().setAttributeNS(null, "height", getHeight());
		getSVGElement().setAttributeNS(null, "width", getWidth());
		((IDisplayObject)super.getRenderObject()).setWidth(Integer.parseInt(getWidth()));
		((IDisplayObject)super.getRenderObject()).setHeight(Integer.parseInt(getHeight()));*/
	}
	

	
	
		
	
	

}