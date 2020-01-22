package splashjs.render.media;

import def.dom.HTMLAudioElement;
import static def.dom.Globals.document;
import def.js.Promise;

import splashjs.events.Event;
import splashjs.render.RenderElement;
import splashjs.render.display.DisplayObjectRenderer;

import splashjs.media.iface.ISound;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IEventDispatcher;


public class SoundRenderer extends DisplayObjectRenderer {
	
	private HTMLAudioElement htmlAudioElement;

	public SoundRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlAudioElement = (HTMLAudioElement)document.createElement("audio");
		//htmlAudioElement.id = renderObject.getUniqueID();
		super.setRenderElement(new RenderElement(htmlAudioElement));
		htmlAudioElement.addEventListener("canplaythrough", (event) -> {
			htmlAudioElement.controls = true;
			//getHTMLAudioElement().autoplay = true;
			IEvent loadedEvent = new splashjs.events.Event(Event.LOADED, super.getRenderObject(), super.getRenderObject());
			super.getRenderObject().dispatchEvent(loadedEvent);
		});
		
		htmlAudioElement.addEventListener("click", (event) -> {
			System.out.println("sound clicked");
		});
		create();
	}
	
	public void create() {
		setSoundPath();
		document.body.appendChild(htmlAudioElement);
		//super.getRenderObject().getStage().getRenderer().appendChild(this);
		super.setDisplay("none");
	}
	
	public void setSoundPath() {
		String soundPath = ((ISound)super.getRenderObject()).getSoundPath();
		//htmlAudioElement.src = SOUNDS_FOLDER_PATH + soundPath;
		htmlAudioElement.src = soundPath;
	}
	
	
	public void playSound() {
		
		String js = "var playPromise = document.getElementById(\"" + super.getRenderObjectID() + "\").play();";
			js += "if(playPromise !== undefined) {";
			js +=	"playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
			js += "}";
			
		def.js.Globals.eval(js);
		
		//htmlAudioElement.play();
			

	}
	
	public void pauseSound() {
		htmlAudioElement.pause();
	}
	
	private HTMLAudioElement getHTMLAudioElement() {
		return (HTMLAudioElement) super.getDOMElement();
	}
}