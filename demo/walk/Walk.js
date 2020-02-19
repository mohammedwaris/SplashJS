var Transition = splashjs.animation.Transition;
var TransitionType = splashjs.animation.TransitionType;
var Linear = splashjs.animation.easing.Linear;
var Event = splashjs.events.Event;
var Color = splashjs.utils.Color;
var ResourceLoader = splashjs.utils.ResourceLoader;
var Resource = splashjs.utils.Resource;
var ResourceType = splashjs.utils.ResourceType;
var Shape = splashjs.display.Shape;

class Walk extends splashjs.display.Sprite {
	
	constructor() {
		super();
		console.log("Walk class constructor called");
		this.imageResource = new Resource("walk", "walk.png", ResourceType.IMAGE);
		this.rl = new ResourceLoader();
		this.rl.addResource(this.imageResource);
		this.rl.addEventListener(splashjs.events.Event.COMPLETE, (event) => {
			this.resourceLoaded(event);
		});
		this.rl.loadAll();
		this.spriteSheet = new splashjs.animation.SpriteSheet("walk.png");
		this.spriteSheet.defineMovieClip("walk", 291, 477, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);
		this.walkMovieClip = this.spriteSheet.getMovieClip("walk");
		this.walkMovieClip.setXY(270, 195);
		this.walkMovieClip.setRegXY(145, 238);
		this.walkMovieClip.setScaleXY(0.8, 0.8);
		this.walkMovieClip.setFrameRate(24);
		this.walkMovieClip.gotoAndPlay("walk", 0);
		this.addChild(this.walkMovieClip);
		
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			console.log("Walk class added to stage called");
			console.log(this.walkMovieClip);
		});
	}
	
	resourceLoaded(event) {
		console.log("r loaded");
	}
	
}

var stage = new splashjs.display.Stage("myDiv", 550, 400);
stage.addChild(new Walk());
