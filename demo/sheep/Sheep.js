var Transition = splashjs.animation.Transition;
var TransitionType = splashjs.animation.TransitionType;
var Linear = splashjs.animation.easing.Linear;
var Event = splashjs.events.Event;
var Color = splashjs.utils.Color;
var ResourceLoader = splashjs.utils.ResourceLoader;
var Resource = splashjs.utils.Resource;
var ResourceType = splashjs.utils.ResourceType;

class Sheep extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.spriteSheet = new splashjs.animation.SpriteSheet("sheep_idle.png");
		this.spriteSheet.defineMovieClip("idle", 67, 58, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38);
		this.walkMovieClip = this.spriteSheet.getMovieClip("idle");
		this.walkMovieClip.setFrameRate(24);
		this.walkMovieClip.gotoAndPlay("idle", 0);
		this.addChild(this.walkMovieClip);
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			
		});
	}
	
}
