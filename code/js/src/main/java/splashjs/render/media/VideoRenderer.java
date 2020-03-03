package splashjs.render.media;

import def.dom.HTMLVideoElement;
import static def.dom.Globals.document;
import static def.js.Globals.eval;
import splashjs.def.webrtc.MediaStream;



import splashjs.events.Event;
import splashjs.render.RenderElement;
import splashjs.render.display.DisplayObjectRenderer;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IEventDispatcher;
import splashjs.media.iface.IVideo;
import splashjs.media.iface.ICamera;
import splashjs.render.media.iface.ICameraRenderer;
import splashjs.render.media.iface.IVideoRenderer;


public class VideoRenderer extends DisplayObjectRenderer implements IVideoRenderer {

	private HTMLVideoElement videoElement;
	private IVideo video;
	
	public VideoRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		video = (IVideo)renderObject;
		videoElement = (HTMLVideoElement)document.createElement("video");
		super.setRenderElement(new RenderElement(videoElement));
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
			
		java.lang.String js = "var playPromise = " + super.getRenderObjectID() + ".play();";
			js += "if(playPromise !== undefined) {";
			js +=	"playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
			js += "}";
			
		def.js.Globals.eval(js);
	}
	
	public void attachCamera(ICamera camera) {
		MediaStream mediaStream = ((ICameraRenderer)camera.getRenderer()).getMediaStream();
		eval("this.videoElement.srcObject = mediaStream");
	}
	
	private HTMLVideoElement getHTMLVideoElement() {
		return (HTMLVideoElement) super.getDOMElement();
	}
	
	public void applyCSS() {
		super.applyCSS();
		videoElement.style.width = video.getWidth() + UNIT;
		videoElement.style.height = video.getHeight() + UNIT;
	}
}