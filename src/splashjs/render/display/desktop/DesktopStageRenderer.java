package flashjs.render.display.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;
import org.w3c.dom.events.*;
import netscape.javascript.JSObject;

import flashjs.render.desktop.*;
import flashjs.display.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.utils.*;
import flashjs.ui.*;
import flashjs.render.display.*;
import flashjs.render.display.dataprovider.*;

public class DesktopStageRenderer extends DesktopDisplayObjectContainerRenderer implements IStageRenderer{
	
	private java.util.Timer timer;
	private IStageRendererDataProvider stageRendererDataProvider;

	public DesktopStageRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		super.setDataProvider(new StageRendererDataProvider(renderObject));
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"span\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 

		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		super.setRenderElement(new DesktopRenderElement((HTMLElement)webEngine.executeScript(js)));
		timer = new java.util.Timer();
		
		stageRendererDataProvider = (IStageRendererDataProvider)super.getDataProvider();
		
		
	}
	
	public void createEventListeners() {
		super.createEventListeners();
		
		js = "document.body";
		HTMLElement htmlBodyElement = (HTMLElement) webEngine.executeScript(js);
		((EventTarget)htmlBodyElement).addEventListener(HTMLDomEventName.KEYPRESS, (event) -> {
			
			com.sun.webkit.dom.KeyboardEventImpl domKeyboardEvent = (com.sun.webkit.dom.KeyboardEventImpl)event;
			int loc = domKeyboardEvent.getLocation();
			String location = loc + "";
			if(loc ==  0)
				location = KeyLocation.STANDARD;
			else if(loc == 1)
				location = KeyLocation.LEFT;
			else if(loc == 2)
				location = KeyLocation.RIGHT;
			else if(loc == 3)
				location = KeyLocation.NUMPAD;
			IKeyboardEvent keyboardEvent = new flashjs.events.impl.KeyboardEvent(flashjs.events.EventName.KEY_PRESS,
											domKeyboardEvent.getAltKey(), (int)domKeyboardEvent.getCharCode(), null, 
											domKeyboardEvent.getCtrlKey(), null, (int)domKeyboardEvent.getKeyCode(), 
											location, domKeyboardEvent.getMetaKey(), null, 
											domKeyboardEvent.getShiftKey(), (int)domKeyboardEvent.getWhich());
			getRenderObject().dispatchEvent(keyboardEvent);
			
		} , true);
		
		((EventTarget)htmlBodyElement).addEventListener(HTMLDomEventName.KEYDOWN, (event) -> {
			
			com.sun.webkit.dom.KeyboardEventImpl domKeyboardEvent = (com.sun.webkit.dom.KeyboardEventImpl)event;
			int loc = domKeyboardEvent.getLocation();
			String location = loc + "";
			if(loc ==  0)
				location = KeyLocation.STANDARD;
			else if(loc == 1)
				location = KeyLocation.LEFT;
			else if(loc == 2)
				location = KeyLocation.RIGHT;
			else if(loc == 3)
				location = KeyLocation.NUMPAD;
			IKeyboardEvent keyboardEvent = new flashjs.events.impl.KeyboardEvent(flashjs.events.EventName.KEY_DOWN,
											domKeyboardEvent.getAltKey(), (int)domKeyboardEvent.getCharCode(), null, 
											domKeyboardEvent.getCtrlKey(), null, (int)domKeyboardEvent.getKeyCode(), 
											location, domKeyboardEvent.getMetaKey(), null, 
											domKeyboardEvent.getShiftKey(), (int)domKeyboardEvent.getWhich());
			getRenderObject().dispatchEvent(keyboardEvent);
			
		}, true);
		
		((EventTarget)htmlBodyElement).addEventListener(HTMLDomEventName.KEYUP, (event) -> {
			
			com.sun.webkit.dom.KeyboardEventImpl domKeyboardEvent = (com.sun.webkit.dom.KeyboardEventImpl)event;
			int loc = domKeyboardEvent.getLocation();
			String location = loc + "";
			if(loc ==  0)
				location = KeyLocation.STANDARD;
			else if(loc == 1)
				location = KeyLocation.LEFT;
			else if(loc == 2)
				location = KeyLocation.RIGHT;
			else if(loc == 3)
				location = KeyLocation.NUMPAD;
			IKeyboardEvent keyboardEvent = new flashjs.events.impl.KeyboardEvent(flashjs.events.EventName.KEY_UP,
											domKeyboardEvent.getAltKey(), (int)domKeyboardEvent.getCharCode(), null, 
											domKeyboardEvent.getCtrlKey(), null, (int)domKeyboardEvent.getKeyCode(), 
											location, domKeyboardEvent.getMetaKey(), null, 
											domKeyboardEvent.getShiftKey(), (int)domKeyboardEvent.getWhich());
			getRenderObject().dispatchEvent(keyboardEvent);
			
		}, true);
		
		//js = "document.body.addEventListener('keypress', function(evt) {console.log(evt.altKey + ' ' +  evt.charCode + ' ' + evt.char + ' ' + evt.ctrlKey + ' ' + evt.key + ' ' + evt.keyCode + ' ' + evt.location + ' ' + evt.metaKey + ' ' + evt.repeat + ' ' + evt.shiftKey + ' ' + evt.which);});";
		//webEngine.executeScript(js);
	}
	
	private String getCSSColorText() {
		
		String colorName = ColorName.BLACK;
		IColor color = ((IStage) super.getRenderObject()).getColor();
		if(color.getColorType().equalsIgnoreCase(ColorType.NAME))
			colorName = color.getColorName();
		else if(color.getColorType().equalsIgnoreCase(ColorType.HEX))
			colorName = color.getHEX();
		
		return colorName;
	}
	
	@Override
	public void setColor() {
		IColor color = ((IStage)getRenderObject()).getColor();
		js = "";
		if(color.getColorType().equalsIgnoreCase(ColorType.GRADIENT)) 
			js = super.getRenderObjectID() + ".style.backgroundImage = \"" + stageRendererDataProvider.getCSSGradientText() + "\";"; 
		else
			js = super.getRenderObjectID() + ".style.backgroundColor = \"" + stageRendererDataProvider.getCSSColorText() + "\";"; 
		webEngine.executeScript(js);
	}
	
	@Override
	public void startEnterFrameExitFrameDispatcherLoop() {
			timer.scheduleAtFixedRate(new java.util.TimerTask() {
					public void run() {
						javafx.application.Platform.runLater(new Runnable() {
							public void run() {
								getRenderObject().dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.ENTER_FRAME));		
								getRenderObject().dispatchEvent(new flashjs.events.impl.Event(flashjs.events.EventName.EXIT_FRAME));
							}
						});
							
					}
			}, 0, 15); //(int)(1000/Global.runtime.getFrameRate()));
	}
}