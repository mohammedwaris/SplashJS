package flashjs.application.desktop;

import netscape.javascript.JSObject;

import java.util.function.Consumer;
import java.util.ArrayList;

import flashjs.display.*;
import flashjs.display.impl.*;
import flashjs.events.*;
import flashjs.controls.*;
import flashjs.controls.impl.*;
import flashjs.application.base.*;
import flashjs.application.*;
import flashjs.events.impl.*;
import flashjs.media.*;
import flashjs.media.impl.*;
import flashjs.sdk.*;
import flashjs.text.impl.*;
import flashjs.net.*;
import flashjs.net.impl.*;

import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.display.desktop.*;
import flashjs.render.controls.desktop.*;
import flashjs.render.text.desktop.*;
import flashjs.render.media.desktop.*;
import flashjs.render.net.desktop.*;
import flashjs.render.application.desktop.*;


public class DesktopStageOwner extends BaseStageOwner  implements IDesktopStageOwner {
	
	public static String baseURL = "";
	
	private javafx.stage.Stage stage = new javafx.stage.Stage();
	private javafx.scene.web.WebEngine webEngine;
	private IStageOwner self;
	
	public DesktopStageOwner(String stageOwnerName, int width, int height) {
		super(stageOwnerName);
		javafx.scene.web.WebView webView = new javafx.scene.web.WebView();
		webEngine = webView.getEngine();
		webEngine.setJavaScriptEnabled(true);
		webEngine.loadContent(getHTMLText(stageOwnerName, width, height, baseURL, ""), "text/html");
		self = this;
		super.setWidth(width);
		super.setHeight(height);
		setRenderer(new DesktopStageOwnerRenderer(webEngine, self));
		setStage(new Stage(self, width, height));
		//super.setStageAsChild();

		javafx.scene.Scene scene = new javafx.scene.Scene(webView, width, height);
		stage.setScene(scene);

		
		webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {	
					
					getRenderer().appendToBody();
					setStageAsChild();

					getStage().getRenderer().createEventListeners();
					getStage().dispatchEvent(new flashjs.events.impl.Event(EventName.STAGE_READY));
					stage.show();
				}
			}
		});
		
		com.sun.javafx.webkit.WebConsoleListener.setDefaultListener(new com.sun.javafx.webkit.WebConsoleListener(){
			@Override
			public void messageAdded(javafx.scene.web.WebView webView, String message, int lineNumber, String sourceId) {
				System.out.println("Console: [" + sourceId + ":" + lineNumber + "] " + message);
			}
		});
		
		scene.widthProperty().addListener(new javafx.beans.value.ChangeListener<Number>() {
			@Override public void changed(javafx.beans.value.ObservableValue<? extends Number> observableValue, Number oldSceneWidth, Number newSceneWidth) {
				
				setWidth(newSceneWidth.intValue());
				getStage().dispatchEvent(new flashjs.events.impl.Event(EventName.RESIZE));
			}
		});
		scene.heightProperty().addListener(new javafx.beans.value.ChangeListener<Number>() {
			@Override public void changed(javafx.beans.value.ObservableValue<? extends Number> observableValue, Number oldSceneHeight, Number newSceneHeight) {
				
				setHeight(newSceneHeight.intValue());
				getStage().dispatchEvent(new flashjs.events.impl.Event(EventName.RESIZE));
			}
		});

		
	}

	public IRenderer createRenderer(Class clazz, IEventDispatcher renderObject) {
		
		IRenderer renderer = null;
		
		if(clazz == Stage.class)
			renderer = new DesktopStageRenderer(this.webEngine, renderObject);
		else if(clazz == Circle.class)
			renderer = new DesktopCircleRenderer(this.webEngine, renderObject);
		else if(clazz == Line.class)
			renderer = new DesktopLineRenderer(this.webEngine, renderObject);
		else if(clazz == Image.class)
			renderer = new DesktopImageRenderer(this.webEngine, renderObject);
		else if(clazz == Sprite.class) 
			renderer = new DesktopSpriteRenderer(this.webEngine, renderObject);
		else if(clazz == StaticText.class) 
			renderer = new DesktopStaticTextRenderer(this.webEngine, renderObject);
		else if(clazz == Sound.class) 
			renderer = new DesktopSoundRenderer(this.webEngine, renderObject);
		else if(clazz == Video.class) 
			renderer = new DesktopVideoRenderer(this.webEngine, renderObject);
		else if(clazz == SimpleButton.class) 
			renderer = new DesktopSimpleButtonRenderer(this.webEngine, renderObject);
		else if(clazz == FileReference.class) 
			renderer = new DesktopFileReferenceRenderer(this.webEngine, renderObject);
		else if(clazz == Label.class) 
			renderer = new DesktopLabelRenderer(this.webEngine, renderObject);
		else if(clazz == Button.class) 
			renderer = new DesktopButtonRenderer(this.webEngine, renderObject);
		else if(clazz == TextInput.class) 
			renderer = new DesktopTextInputRenderer(this.webEngine, renderObject);
		else if(clazz == TextArea.class) 
			renderer = new DesktopTextAreaRenderer(this.webEngine, renderObject);
		else if(clazz == RadioButton.class) 
			renderer = new DesktopRadioButtonRenderer(this.webEngine, renderObject);
		else if(clazz == List.class) 
			renderer = new DesktopListRenderer(this.webEngine, renderObject);
		
		
		
		return renderer;
	}
	
	public javafx.stage.Stage getNativeWindow() {
		return this.stage;
	}
	
	public void setTitle(String title) {
		stage.setTitle(title);
	}
	
	private String getHTMLText(String stageOwnerName, int width, int height, String baseURL, String scriptPath) {
		String endch = "\r\n";
		String divStyle = " style='border:1px dotted blue;width:" + "100%" + ";height:" + "100%" + ";'";
		String divs = "<div id='" + stageOwnerName + "'" +  divStyle + "></div>";
		//String divs = "<p id='text'></p>\r\n";
		System.out.println("b " + baseURL);
		String cssText = "body {" + endch;
				cssText += "margin: 0;" + endch;
				cssText += "padding: 0;" + endch;
				cssText += "overflow: hidden;" + endch;
				cssText += "width: 100%;" + endch;
				cssText += "height: 100%;" + endch;
				cssText += "}" + endch;
		
		String scriptText = "<script type='text/javascript' src='flashjs-lib.js'></script>";
			   scriptText += "<script type='text/javascript' src='" + "dino.js" + "'></script>";
		String htmlText = "<!Doctype html>" + endch;
			   htmlText += "<html>" + endch;
			   htmlText += "<base href='" + baseURL + "'>" + endch;
			   htmlText += "<head>" + endch;
			   htmlText += "<style>" + endch;
			   htmlText += cssText + endch;
			   htmlText += "</style>" + endch;
			   htmlText += "</head>" + endch;
			   htmlText += "<body>" + endch;
			   //htmlText += "<audio id='sound' controls='' src='sounds/abc.mp3' style='position: absolute; display: inline-block; margin: 0px; padding: 0px; transform: scale(1, 1) skew(0deg, 0deg) rotate(0deg); left: 0px; top: 0px; transform-origin: 0px 0px; visibility: visible; opacity: 1; border: 1px solid blue;'></audio>";
			  // htmlText += divs + endch;
			  // htmlText += "<script>document.getElementById('sound').addEventListener('canplaythrough', function(){console.log('outer sound loaded');});</script>";
			   htmlText += "</body>" + endch;
			  // htmlText += scriptText + endch;
			   htmlText += "</html>";
			   
			   return htmlText;
	}
	

}