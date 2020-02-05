package splashjs.render.animation;

import def.dom.HTMLSpanElement;
import def.dom.HTMLImageElement;
import def.dom.FileReader;
import static def.dom.Globals.document;
import static def.dom.Globals.btoa;
import def.dom.XMLHttpRequest;
import def.js.Promise;
import def.dom.Blob;

import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.animation.iface.ISpriteSheetRenderer;
import splashjs.animation.iface.ISpriteSheet;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IMovieClip;
import splashjs.display.iface.IImage;
import splashjs.display.Image;
import splashjs.animation.iface.ISpriteData;
import splashjs.animation.iface.IMovieClipData;
import splashjs.animation.iface.IFrame;
import splashjs.display.Sprite;
import splashjs.display.MovieClip;

public class SpriteSheetRenderer extends EventDispatcherRenderer implements ISpriteSheetRenderer {

	private ISpriteSheet spriteSheet = null;
	private HTMLImageElement imageElement = null;
	private int width = 0;
	private int height = 0;
	

	
	public SpriteSheetRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		spriteSheet = (ISpriteSheet)super.getRenderObject();
		imageElement  = (HTMLImageElement)document.createElement("img");
		imageElement.src = spriteSheet.getImagePath();
		imageElement.addEventListener("load", (event) -> {
			width = (int)imageElement.naturalWidth;
			height = (int)imageElement.naturalHeight;
		});
		
		XMLHttpRequest xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.responseType = "blob";
		xmlHttpRequest.addEventListener("load", (event) -> {
			FileReader fileReader = new FileReader();
			fileReader.addEventListener("load", (fevent) -> {
				//System.out.println(fevent);
				spriteSheet.setImageBase64((String)fileReader.result);
			});
			fileReader.readAsDataURL((def.dom.Blob)xmlHttpRequest.response);
			
				
			
			
		});
		xmlHttpRequest.open("get", spriteSheet.getImagePath());
		xmlHttpRequest.send();
	}
	
	public ISprite getSprite(String label) {
		ISpriteData spriteData = ((ISpriteSheet)super.getRenderObject()).getSpriteDataByLabel(label);
		String imagePath = spriteData.getSpriteSheet().getImagePath();
		IFrame frame = spriteData.getFrame();
		int x = frame.getX();
		int y = frame.getY();
		int width = frame.getWidth();
		int height = frame.getHeight();
		ISprite sprite = new Sprite();
		HTMLSpanElement spanElement = (HTMLSpanElement)sprite.getRenderer().getDOMElement();
		spanElement.style.width = width + UNIT;
		spanElement.style.height = height + UNIT;
		spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
		spanElement.style.backgroundPosition = "-" + x + UNIT + " " + "-" + y + UNIT;
		ISprite parentSprite = new Sprite();
		parentSprite.addChild(sprite);
		return parentSprite;
	}
	
	public IMovieClip getMovieClip(String label) {
		IMovieClip movieClip = new MovieClip(spriteSheet.getMovieClipDataByLabel(label));
		return movieClip;
	}
	
	public int getWidth() {
		return width;
	}
	
	public int getHeight() {
		return height;
	}
}