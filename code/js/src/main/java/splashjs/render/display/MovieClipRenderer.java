package splashjs.render.display;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLSpanElement;
import def.dom.FrameRequestCallback;
import static def.dom.Globals.document;
import static def.dom.Globals.requestAnimationFrame;

import splashjs.display.iface.IMovieClip;
import splashjs.render.RenderElement;
import splashjs.events.iface.IEventDispatcher;
import splashjs.utils.iface.ITimer;
import splashjs.utils.Timer;
import splashjs.events.iface.ITimerEvent;
import splashjs.events.TimerEvent;
import splashjs.animation.iface.IFrame;
import splashjs.animation.iface.ISpriteSheet;
import splashjs.animation.iface.IMovieClipData;
import splashjs.render.display.iface.IMovieClipRenderer;
import splashjs.utils.iface.*;

public class MovieClipRenderer extends SpriteRenderer implements IMovieClipRenderer {
	
	private HTMLSpanElement spanElement;
	IMovieClip movieClip;
	int count = 0;
	int currentLoopCount = 0;
	int loopCount = 1;
	ITimer timer;
	private boolean playing = false;
	private String currentLabel = null;
	private int currentFrameIndex = -1;
	
	public MovieClipRenderer(IEventDispatcher renderObject) {
		super(renderObject);
		movieClip = (IMovieClip)super.getRenderObject();
		spanElement = (HTMLSpanElement)super.getDOMElement();
		//super.setRenderElement(new RenderElement((HTMLSpanElement) document.createElement("span")));
		create();
	}
	
	public void create() {
		/*
		movieClip = (IMovieClip)this.getRenderObject();
		String imagePath = movieClip.getAnimation().getSpriteSheet().getImagePath();
		int frameWidth = movieClip.getSpriteSheet().getFrameWidth();
		int frameHeight = movieClip.getSpriteSheet().getFrameHeight();
		spanElement.style.width = frameWidth + "px";
		spanElement.style.height = frameHeight + "px";
		spanElement.style.backgroundImage = "url('" + imagePath + "')";
		*/
	}
	
	public  void gotoAndStop(String label, int frameIndex) {
		this.stop();
		IMovieClipData movieClipData = movieClip.getMovieClipDataByLabel(label);
		ISpriteSheet spriteSheet = movieClipData.getSpriteSheet();
		String imagePath = spriteSheet.getImagePath();
		IResource resource = spriteSheet.getResource();
		String imageBase64 = "";
		if(resource != null)
			imageBase64 = resource.getResourceBase64();
		else
			imageBase64 = spriteSheet.getImageBase64();
		
		IFrame[] frames = movieClipData.getFrames();
		int totalFrames = frames.length;
		
		spanElement.style.width = frames[frameIndex].getWidth() + UNIT;
		spanElement.style.height = frames[frameIndex].getHeight() + UNIT;
		spanElement.style.backgroundImage = "url(\"" + imageBase64 + "\")";
		
		int imageFrameIndex = frames[frameIndex].getIndex();
		int frameWidth = frames[frameIndex].getWidth();
		int frameHeight = frames[frameIndex].getHeight();
		int framePerRow = spriteSheet.getWidth()/frameWidth;
		int framePerColumn = spriteSheet.getHeight()/frameHeight;
		int x = -(imageFrameIndex%framePerRow) * frameWidth;
		int y = -(imageFrameIndex/framePerRow) * frameHeight;
		spanElement.style.backgroundPosition = x + UNIT + " " + y + UNIT;
		currentLabel = label;
		currentFrameIndex = frameIndex;
		//System.out.println(frameWidth + " " + frameHeight + " " + frameIndex + " " + framePerRow + " " + framePerColumn + " " + x + " " + y);
	}
	
