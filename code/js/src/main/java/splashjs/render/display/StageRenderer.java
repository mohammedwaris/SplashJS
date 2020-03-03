package splashjs.render.display;

import java.util.ArrayList;

import def.dom.HTMLSpanElement;
import def.dom.HTMLElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;
import splashjs.render.HTMLDomEventName;
import splashjs.utils.ColorName;
import splashjs.utils.ColorType;
import splashjs.ui.KeyLocation;
import splashjs.display.iface.IStage;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.events.KeyboardEvent;
import splashjs.events.iface.IKeyboardEvent;
import splashjs.display.iface.IScene;
import splashjs.application.iface.IStageOwner;





import splashjs.utils.iface.IColor;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.iface.IStageRenderer;

public class StageRenderer extends DisplayObjectContainerRenderer implements IStageRenderer {

	private java.util.Timer timer;
	//private IStageRendererDataProvider stageRendererDataProvider;
	private HTMLSpanElement htmlSpanElement;
	private IStage stage;
	
	public StageRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		stage = (IStage)renderObject;
		//super.setDataProvider(new StageRendererDataProvider(renderObject));
		htmlSpanElement = (HTMLSpanElement) document.createElement("span");
		super.setRenderElement(new RenderElement(htmlSpanElement));
		timer = new java.util.Timer();
		
