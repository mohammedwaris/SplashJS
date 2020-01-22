package flashjs.render.media.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.media.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.render.media.*;
import flashjs.render.desktop.*;
import flashjs.render.display.desktop.*;


public class DesktopSoundRenderer extends DesktopInteractiveObjectRenderer implements ISoundRenderer {

	//private HTMLAudioElement htmlAudioElement;
	private String htmlAudioElementID;

	public DesktopSoundRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setWebEngine(webEngine);
		super.setRenderObject(renderObject);
		
		htmlAudioElementID = super.getRenderObjectID();
	
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"audio\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
			   js += super.getRenderObjectID() + ".controls = true;";
			   js += super.getRenderObjectID() + ".addEventListener('canplaythrough', function(){console.log('sound loaded');});";
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		this.setRenderElement(new DesktopRenderElement((HTMLElement)webEngine.executeScript(js)));
		
	}
	
	public void create() {
		super.getRenderObject().getStage().getRenderer().appendChild(this);
		super.setDisplay("none");
	}
	
	public void setSoundPath() {
		String soundPath = ((ISound)super.getRenderObject()).getSoundPath();
		js = super.getRenderObjectID() + ".src = \"" + SOUNDS_FOLDER_PATH + soundPath + "\";";
		webEngine.executeScript(js);
	}
	
	/*
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		
		String js = "";
		if(elementProperty.equalsIgnoreCase(ElementProperty.SRC)) {
			js = super.getRenderObjectID() + ".src = \"" + SOUNDS_FOLDER_PATH + ((ISound)super.getRenderObject()).getSoundPath() + "\";\r\n";
			js += super.getRenderObjectID() + ".load();";
			//js =  js = super.getRenderObjectID() + ".src = 'file:/C:/Users/mwaris/Desktop/flashjs_sdk/dino/abc.mp3';";
		}
		
		System.out.println(js);
		webEngine.executeScript(js);
	}*/
	
	/*
	public void playSound() {
		
		String js = super.getRenderObjectID() + ".play();";
			//document.body.click();
			//getDesktopDOMElement().play();
		webEngine.executeScript(js);

	}*/
	
	public void playSound() {
		js = "var playPromise = document.getElementById(\"" + htmlAudioElementID + "\").play();";
			js += "if(playPromise !== undefined) {";
			js +=	"playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
			js += "}";
			
		webEngine.executeScript(js);
			

	}
	
	public void pauseSound() {
		js = htmlAudioElementID + ".pause();";
		webEngine.executeScript(js);
	}
	
	
}