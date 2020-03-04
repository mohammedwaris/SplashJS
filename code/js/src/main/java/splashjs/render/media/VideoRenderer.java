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
import splashjs.net.iface.INetStream;


public class VideoRenderer extends MediaRenderer implements IVideoRenderer {

	private HTMLVideoElement htmlVideoElement;
	private IVideo video;
	
	public VideoRenderer(IEventDispatcher renderObject) {
		
		video = (IVideo)renderObject;
		htmlVideoElement = (HTMLVideoElement)document.createElement("video");
		super.setRenderObject(renderObject);
		super.setRenderElement(new RenderElement(htmlVideoElement));
		
	}
	
	public void createEventListeners() {
		super.createEventListeners();
		
		htmlVideoElement.addEventListener("canplaythrough", (event) -> {
			htmlVideoElement.controls = true;
			IEvent loadedEvent = new splashjs.events.Event(Event.LOADED, video, video);
			video.dispatchEvent(loadedEvent);
		});
		
	}
	
	@Override
	public void setPath() {
		String videoPath = ((IVideo)super.getRenderObject()).getPath();
		//htmlAudioElement.src = SOUNDS_FOLDER_PATH + soundPath;
		htmlVideoElement.src = videoPath;
	}
	
	
	
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
	
	public void attachNetStream(INetStream netStream) {
		
	}
	
	private HTMLVideoElement getHTMLVideoElement() {
		return (HTMLVideoElement) super.getDOMElement();
	}
	
	public void applyCSS() {
		super.applyCSS();
		htmlVideoElement.style.width = video.getWidth() + UNIT;
		htmlVideoElement.style.height = video.getHeight() + UNIT;
	}
}