		//stageRendererDataProvider = (IStageRendererDataProvider)super.getDataProvider();
		
		
		

	}
	
	@Override
	public void createEventListeners() {
		super.createEventListeners();
		
		htmlSpanElement.tabIndex = 0;
		
		
		htmlSpanElement.addEventListener(HTMLDomEventName.KEYPRESS, (event) -> {
			
			def.dom.KeyboardEvent domKeyboardEvent = (def.dom.KeyboardEvent)event;
			Integer loc = new Double(domKeyboardEvent.location).intValue();
			String location = loc + "";
			if(loc ==  domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
				location = KeyLocation.STANDARD;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
				location = KeyLocation.LEFT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
				location = KeyLocation.RIGHT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
				location = KeyLocation.NUMPAD;
			
			Integer charCode = new Double(domKeyboardEvent.charCode).intValue();
			Integer keyCode = new Double(domKeyboardEvent.keyCode).intValue();
			Integer which = new Double(domKeyboardEvent.which).intValue();
			IKeyboardEvent keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_PRESS,
											domKeyboardEvent.altKey, charCode, domKeyboardEvent.Char, 
											domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, 
											location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, 
											domKeyboardEvent.shiftKey, which);
			getRenderObject().dispatchEvent(keyboardEvent);
			
		});
		
		htmlSpanElement.addEventListener(HTMLDomEventName.KEYUP, (event) -> {
			
			def.dom.KeyboardEvent domKeyboardEvent = (def.dom.KeyboardEvent)event;
			Integer loc = new Double(domKeyboardEvent.location).intValue();
			String location = loc + "";
			if(loc ==  domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
				location = KeyLocation.STANDARD;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
				location = KeyLocation.LEFT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
				location = KeyLocation.RIGHT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
				location = KeyLocation.NUMPAD;
			
			Integer charCode = new Double(domKeyboardEvent.charCode).intValue();
			Integer keyCode = new Double(domKeyboardEvent.keyCode).intValue();
			Integer which = new Double(domKeyboardEvent.which).intValue();
			
			IKeyboardEvent keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_UP,
											domKeyboardEvent.altKey, charCode, domKeyboardEvent.Char, 
											domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, 
											location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, 
											domKeyboardEvent.shiftKey, which);
			getRenderObject().dispatchEvent(keyboardEvent);
			
		});
		
		htmlSpanElement.addEventListener(HTMLDomEventName.KEYDOWN, (event) -> {
			
			def.dom.KeyboardEvent domKeyboardEvent = (def.dom.KeyboardEvent)event;
			Integer loc = new Double(domKeyboardEvent.location).intValue();
			String location = loc + "";
			if(loc ==  domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
				location = KeyLocation.STANDARD;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
				location = KeyLocation.LEFT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
				location = KeyLocation.RIGHT;
			else if(loc == domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
				location = KeyLocation.NUMPAD;
			
			Integer charCode = new Double(domKeyboardEvent.charCode).intValue();
			Integer keyCode = new Double(domKeyboardEvent.keyCode).intValue();
			Integer which = new Double(domKeyboardEvent.which).intValue();
			
			IKeyboardEvent keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_DOWN,
											domKeyboardEvent.altKey,charCode, domKeyboardEvent.Char, 
											domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, 
											location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, 
											domKeyboardEvent.shiftKey, which);
			getRenderObject().dispatchEvent(keyboardEvent);
			
		});
		
	}
	
	
	public int getStageWidth() {
		IStageOwner stageOwner = stage.getStageOwner();
		return (int)((HTMLElement)stageOwner.getRenderer().getDOMElement()).clientWidth;
	}
	
	public int getStageHeight() {
		IStageOwner stageOwner = stage.getStageOwner();
		return (int)((HTMLElement)stageOwner.getRenderer().getDOMElement()).clientHeight;
	}
	
	@Override
	public void setColor() {
		IColor color = stage.getColor();
		IStageOwner stageOwner = stage.getStageOwner();
		if(color.getColorType().equalsIgnoreCase(ColorType.GRADIENT)) {
			//((HTMLElement)getDOMElement()).style.backgroundImage = getCSSGradientText();
		}else{
			((HTMLElement)stageOwner.getRenderer().getDOMElement()).style.backgroundColor = getCSSColorText();
		}
	}

	@Override
	public void startEnterFrameExitFrameDispatcherLoop() {
		timer.scheduleAtFixedRate(new java.util.TimerTask() {
					public void run() {
						getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.ENTER_FRAME));		
						getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.EXIT_FRAME));
							
					}
		}, 0, 15); //(int)(1000/Global.runtime.getFrameRate()));
	}
	
	public void setScene() {
		IScene scene = stage.getScene();
		appendChild(scene.getRenderer());
		IEvent addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, scene, scene);
		scene.dispatchEvent(addedToStageEvent);
	}
	
	public void removeScene() {
		IScene scene = stage.getScene();
		removeChild(scene.getRenderer());
		IEvent removedFromStage = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, scene, scene);
		scene.dispatchEvent(removedFromStage);
	}
	
	public String getCSSColorText() {
		
		String colorName = ColorName.BLACK;
		IColor color = ((IStage) super.getRenderObject()).getColor();
		if(color.getColorType().equalsIgnoreCase(ColorType.NAME))
			colorName = color.getColorName();
		else if(color.getColorType().equalsIgnoreCase(ColorType.HEX))
			colorName = color.getHEX();
		
		return colorName;
	}
	/*
	public String getCSSGradientText() {
		IColor gradientColor = ((IStage) super.getRenderObject()).getColor();
		String gradientText = "";
		String directionText = "";
		String colorText = "";
		IGradient gradient = gradientColor.getGradient();
		if(gradient instanceof ILinearGradient) {
			ILinearGradient linearGradient = (ILinearGradient)gradient;
			if(linearGradient.getGradientDirection() != null) {
				String gradientDirection = linearGradient.getGradientDirection();
				directionText = "to bottom";
				if(gradientDirection.equalsIgnoreCase(GradientDirection.BOTTOM_TO_TOP))
					directionText = "to top";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.LEFT_TO_RIGHT))
					directionText = "to right";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.RIGHT_TO_LEFT))
					directionText = "to left";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.TOP_TO_LEFT))
					directionText = "to top left";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.TOP_TO_RIGHT))
					directionText = "to top right";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.BOTTOM_TO_LEFT))
					directionText = "to bottom left";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.BOTTOM_TO_RIGHT))
					directionText = "to bottom right";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.LEFT_TO_TOP))
					directionText = "to left top";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.LEFT_TO_BOTTOM))
					directionText = "to left bottom";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.RIGHT_TO_TOP))
					directionText = "to right top";
				else if(gradientDirection.equalsIgnoreCase(GradientDirection.RIGHT_TO_BOTTOM))
					directionText = "to right bottom";
			}
			
			ArrayList<IColor> colors = linearGradient.getColors();
			for(int i=0;i<colors.size();i++) {
				IColor color = colors.get(i);
				String colorType = color.getColorType();
				if(colorType.equalsIgnoreCase(ColorType.NAME))
					colorText += color.getColorName() + " 20%";
				if(colorType.equalsIgnoreCase(ColorType.HEX))
					colorText += color.getHEX();
				if(i < colors.size()-1)
					colorText += " , ";
			}
			
			gradientText += linearGradient.getRepeat() == true ? "repeat-linear-gradient(" : "linear-gradient(" ;
			gradientText += directionText + ", ";
			gradientText += colorText + ")";
			
		}else if(gradient instanceof IRadialGradient) {
			
		}
		
		System.out.println(gradientText);
		return gradientText;
	}*/
	
	
	
}//end of class