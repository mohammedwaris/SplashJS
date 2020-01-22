package flashjs.render.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;
import org.w3c.dom.events.*;
import netscape.javascript.JSObject;

import flashjs.render.*;

import flashjs.display.*;
import flashjs.filters.*;
import flashjs.events.*;
import flashjs.events.impl.*;
import flashjs.layout.*;

import flashjs.utils.impl.*;
import flashjs.utils.*;
import flashjs.media.*;
import flashjs.media.impl.*;

import java.util.Map;
import java.util.HashMap;
import java.io.*;






import java.util.function.Consumer;

public class DesktopRendererOld { //extends BaseRenderer implements IDesktopRenderer, org.w3c.dom.events.EventListener {
	
	/*
	private String UNIT = "px";
	
	private boolean fontLoaded = false;
	
	private HTMLElement htmlElement;
	
	private javafx.scene.web.WebEngine webEngine;
	
	private String imageResourceFolderPath = "resources/images/";
	
	public DesktopRendererOld(javafx.scene.web.WebEngine webEngine) {
		this.webEngine = webEngine;
	}
	
	public DesktopRendererOld(String stageOwnerName, javafx.scene.web.WebEngine webEngine) {
		super(stageOwnerName);
		this.webEngine = webEngine;
		
		
		String js = "var " + stageOwnerName + " = " + "document.createElement('div');\r\n";
		js += stageOwnerName + ".id = " + "'" + stageOwnerName + "';\r\n";
		js += stageOwnerName + ".style.position = 'absolute';\r\n";
		js += stageOwnerName + ".style.top = '0px';\r\n";
		js += stageOwnerName + ".style.bottom = '0px';\r\n";
		js += stageOwnerName + ".style.left = '0px';\r\n";
		js += stageOwnerName + ".style.right = '0px';\r\n";
		//System.out.println(js);
		webEngine.executeScript(js);
	}
	
	public DesktopRendererOld() {
	}
	
	public DesktopRendererOld(IEventDispatcher targetObject) {
		super(targetObject);
	}
	
	public DesktopRendererOld(String renderObjectID, IEventDispatcher targetObject) {
		super(renderObjectID, targetObject);
		
		//this.htmlElement = document.getElementById(id);
	}
	
	

	
	public DesktopRendererOld(String renderObjectID, String elementType) {
		
		super(renderObjectID, elementType);
		
	}	

	@Override
	public void setElementType(String elementType) {
		super.setElementType(elementType);
		createHTMLElement();
	}
	
	private void createHTMLElement() {
		String elementType = super.getElementType();
		
		String js = "";
		if(elementType.equalsIgnoreCase(ElementType.CHECKBOX)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('input');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			js += super.getRenderObjectID() + ".type = 'checkbox';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.TEXT_INPUT)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('input');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			js += super.getRenderObjectID() + ".type = 'text';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.SPAN)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('span');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.DIV)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('div');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.IMG)) {
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('img');\r\n";
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';\r\n";
			//js += super.getRenderObjectID() + ".style.width = " + "'100%';\r\n";
			//js += super.getRenderObjectID() + ".style.height = " + "'100%';\r\n";
			
		}else if(elementType.equalsIgnoreCase(ElementType.BUTTON)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('button');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.P)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('p');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.TEXT_AREA)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('textarea');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;
			
		}else if(elementType.equalsIgnoreCase(ElementType.TABLE)) {
			
			//htmlElement = createGridLayoutObject();	
			
		}else if(elementType.equalsIgnoreCase(ElementType.AUDIO)) {
			
			js = "var " + super.getRenderObjectID() + " = " + "document.createElement('audio');" + endch;
			js += super.getRenderObjectID() + ".id = " + "'" + super.getRenderObjectID() + "';" + endch;	
			
		}
		
		webEngine.executeScript(js);
		
		this.htmlElement = (HTMLElement) webEngine.executeScript(super.getRenderObjectID());
		
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.LOAD, this, true);
		
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.CLICK, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.DBLCLICK, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.DBLCLICK, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEDOWN, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEENTER, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSELEAVE, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEMOVE, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEOUT, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEOVER, this, true);
		((EventTarget)htmlElement).addEventListener(HTMLDomEventName.MOUSEUP, this, true);
		
		IDisplayObject renderObject = (IDisplayObject) super.getRenderObject();
		
		if(super.getRenderObject() instanceof IStage) {
			((IStage)getRenderObject()).getTimer().scheduleAtFixedRate(new java.util.TimerTask() {
					public void run() {
						
						javafx.application.Platform.runLater(new Runnable() {
							public void run() {
								
								renderObject.dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.ENTER_FRAME));
								
								renderObject.dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.EXIT_FRAME));
							}
						});
					}
			}, 0, 15); //(int)(1000/Global.runtime.getFrameRate()));
			
		}
		
		
		
	}
	
	public void appendToBody() {
		String js = "";
		js = "document.body.appendChild(" + super.getRenderObjectID() + ");\r\n";
		//System.out.println(js);
		webEngine.executeScript(js);
	}
	
	
	
	public void loadFonts() {
		
		/*
		if(fontLoaded == true)
			return;
		
		Map<String, FontPath> fonts = Font.getFonts();
		HTMLStyleElement styleElement = (HTMLStyleElement) document.createElement("style");
		String fontStyleTag = "";
		if(fonts.size() > 0){
			for(Map.Entry<String, FontPath> entry : fonts.entrySet()){
				String fontId = entry.getKey();
				FontPath fontPath = entry.getValue();
				String normalFontPath = fontPath.getNormalFontPath();
				String boldFontPath = fontPath.getBoldFontPath();
				String italicFontPath = fontPath.getItalicFontPath();
				String boldItalicFontPath = fontPath.getBoldItalicFontPath();
				
				if(normalFontPath != null) {
					fontStyleTag += "@font-face { \r\n";
					fontStyleTag += "font-family: " + fontId + ";\r\n";
					fontStyleTag += "src: " + "url('" + normalFontPath + "');\r\n";
					fontStyleTag += "font-style: normal;\r\n";
					fontStyleTag += "font-weight: normal;\r\n";
					fontStyleTag += "}\r\n\r\n";
				}
				if(boldFontPath != null) {
					fontStyleTag += "@font-face { \r\n";
					fontStyleTag += "font-family: " + fontId + ";\r\n";
					fontStyleTag += "src: " + "url('" + boldFontPath + "');\r\n";
					fontStyleTag += "font-style: normal;\r\n";
					fontStyleTag += "font-weight: bold;\r\n";
					fontStyleTag += "}\r\n\r\n";
				}
				if(italicFontPath != null) {
					fontStyleTag += "@font-face { \r\n";
					fontStyleTag += "font-family: " + fontId + ";\r\n";
					fontStyleTag += "src: " + "url('" + italicFontPath + "');\r\n";
					fontStyleTag += "font-style: normal;\r\n";
					fontStyleTag += "font-weight: normal;\r\n";
					fontStyleTag += "}\r\n\r\n";
				}
				if(boldItalicFontPath != null) {
					fontStyleTag += "@font-face { \r\n";
					fontStyleTag += "font-family: " + fontId + ";\r\n";
					fontStyleTag += "src: " + "url('" + boldItalicFontPath + "');\r\n";
					fontStyleTag += "font-style: italic;\r\n";
					fontStyleTag += "font-weight: bold;\r\n";
					fontStyleTag += "}\r\n\r\n";
				}
				
				
			}
			styleElement.innerHTML = fontStyleTag;
		}


		document.getElementsByTagName("head").item(0).appendChild(styleElement);
		fontLoaded = true;
	}
	

	

	
	public void setProperty(String elementProperty) {

		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		
		String js = "";
		if(elementProperty.equalsIgnoreCase(ElementProperty.Y)){
			
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
			/*htmlElement.style.transform = getCSSTransformText();
			htmlElement.style.left = getCSSLeftText();
			htmlElement.style.top = getCSSTopText(); 
			htmlElement.style.transformOrigin = getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.X)) {
			
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
			
			/*htmlElement.style.left = getCSSLeftText(); 
			htmlElement.style.transform = getCSSTransformText();
			htmlElement.style.top = getCSSTopText(); 
			htmlElement.style.transformOrigin = getCSSTransformOriginText();
			
		}if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			
			js = super.getRenderObjectID() + ".style.width = '" + getCSSWidthText() + "';\r\n";
			//js = "var el = document.getElementById('" + "first" + "');\r\n";
			
			//htmlElement.style.width = getCSSWidthText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			
			js = super.getRenderObjectID() + ".style.height = '" + getCSSHeightText() + "';\r\n";
			//js = "var el = document.getElementById('" + super.getRenderObjectID() + "');\r\n";
			
			//htmlElement.style.height = getCSSHeightText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SCALE_X) || 
				elementProperty.equalsIgnoreCase(ElementProperty.SCALE_Y) ) {
					
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ROTATION)) {
			
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			//htmlElement.style.transform = getCSSTransformText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_X)) {
			
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_Y)) {
			
			js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
			js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.FILTER)) {
			
			js = super.getRenderObjectID() + ".style.filter = '" + getCSSFilterText() + "';\r\n";
			//htmlElement.style.filter = getCSSFilterText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ALPHA)) {
			
			js = super.getRenderObjectID() + ".style.opacity = '" + getCSSOpacityText() + "';\r\n";
			//htmlElement.style.opacity = getCSSOpacityText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.VISIBLE)) {
			
			js = super.getRenderObjectID() + ".style.visibility = '" + getCSSVisibilityText() + "';\r\n";
			//htmlElement.style.visibility = getCSSVisibilityText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SRC)) {
			
			//if(htmlElement instanceof HTMLImageElement) {
				IImage image = (IImage)targetObject;
				/*String imageData = "";
				//((HTMLImageElement)htmlElement).src = image.getImagePath();
				try {
					java.io.File file = new java.io.File(image.getImagePath());
					java.io.FileInputStream fis = new java.io.FileInputStream(file);
					javafx.scene.image.Image mg = new javafx.scene.image.Image(new java.io.FileInputStream(file));
					image.dispatchCompleteEvent(new flashjs.events.impl.Event(EventName.COMPLETE), (int)mg.getWidth(), (int)mg.getHeight());
					
					byte[] b = new byte[(int)file.length()];
					fis.read(b, 0, (int)file.length());
					imageData = java.util.Base64.getEncoder().encodeToString(b);
					
				}catch(Exception e) {
					e.printStackTrace();
				}
				
				//js = super.getRenderObjectID() +".src = '" + "data:image/" + image.getImageType() + ";charset=utf-8;base64," + imageData + "';\r\n"; 
				js = super.getRenderObjectID() +".src = '" + imageResourceFolderPath + image.getImagePath() + "';\r\n"; 
			//}else if(htmlElement instanceof HTMLAudioElement) {
				//ISound sound = (ISound)targetObject;
				//((HTMLAudioElement)htmlElement).src = sound.getSoundPath();
			//}
			
		}/*else if(elementProperty.equalsIgnoreCase(ElementProperty.ID)) {
			
			htmlElement.id = getCSSIDText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.COLOR)) {
			
			//Text text = (Text)targetObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BACKGROUND_COLOR)) {
			
			//htmlElement.style.backgroundColor = getCSSBackgroundColorText(((Stage)targetObject).getBackgroundColor());
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.VALUE)) {
			
			if(htmlElement instanceof HTMLParagraphElement ||
			   htmlElement instanceof HTMLTextAreaElement ){
				//htmlElement.innerText = ((Text)targetObject).getText();
			}
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.FONT)) {
			
			if(htmlElement instanceof HTMLParagraphElement ||
			   htmlElement instanceof HTMLTextAreaElement ){
				//htmlElement.style.fontFamily = getCSSFontFamilyText(((Text)targetObject).getFont());
			}
			
		}else if(elementProperty == ElementProperty.FONT_SIZE ) {
			
			if(htmlElement instanceof HTMLParagraphElement ||
			   htmlElement instanceof HTMLTextAreaElement ){
				//htmlElement.style.fontSize = ((Text)targetObject).getFontSize() + unit;
			}
			
		}else if(elementProperty == ElementProperty.FONT_STYLE) {
			
			if(htmlElement instanceof HTMLParagraphElement ||
			   htmlElement instanceof HTMLTextAreaElement ){
				//htmlElement.style.fontStyle = getCSSFontStyleText(((Text)targetObject).getFontStyle());
			}
			
		}else if(elementProperty == ElementProperty.FONT_WEIGHT) {
			
			if(htmlElement instanceof HTMLParagraphElement){
				//htmlElement.style.fontWeight = getCSSFontWeightText(((Text)targetObject).getFontWeight());
			}
			
		}else if(elementProperty == ElementProperty.TEXT_SELECTABLE) {
			
			//htmlElement.style.setProperty("user-select", getCSSUserSelectText(((Text)targetObject).isSelectable()));
			
		}
		
		//System.out.println(js);
		webEngine.executeScript(js);
		
	}
	
	public void setProperty(String elementProperty, String value) {
		
		String js = "";
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DISPLAY)) {
			js = super.getRenderObjectID() + ".style.display = '" + value + "';\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.POSITION)) {
			js = super.getRenderObjectID() + ".style.position = '" + value + "';\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER)) {
			js = super.getRenderObjectID() + ".style.border = '" + value + "';\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.MARGIN)) {
			js = super.getRenderObjectID() + ".style.margin = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.PADDING)) {
			js = super.getRenderObjectID() + ".style.padding = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			//js = super.getRenderObjectID() + ".style.width = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			//js = super.getRenderObjectID() + ".style.height = \"" + value + "\";\r\n";
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.OVERFLOW)) {
			js = super.getRenderObjectID() + ".style.overflow = \"" + value + "\";\r\n"; 
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER_COLLAPSE)) {
			js = super.getRenderObjectID() + ".style.borderCollapse = \"" + value + "\";\r\n";
		}else {
			
		}
		
		webEngine.executeScript(js);
		
	}
	
	public void addToGridLayout(IDisplayObject targetObject, int rowNum, int colNum) {
		/*NodeList td = htmlElement.querySelectorAll("#" + super.getRenderObjectID() + "row" + rowNum + "col" + colNum);
		IBrowserRenderer br = (IBrowserRenderer)targetObject.getRenderer();
		HTMLElement el = br.getHTMLElement();
		td.item(0).appendChild(el);
	}
	
	

	
	public void appendChild(String id, IRenderer childRenderer) {
	}
	
	public void appendChild(IRenderer childRenderer) {
		
		
		String js = "";
		js = super.getRenderObjectID() + ".appendChild(" + childRenderer.getRenderObjectID() + ");\r\n";
		//System.out.println(js);
		webEngine.executeScript(js);
		
		//HTMLElement childHTMLElement = ((IBrowserRenderer)childRenderer).getHTMLElement();
		//this.htmlElement.appendChild(childHTMLElement);
		/*
		HTMLRenderElement childHTMLRenderElement = (HTMLRenderElement)childRenderer.getRenderElement();
		HTMLElement childHTMLElement = childHTMLRenderElement.htmlElement;
		
		HTMLElement parentHTMLElement = ((HTMLRenderElement)getRenderElement()).htmlElement;
		parentHTMLElement.appendChild(childHTMLElement);
	}
	
	public void removeChild(IRenderer childRenderer) {
		
		/*HTMLRenderElement childHTMLRenderElement = (HTMLRenderElement)childRenderer.getRenderElement();
		HTMLElement childHTMLElement = childHTMLRenderElement.htmlElement;
		
		HTMLElement parentHTMLElement = ((HTMLRenderElement)renderElement).htmlElement;
		
		parentHTMLElement.removeChild(childHTMLElement);
	}
	

	
	public int getProperty(String elementProperty) {
		int value = -1;
		

		String js = "";
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			if(super.getRenderObject() instanceof ISprite){
				js = super.getRenderObjectID() + ".clientWidth; \r\n";
				
				//value = (int)htmlElement.clientWidth;
				//System.out.println("tw: " + ((HTMLParagraphElement)htmlElement).clientWidth);
			}
		}/*else if(elementProperty == ElementProperty.HEIGHT) {
			if(htmlElement instanceof HTMLParagraphElement){
				value = (int)htmlElement.clientHeight;
				//System.out.println("tw: " + ((HTMLParagraphElement)htmlElement).clientWidth);
			}
		}else if(elementProperty == ElementProperty.SCALED_WIDTH) {
			value = (int)htmlElement.getBoundingClientRect().width;
		}else if(elementProperty == ElementProperty.SCALED_HEIGHT) {
			value = (int)htmlElement.getBoundingClientRect().height;
		}
		
		System.out.println(webEngine.executeScript(js));
		value = (int) webEngine.executeScript(js);
		
		return value;
	}
	
	
	

	

	
	private String getCSSIDText() {
		return ((IDisplayObject) super.getRenderObject()).getID();
	}
	
	private String getCSSTransformText() {
		
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		
		String scale = "scale(" + targetObject.getScaleX() + ", " + targetObject.getScaleY() + ")";
		String rotate = "rotate(" + targetObject.getRotation() + "deg)";
		String skew = "skew(" + "0" + "deg, " + "0" + "deg)";
		String transformText = scale + " " + skew + " " + rotate;
		
		return transformText;
	}
	
	
	private String getCSSTransformOriginText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		String text = targetObject.getRegX() + UNIT + " " + targetObject.getRegY() + UNIT;
		
		return text;
	}
	
	private String getCSSLeftText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		return (targetObject.getX() - targetObject.getRegX()) + UNIT;
	}
	
	private String getCSSTopText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		return (targetObject.getY() - targetObject.getRegY()) + UNIT;
	}
	
	private String getCSSWidthText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		return targetObject.getWidth() + UNIT;
	}
	
	private String getCSSHeightText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		return targetObject.getHeight() + UNIT;
	}
	
	private String getCSSOpacityText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		return targetObject.getAlpha() + "";
	}
	
	private String getCSSVisibilityText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		String text;
		if(targetObject.getVisible() == true)
			text = "visible";
		else
			text = "hidden";
		
		return text;
	}
	
	private String getCSSFilterText() {
		IDisplayObject targetObject = (IDisplayObject) super.getRenderObject();
		String filterText = "";
		for(IFilter filter : targetObject.getFilters()) {
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
	
	/*
	private HTMLElement createGridLayoutObject() {
		IDisplayObject targetObject = super.getRenderObject();
		IGridLayout gridLayout = (IGridLayout) targetObject;
		//String innerHTML = 
		HTMLTableElement htmlElement = (HTMLTableElement) document.createElement("table");
		htmlElement.border = "1";
		HTMLTableRowElement tr = null;
		HTMLTableCellElement td = null;
		int row = gridLayout.getRow();
		int col = gridLayout.getCol();
		for(int i=0;i<row;i++){
			//innerHTML += "<tr>";
			tr = (HTMLTableRowElement) document.createElement("tr");
			for(int j=0;j<col;j++) {
				td = (HTMLTableCellElement) document.createElement("td");
				td.id = super.getRenderObjectID() + "row" + i + "col" + j;
				tr.appendChild(td);
				//innerHTML += "<td id='" + super.getRenderObjectID() + "row" + i + "col" + j + "'></td>";
			}
			htmlElement.appendChild(tr);
			//innerHTML += "</tr>";
		}
		
		
		return htmlElement;
	}
	
	public void playSound() {
		//HTMLAudioElement el = (HTMLAudioElement)document.getElementById(super.getRenderObjectID());
		//HTMLAudioElement el = (HTMLAudioElement)htmlElement;
		//el.play();
		//((HTMLAudioElement)htmlElement).play();
	}
	
	public void loadImage(IResource resource) {
		/*HTMLLinkElement link = (HTMLLinkElement) document.createElement("link");
		link.rel = "preload";
		link.setAttribute("as", "image");
		link.href = resource.getResourcePath();
		document.head.appendChild(link);
	}
	
	public void loadSound(IResource resource) {
		/*HTMLLinkElement link = (HTMLLinkElement) document.createElement("link");
		link.rel = "preload";
		link.setAttribute("as", "audio");
		link.href = resource.getResourcePath();
		document.head.appendChild(link);
	}
	

	

	
	/* implemented "public void handleEvent(org.w3c.dom.events.Event evt)" method of interface org.w3c.dom.events.EventListener 
	@Override
	public void handleEvent(org.w3c.dom.events.Event evt) {
		
		
		boolean isMouseEvent = false;
		String eventName = null;
		
		if(evt.getType().equalsIgnoreCase(HTMLDomEventName.CLICK)) {
			
			isMouseEvent = true;
			eventName = EventName.CLICK;
			
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.DBLCLICK)) {
			
			isMouseEvent = true;
			eventName = EventName.DOUBLE_CLICK;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEDOWN)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_DOWN;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEENTER)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_ENTER;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSELEAVE)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_LEAVE;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEMOVE)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_MOVE;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEOUT)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_OUT;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEOVER)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_OVER;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.MOUSEUP)) {
			
			isMouseEvent = true;
			eventName = EventName.MOUSE_UP;
			
		}else if(evt.getType().equalsIgnoreCase(HTMLDomEventName.LOAD)) {
			if(super.getRenderObject() instanceof IImage) {
				//String js = "console.log(" + super.getRenderObjectID() + ".naturalWidth" + ");";
				//System.out.println(js);
				//webEngine.executeScript(js);
				int naturalWidth = (int) webEngine.executeScript(super.getRenderObjectID() + ".naturalWidth");
				int naturalHeight = (int) webEngine.executeScript(super.getRenderObjectID() + ".naturalHeight");
				IEvent event = new flashjs.events.impl.Event(EventName.COMPLETE);
				((IImage)super.getRenderObject()).dispatchCompleteEvent(event, naturalWidth, naturalHeight);
				//System.out.println(naturalWidth + " " + naturalHeight);
			}
			
		}
		
		if(isMouseEvent) {
			org.w3c.dom.events.MouseEvent domMouseEvent = (org.w3c.dom.events.MouseEvent) evt;
			IMouseEvent mouseEvent = new flashjs.events.impl.MouseEvent(eventName);
			mouseEvent.setAltKey(domMouseEvent.getAltKey());
			super.getRenderObject().dispatchEvent(mouseEvent);
		}

	}
*/
	
	
}