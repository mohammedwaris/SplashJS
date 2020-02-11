package splashjs.render.media;

import def.dom.HTMLVideoElement;
import static def.dom.Globals.document;
import def.js.Promise;


import splashjs.events.Event;
import splashjs.render.RenderElement;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IEventDispatcher;
import splashjs.media.iface.*;


public class VideoRenderer extends DisplayObjectRenderer {

	private HTMLVideoElement videoElement;
	
	public VideoRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		videoElement = (HTMLVideoElement)document.createElement("video");
		super.renderElement = new RenderElement(videoElement);
		getHTMLVideoElement().addEventListener("canplaythrough", (event) -> {
			getHTMLVideoElement().controls = true;
			//getHTMLAudioElement().autoplay = true;
			IEvent loadedEvent = new splashjs.events.Event(Event.LOADED, super.getRenderObject(), super.getRenderObject());
			super.getRenderObject().dispatchEvent(loadedEvent);
		});
		
		getHTMLVideoElement().addEventListener("click", (event) -> {
			System.out.println("video clicked");
		});
	}
	
	/*
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		if(elementProperty.equalsIgnoreCase(ElementProperty.SRC)) {
			getHTMLVideoElement().src = VIDEOS_FOLDER_PATH + ((IVideo)super.getRenderObject()).getVideoPath();
		}
		
	}*/
	
	public void playVideo() {
			
		String js = "var playPromise = " + super.getRenderObjectID() + ".play();";
			js += "if(playPromise !== undefined) {";
			js +=	"playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
			js += "}";
			
		def.js.Globals.eval(js);
	}
	
	public void attachCamera(ICamera camera) {
		
	}
	
	private HTMLVideoElement getHTMLVideoElement() {
		return (HTMLVideoElement) super.getDOMElement();
	}
}