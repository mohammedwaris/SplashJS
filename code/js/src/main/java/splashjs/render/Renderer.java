package splashjs.render;

import def.dom.Element;
import def.dom.HTMLElement;
import static def.dom.Globals.document;


import java.util.Map;
import java.util.HashMap;


import splashjs.events.Event;
import splashjs.utils.ColorType;
import splashjs.utils.ColorName;
import splashjs.utils.iface.IColor;
import splashjs.events.MouseEvent;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IShape;
import splashjs.display.iface.ILine;
import splashjs.display.iface.ICircle;
import splashjs.render.iface.IRenderer;
import splashjs.render.iface.IRenderElement;
import splashjs.events.iface.IEventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IMouseEvent;
import splashjs.filters.iface.IDropShadowFilter;
import splashjs.filters.iface.IBlurFilter;
import splashjs.filters.iface.IFilter;
import splashjs.filters.FilterType;
import splashjs.ui.MouseCursorType;
import splashjs.ui.MouseCursor;
import splashjs.ui.iface.IMouseCursor;


public abstract class Renderer implements IRenderer {
	
	protected final String SVGNS = "http://www.w3.org/2000/svg";
	protected final String UNIT = "px";
	protected final String ENDLINE_CHAR = "\r\n";
	protected final String IMAGES_FOLDER_PATH = "images/";
	protected final String SOUNDS_FOLDER_PATH = "sounds/";
	protected final String VIDEOS_FOLDER_PATH = "videos/";
	
	protected String renderObjectID;
	protected IEventDispatcher renderObject;
	protected IRenderElement renderElement;
	//protected IEventDispatcherRendererDataProvider dataProvider;
	
	protected void setRenderObject(IEventDispatcher renderObject) {
		this.renderObject = renderObject;
		this.renderObjectID = renderObject.getUniqueID();
	}
	
	/*
	protected void setDataProvider(IEventDispatcherRendererDataProvider dataProvider) {
		this.dataProvider = dataProvider;
	}
	
	protected IEventDispatcherRendererDataProvider getDataProvider() {
		return this.dataProvider;
	}*/
	
	public String getRenderObjectID() {
		return this.renderObjectID;
	}
	
	public IEventDispatcher getRenderObject() {
		return this.renderObject;
	}

	public void setRenderElement(IRenderElement renderElement) {
		this.renderElement = renderElement;
		createEventListeners();
	}
	
	public IRenderElement getRenderElement() {
		return renderElement;
	}
	
	public void create() {
	}
	
	public void update() {
	}
	
	public void refresh() {
	}
	
	public Element getDOMElement() {
		Element element = renderElement.getDOMElement();
		return element;
	}
	public void createEventListeners() {
		
		HTMLElement htmlElement = (HTMLElement) getDOMElement();

		htmlElement.addEventListener(HTMLDomEventName.LOAD, (event) -> {
			IEvent evt = new splashjs.events.Event(splashjs.events.Event.LOADED);
			getRenderObject().dispatchEvent(evt);
		});

		htmlElement.addEventListener(HTMLDomEventName.CLICK, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.CLICK, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.DBLCLICK, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.DOUBLE_CLICK, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSEENTER, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_ENTER, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSELEAVE, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_LEAVE, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSEOVER, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OVER, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSEOUT, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OUT, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSEDOWN, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_DOWN, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		htmlElement.addEventListener(HTMLDomEventName.MOUSEUP, (event) -> {
			IMouseEvent mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_UP, null, getRenderObject());
			getRenderObject().dispatchEvent(mouseEvent);
		});
		
		
		
		
		
	}

	public void appendChild(IRenderer childRenderer) {
		IRenderElement childRenderElement = childRenderer.getRenderElement();
		Element childElement = ((RenderElement) childRenderElement).getDOMElement();
		this.getDOMElement().insertBefore(childElement, this.getDOMElement().firstChild);
	}

	public void removeChild(IRenderer childRenderer) {
		IRenderElement childRenderElement = childRenderer.getRenderElement();
		Element childElement = ((RenderElement) childRenderElement).getDOMElement();
		this.getDOMElement().removeChild(childElement);

	}
	
