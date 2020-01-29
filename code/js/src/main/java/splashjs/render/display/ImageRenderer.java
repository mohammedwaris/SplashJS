package splashjs.render.display;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLImageElement;
import static def.dom.Globals.document;

import splashjs.render.RenderElement;

import splashjs.display.iface.IImage;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.iface.IImageRenderer;

public class ImageRenderer extends InteractiveObjectRenderer {
	
	private HTMLImageElement htmlImageElement;

	public ImageRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlImageElement = (HTMLImageElement)document.createElement("img");
		super.setRenderElement (new RenderElement(htmlImageElement));
		create();
	}
	
	public void create() {
		setImagePath();
	}
	
	public void setImagePath() {
		//htmlImageElement.src = super.IMAGES_FOLDER_PATH + ((IImage) super.getRenderObject()).getImagePath();
		String imagePath = ((IImage) super.getRenderObject()).getImagePath();
		if(imagePath != null && !imagePath.isEmpty()) 
			htmlImageElement.src = imagePath;
	}
	
	public int getOriginalWidth() {
		return (int)htmlImageElement.naturalWidth;
	}
	
	public int getOriginalHeight() {
		return (int)htmlImageElement.naturalHeight;
	}
	

	
	
	
	
}//end of class