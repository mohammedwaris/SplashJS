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

class Demo extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.urlLoader = new URLLoader(new URLRequest("man_walk.png"));
		this.urlLoader.load();
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			
		});
	}
	
	
	
	
	
}