	public void gotoAndPlay(String label, int loopCount) {
		this.stop();
		this.loopCount = loopCount;
		IMovieClipData movieClipData = movieClip.getMovieClipDataByLabel(label);
		ISpriteSheet spriteSheet = movieClipData.getSpriteSheet();
		String imagePath = spriteSheet.getImagePath();
		IFrame[] frames = movieClipData.getFrames();
		int totalFrames = frames.length;
		
		if(totalFrames <= 1) {
			this.gotoAndStop(label, 0);
			return;
		}
		
		IResource resource = spriteSheet.getResource();
		String imageBase64 = "";
		if(resource != null)
			imageBase64 = resource.getResourceBase64();
		else
			imageBase64 = spriteSheet.getImageBase64();
		
		spanElement.style.width = frames[0].getWidth() + UNIT;
		spanElement.style.height = frames[0].getHeight() + UNIT;
		spanElement.style.backgroundImage = "url(\"" + imageBase64 + "\")";
		int frameRate = movieClip.getFrameRate();
		int interval = (int)1000/frameRate;
		
		count = 0;
		currentLoopCount = 0;
		timer = new Timer(interval);
		timer.addEventListener(TimerEvent.TIMER, (event) -> {
			
			requestAnimationFrame(new FrameRequestCallback() {
				
				public void $apply(double time) {
					int frameIndex = frames[count].getIndex();
					int frameWidth = frames[count].getWidth();
					int frameHeight = frames[count].getHeight();
					int framePerRow = spriteSheet.getWidth()/frameWidth;
					int framePerColumn = spriteSheet.getHeight()/frameHeight;
					int x = -(frameIndex%framePerRow) * frameWidth;
					int y = -(frameIndex/framePerRow) * frameHeight;
					spanElement.style.width = frameWidth + UNIT;
					spanElement.style.height = frameHeight + UNIT;
					spanElement.style.backgroundPosition = x + UNIT + " " + y + UNIT;
					//System.out.println(frameWidth + " " + frameHeight + " " + frameIndex + " " + framePerRow + " " + framePerColumn + " " + x + " " + y);
					currentFrameIndex = count;
					if(count == totalFrames - 1) {
						
						currentLoopCount += 1;
						count = 0;
						if(loopCount != 0 && currentLoopCount >= loopCount) {
							currentLoopCount = -1;
							((ITimer)event.getCurrentTarget()).reset();
							playing = false;
						}
							
					}else{
						count += 1;
					}
				}

			});
			
		});
		timer.start();
		currentLabel = label;
		playing = true;
		
	}
	
	public void stop() {
		if(timer != null) {
			timer.stop();
			playing = false;
		}
	}
	
	public void play() {
	}
	
	private String getBackgroundPositionCSSText() {
		return null;
	}
	
	public boolean isPlaying() {
		return playing;
	}
	
	public boolean isPlaying(String label) {
		boolean labelPlaying = false;
		if(currentLabel != null && currentLabel.equalsIgnoreCase(label) && playing == true)
			labelPlaying = true;
		return labelPlaying;
	}
	
	public String getCurrentLabel() {
		return currentLabel;
	}
	
	public int getCurrentFrameIndex() {
		return currentFrameIndex;
	}
	
	public boolean isLooping() {
		boolean looping = false;
		if(loopCount == 0 && playing == true)
			looping = true;
		return looping;
	}
	
	public int getCurrentLoopCount() {
		return currentLoopCount;
	}
		
	
	/*public void appendChild(IRenderer childRenderer) {
		IRenderElement childRenderElement = childRenderer.getRenderElement();
		Element childElement = ((RenderElement) childRenderElement).getElement();
		this.getElement().appendChild(childElement);
	}*/
	
	/*
	public void setProperty(String elementProperty, String value) {
		
		HTMLElement htmlElement = (HTMLElement) getElement();
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.DISPLAY)) {
			htmlElement.style.display = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.POSITION)) {
			htmlElement.style.position = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.BORDER)) {
			htmlElement.style.border = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.MARGIN)) {
			htmlElement.style.margin = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.PADDING)) {
			htmlElement.style.padding = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			htmlElement.style.width = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			htmlElement.style.height = value;
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.OVERFLOW)) {
			htmlElement.style.overflow = value;
		}
		
	}
	
	public void setProperty(String elementProperty) {

		HTMLElement htmlElement = (HTMLElement) getElement();
		
		if(elementProperty.equalsIgnoreCase(ElementProperty.Y)){
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.X)) {
			
			htmlElement.style.left = super.getCSSLeftText(); 
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.WIDTH)) {
			
			htmlElement.style.width = super.getCSSWidthText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.HEIGHT)) {
			
			htmlElement.style.height = super.getCSSHeightText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.SCALE_X) || 
				elementProperty.equalsIgnoreCase(ElementProperty.SCALE_Y) ) {
					
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ROTATION)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_X)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.REG_Y)) {
			
			htmlElement.style.transform = super.getCSSTransformText();
			htmlElement.style.left = super.getCSSLeftText();
			htmlElement.style.top = super.getCSSTopText(); 
			htmlElement.style.transformOrigin = super.getCSSTransformOriginText(); 
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.ID)) {
			
			htmlElement.id = super.getCSSIDText();
			
		}else if(elementProperty.equalsIgnoreCase(ElementProperty.COLOR)) {
			
			//Text text = (Text)renderObject;
			//Color color = text.getColor();
			
			//htmlElement.style.color = getCSSColorText(color);
			
		}
		
		
	}
	
	*/
	
	
	/*private Element getElement() {
		Element element = ((RenderElement) super.renderElement).getElement();
		return element;
	}*/
	
	
		
}