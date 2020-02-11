var Transition = splashjs.animation.Transition;
var TransitionType = splashjs.animation.TransitionType;
var Linear = splashjs.animation.easing.Linear;
var Event = splashjs.events.Event;
var Color = splashjs.utils.Color;
var ResourceLoader = splashjs.utils.ResourceLoader;
var Resource = splashjs.utils.Resource;
var ResourceType = splashjs.utils.ResourceType;
var InputText = splashjs.text.InputText;
var FontWeight = splashjs.text.FontWeight;
var FontSize = splashjs.text.FontSize;
var URLLoader = splashjs.net.URLLoader;
var URLRequest = splashjs.net.URLRequest;
var URLRequestMethod = splashjs.net.URLRequestMethod;
var URLLoaderDataFormat = splashjs.net.URLLoaderDataFormat;
var URLVariable = splashjs.net.URLVariable;
var Camera = splashjs.media.Camera;

class index extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		
		this.camera = Camera.getCamera();
		
		/*
		this.urlLoader = new URLLoader(new URLRequest("https://mdn.mozillademos.org/files/12676/star.svg"));
		this.urlLoader.setDataFormat(URLLoaderDataFormat.TEXT);
		this.urlLoader.addEventListener(Event.COMPLETE, (event) => {
			console.log(this.urlLoader.getData());
		});
		this.urlLoader.load();
		*/
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			
		});
	}
	
}
