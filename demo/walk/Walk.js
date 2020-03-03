//import MyCircle from "./MyCircle";
import splashjs from "./bundle";
import walkCyclePNG from "./walk.png";

var Transition = splashjs.animation.Transition;
var TransitionType = splashjs.animation.TransitionType;
var Linear = splashjs.animation.easing.Linear;
var Event = splashjs.events.Event;
var Color = splashjs.utils.Color;
var ResourceLoader = splashjs.utils.ResourceLoader;
var Resource = splashjs.utils.Resource;
var ResourceType = splashjs.utils.ResourceType;
var Shape = splashjs.display.Shape;

export default class Walk extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		
		this.spriteSheet = new splashjs.animation.SpriteSheet(walkCyclePNG);
		this.spriteSheet.defineMovieClip("walk", 291, 477, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);
		this.walkMovieClip = this.spriteSheet.getMovieClip("walk");
		this.walkMovieClip.setXY(270, 195);
		this.walkMovieClip.setRegXY(145, 238);
		this.walkMovieClip.setScaleXY(0.8, 0.8);
		this.walkMovieClip.setFrameRate(24);
		this.walkMovieClip.gotoAndPlay("walk", 0);
		this.addChild(this.walkMovieClip);
		
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			
		});
	}
	
	
	
}