	public int getOriginalWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getOriginalHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}
	
	public void appendToBody() {
		document.body.appendChild(this.getDOMElement());
	}
	
	/****** CSS methods *************/
	
	protected String getCSSIDText() {
		return ((IDisplayObject) getRenderObject()).getUniqueID();
	}
	
	protected String getCSSTransformText() {
		
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		
		String scale = "scale(" + renderObject.getScaleX() + ", " + renderObject.getScaleY() + ")";
		String rotate = "rotate(" + renderObject.getRotation() + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		
		return transformText;
	}
	
	
	protected String getCSSTransformOriginText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		String text = renderObject.getRegX() + UNIT + " " + renderObject.getRegY() + UNIT;
		
		return text;
	}
	
	protected String getCSSLeftText() {
		IDisplayObject renderObject =(IDisplayObject)  getRenderObject();
		return (renderObject.getX() - renderObject.getRegX()) + UNIT;
	}
	
	protected String getCSSTopText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		return (renderObject.getY() - renderObject.getRegY()) + UNIT;
	}
	
	protected String getCSSWidthText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		return renderObject.getWidth() + UNIT;
	}
	
	protected String getCSSHeightText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		return renderObject.getHeight() + UNIT;
	}
	
	protected String getCSSOpacityText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		return renderObject.getAlpha() + "";
	}
	
	protected String getCSSVisibilityText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		String text;
		if(renderObject.getVisible() == true)
			text = "visible";
		else
			text = "hidden";
		
		return text;
	}
	
	protected String getCSSCursorVisibleText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		IMouseCursor mouseCursor = renderObject.getMouseCursor();
		String text = getCSSCursorText();
		
		if(renderObject.getMouseVisible() == false)
			text = "none";
		
		
		return text;
	}
	
	protected String getCSSCursorText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		IMouseCursor mouseCursor = renderObject.getMouseCursor();
		String text = MouseCursor.AUTO.getMouseCursorName();
		
		if(mouseCursor.getMouseCursorType().equalsIgnoreCase(MouseCursorType.SYSTEM)) {
			text = mouseCursor.getMouseCursorName();
		}else if(mouseCursor.getMouseCursorType().equalsIgnoreCase(MouseCursorType.IMAGE)) {
			String imagePath = mouseCursor.getMouseCursorImagePath();
			text = "url(" + IMAGES_FOLDER_PATH + imagePath + "), auto"; 
		}
		
		return text;
		
	}
	
	protected String getCSSFilterText() {
		IDisplayObject renderObject = (IDisplayObject) getRenderObject();
		String filterText = "";
		for(IFilter filter : renderObject.getFilters()) {
			if(filter.getType().equalsIgnoreCase(FilterType.BLUR)) 
				filterText += "blur(" + ((IBlurFilter)filter).getBlur() + "px) ";
			if(filter.getType().equalsIgnoreCase(FilterType.DROP_SHADOW)) {
				IDropShadowFilter dropShadowFilter = (IDropShadowFilter)filter;
				filterText += "drop-shadow(" + dropShadowFilter.getHorizontalShadow() + "px "; 
				filterText +=		dropShadowFilter.getVerticalShadow() + "px "; 
				filterText +=		dropShadowFilter.getBlur() + "px ";
				filterText +=		dropShadowFilter.getSpread() + "px)"; 
			}
		}
		return filterText;
	}
	
	protected String getSVGCircleRadiusText() {
		String radius = "10";
		radius = ((ICircle) renderObject).getRadius() + "";
		return radius;
	}
	
	protected String getSVGCircleCenterXText() {
		String cx = "0";
		int strokeWidth = ((IShape) renderObject).getStrokeWidth();
		int radius = ((ICircle) renderObject).getRadius();
		cx = Math.ceil( ((double)(radius + (double)strokeWidth/2)) ) + "";
		return cx;
	}
	
	protected String getSVGCircleCenterYText() {
		String cy = "0";
		int strokeWidth = ((IShape) renderObject).getStrokeWidth();
		int radius = ((ICircle) renderObject).getRadius();
		cy = Math.ceil( ((double)(radius + (double)strokeWidth/2)) ) + "";
		return cy;
	}
	
	protected String getSVGCircleWidthText() {
		String width = "0";
		int radius = ((ICircle) renderObject).getRadius();
		width = Math.ceil( (double)(Double.parseDouble(getSVGCircleCenterXText())*2) ) + "";
		return width;
	}
	
	protected String getSVGCircleHeightText() {
		String height = "0";
		int radius = ((ICircle) renderObject).getRadius();
		height = Math.ceil( (double)(Double.parseDouble(getSVGCircleCenterYText())*2) ) + "";
		return height;
	}
	
	protected String getSVGLineX2Text() {
		String x2 = "0";
		int length = ((ILine) renderObject).getLength();
		x2 = length + "";
		return x2;
	}
	
	protected String getSVGLineY2Text() {
		return getSVGLineY1Text();
	}
	
	protected String getSVGLineY1Text() {
		String y1 = Integer.parseInt(getSVGShapeStrokeWidthText())/2 + "";
		return y1;
	}
	

	
	protected String getSVGLineWidthText() {
		String width = "0";
		width = ((ILine) renderObject).getLength() + "";
		return width;
	}
	
	protected String getSVGLineHeightText() {
		String height = "0";
		height = getSVGShapeStrokeWidthText();
		return height;
	}
	
	protected String getSVGShapeStrokeColorNameText() {
		
		String strokeColorName = ColorName.BLACK;
		IColor strokeColor = ((IShape) renderObject).getStrokeColor();
		if(strokeColor.getColorType().equalsIgnoreCase(ColorType.NAME))
			strokeColorName = strokeColor.getColorName();
		else if(strokeColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			strokeColorName = strokeColor.getHEX();
		
		return strokeColorName;
	}
	
	protected String getSVGShapeFillColorNameText() {
		String fillColorName = ColorName.BLACK;
		IColor fillColor = ((IShape) renderObject).getFillColor();
		if(fillColor.getColorType().equalsIgnoreCase(ColorType.NAME))
			fillColorName = fillColor.getColorName();
		else if(fillColor.getColorType().equalsIgnoreCase(ColorType.HEX))
			fillColorName = fillColor.getHEX();
		
		return fillColorName;
	}
	
	protected String getSVGShapeStrokeWidthText() {
		String strokeWidth = "1";
		strokeWidth = ((IShape) renderObject).getStrokeWidth() + "";
		return strokeWidth;
	}

	
	
	/*
	protected String getCSSColorText(Color color) {
		String colorText = ColorName.ORANGE;
		
		colorText = color.getColorName();
		
		return colorText;
	}
	
	protected String getCSSBackgroundColorText(Color color) {
		
		String backgroundColorText = ColorName.WHITE;
		
		//if(color.getColorName() != null) {
			//backgroundColorText = color.getColorName();
		//}
		
		return backgroundColorText;
		
	}
	
	protected String getCSSFontFamilyText(String fontId) {
		String fontFamilyText = fontId;
		return fontFamilyText;
	}
	
	protected String getCSSFontStyleText(FontStyle fontStyle) {
		
		String fontStyleText = "normal";
		
		if(fontStyle == FontStyle.ITALIC)
			fontStyleText = "italic";
		else if(fontStyle == FontStyle.NORMAL)
			fontStyleText = "normal";
		else if(fontStyle == FontStyle.OBLIQUE)
			fontStyleText = "oblique";
		
		return fontStyleText;
	}
	
	protected String getCSSFontWeightText(FontWeight fontWeight) {
		
		String fontWeightText = "normal";
		
		if(fontWeight == FontWeight.NORMAL)
			fontWeightText = "normal";
		else if(fontWeight == FontWeight.LIGHTER)
			fontWeightText = "lighter";
		else if(fontWeight == FontWeight.BOLD)
			fontWeightText = "bold";
		else if(fontWeight == FontWeight.BOLDER)
			fontWeightText = "bolder";
		
		return fontWeightText;
	}
	
	protected String getCSSUserSelectText(boolean selectable) {
		String selectableText = "text";
		if(selectable == true)
			selectableText = "text";
		else if(selectable == false)
			selectableText = "none";
		
		return selectableText;
	}
	
	protected String getCSSDisplayText() {
		return cssDisplay;
	}
	
	protected String getCSSPositionText() {
		return cssPosition;
	}
	
	protected String getCSSBorderText() {
		return cssBorder;
	}
	
	protected String getCSSPaddingText() {
		return cssPadding;
	}
	
	protected String getCSSMarginText() {
		return cssMargin;
	}
	
	protected void setCSSDisplayText(String cssDisplay) {
		this.cssDisplay = cssDisplay;
	}
	
	protected void setCSSPositionText(String cssPosition) {
		this.cssPosition = cssPosition;
	}
	
	protected void setCSSBorderText(String cssBorder) {
		this.cssBorder = cssBorder;
	}
	
	protected void setCSSMarginText(String cssMargin) {
		this.cssMargin = cssMargin;
	}
	
	protected void setCSSPaddingText(String cssPadding) {
		this.cssPadding = cssPadding;
	}*/
	
	
}