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


public class DesktopVideoRenderer extends DesktopInteractiveObjectRenderer implements IVideoRenderer {


	public DesktopVideoRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.webEngine = webEngine;
		super.renderObject = renderObject;
		super.renderObjectID = renderObject.getUniqueID();
	
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"video\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
			   js += super.getRenderObjectID() + ".controls = true;";
			   js += super.getRenderObjectID() + ".muted = true;";
			   js += super.getRenderObjectID() + ".addEventListener('canplaythrough', function(){console.log('video loaded');});";
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		this.renderElement = new DesktopRenderElement((HTMLElement)webEngine.executeScript(js));
		/*
		getHTMLAudioElement().addEventListener("click", (event) -> {
			System.out.println("sound clicked");
		});*/
	}
	
	public void setProperty(String elementProperty) {
		super.setProperty(elementProperty);
		
		String js = "";
		if(elementProperty.equalsIgnoreCase(ElementProperty.SRC)) {
			js = super.getRenderObjectID() + ".src = \"" + VIDEOS_FOLDER_PATH + ((IVideo)super.getRenderObject()).getVideoPath() + "\";\r\n";
			//js += super.getRenderObjectID() + ".muted = true;";
			//js += super.getRenderObjectID() + ".load();";
			//js += "setTimeout(function(){" + js +"}, 10000);";
			//js =  js = super.getRenderObjectID() + ".src = 'file:/C:/Users/mwaris/Desktop/flashjs_sdk/dino/abc.mp3';";
		}
		
		System.out.println(js);
		webEngine.executeScript(js);
	}
	
	public void playVideo() {
		String js = "var playPromise = document.getElementById(\"" + super.getRenderObjectID() + "\").play();";
			js += "if(playPromise !== undefined) {";
			js +=	"playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
			js += "}";
		
		System.out.println(js);
		//String js = super.getRenderObjectID() + ".play();";
			//document.body.click();
			//getDesktopDOMElement().play();
		webEngine.executeScript(js);

	}
	
	/*private HTMLAudioElement getHTMLAudioElement() {
		return (HTMLAudioElement) super.getDesktopDOMElement();
	}*/
}