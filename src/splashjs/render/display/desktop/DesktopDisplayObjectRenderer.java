package flashjs.render.display.desktop;

import org.w3c.dom.html.*;
import org.w3c.dom.*;

import flashjs.display.*;
import flashjs.utils.*;
import flashjs.events.*;
import flashjs.render.*;
import flashjs.render.display.*;
import flashjs.render.events.desktop.*;

public class DesktopDisplayObjectRenderer extends DesktopEventDispatcherRenderer implements IDisplayObjectRenderer {
	
	public void create() {
	}
	
	public int getOriginalWidth() {
		return 0;
	}
	
	public int getOriginalHeight() {
		return 0;
	}
	
	
	
	public void setPosition(String value) {
		js = super.getRenderObjectID() + ".style.position = '" + value + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setMargin(String value) {
		js = super.getRenderObjectID() + ".style.margin = \"" + value + "\";\r\n";
		webEngine.executeScript(js);
	}
	
	public void setPadding(String value) {
		js = super.getRenderObjectID() + ".style.padding = \"" + value + "\";\r\n";
		webEngine.executeScript(js);
	}
	
	public void setOverflow(String value) {
		js = super.getRenderObjectID() + ".style.overflow = \"" + value + "\";\r\n"; 
		webEngine.executeScript(js);
	}
	
	public void setBorder(String value) {
		js = super.getRenderObjectID() + ".style.border = '" + value + "';\r\n";
		webEngine.executeScript(js);
		
	}
	
	public void setZIndex(String value) {
		js = super.getRenderObjectID() + ".style.zIndex = '" + value + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setResize(String value) {
		js = super.getRenderObjectID() + ".style.resize = '" + value + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setX() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n";
		webEngine.executeScript(js);			
	}
	
	public void setY() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
		webEngine.executeScript(js);
	}
	
	public void setXY() {
		setX();
		setY();
	}
	
	public void setRegX() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n";
		webEngine.executeScript(js);		
	}
	
	public void setRegY() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setRegXY() {
		setRegX();
		setRegY();
	}
	
	public void setScaleX() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
		webEngine.executeScript(js);
	}
	
	public void setScaleY() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.left = '" + getCSSLeftText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.top = '" + getCSSTopText() + "';\r\n";
		js += super.getRenderObjectID() + ".style.transformOrigin = '" + getCSSTransformOriginText() + "';\r\n"; 
		webEngine.executeScript(js);
	}
	
	public void setScaleXY() {
		setScaleX();
		setScaleY();
	}
	
	public void setRotation() {
		js = super.getRenderObjectID() + ".style.transform = '" + getCSSTransformText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setAlpha() {
		js = super.getRenderObjectID() + ".style.opacity = '" + getCSSOpacityText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setVisible() {
		js = super.getRenderObjectID() + ".style.visibility = '" + getCSSVisibilityText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setMouseVisible() {
		js = super.getRenderObjectID() + ".style.cursor = '" + getCSSCursorVisibleText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setMouseCursor() {
		js = super.getRenderObjectID() + ".style.cursor = '" + getCSSCursorText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setWidth() {
		js = super.getRenderObjectID() + ".style.width = '" + getCSSWidthText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setHeight() {
		js = super.getRenderObjectID() + ".style.height = '" + getCSSHeightText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void setID() {
		js = super.getRenderObjectID() + ".id = '" + getCSSIDText() + "';\r\n";
		webEngine.executeScript(js);
	}
	
	public void addFilter() {
		js = super.getRenderObjectID() + ".style.filter = '" + getCSSFilterText() + "';\r\n";
		webEngine.executeScript(js);
	}
	

	
	
	
}
	