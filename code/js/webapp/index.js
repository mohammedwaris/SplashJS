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

class Demo extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.inText = new InputText("ss");
		this.inText.setPlaceholder("Type...");
		this.inText.setFontWeight(FontWeight.BOLD);
		this.inText.setFontSize(18);
		this.addChild(this.inText);
		
		
		
		
		//this.walkMovieClip.addFilter(new splashjs.filters.BlurFilter(2)); 
		//this.filter = new splashjs.filters.DropShadowFilter(0, 0, 5, Color.RED);
		//this.walkMovieClip.addFilter(this.filter);
		//this.walkMovieClip.addFilter(new splashjs.filters.SepiaFilter(2)); 
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			console.log(this.inText.getWidth(), this.inText.getHeight());
		});
	}
	
	resourceLoaded = (event) => {
		
		
	};
	
	
	
}
