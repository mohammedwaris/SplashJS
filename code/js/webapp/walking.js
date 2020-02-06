var Transition = splashjs.animation.Transition;
var TransitionType = splashjs.animation.TransitionType;
var Linear = splashjs.animation.easing.Linear;
var Event = splashjs.events.Event;
var Color = splashjs.utils.Color;
var ResourceLoader = splashjs.utils.ResourceLoader;
var Resource = splashjs.utils.Resource;
var ResourceType = splashjs.utils.ResourceType;

class WalkScene extends splashjs.display.Scene {
	
	constructor() {
		super();
		this.spriteSheet;
		this.walkMovieClip;
		
		/*
		this.rl = new ResourceLoader();
		this.rs = new Resource("man_walk", "man_walk.png", ResourceType.IMAGE);
		this.rl.addResource(this.rs);
		this.rl.addEventListener(splashjs.events.Event.LOAD, this.resourceLoaded);
		this.rl.loadAll();*/
		
		
		
		
		//this.walkMovieClip.addFilter(new splashjs.filters.BlurFilter(2)); 
		//this.filter = new splashjs.filters.DropShadowFilter(0, 0, 5, Color.RED);
		//this.walkMovieClip.addFilter(this.filter);
		//this.walkMovieClip.addFilter(new splashjs.filters.SepiaFilter(2)); 
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			
			
			this.spriteSheet = new splashjs.animation.SpriteSheet("man_walk.png");
			this.spriteSheet.defineMovieClip("walk", 291, 477, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);
			this.walkMovieClip = this.spriteSheet.getMovieClip("walk");
			this.walkMovieClip.setXY(200, 150);
			this.walkMovieClip.setRegXY(145, 238);
			this.walkMovieClip.setScaleXY(0.5, 0.5);
			this.walkMovieClip.setFrameRate(18);
			this.walkMovieClip.gotoAndPlay("walk", 0);
			this.addChild(this.walkMovieClip);
			
			
			//console.log(this.walkMovieClip.hasFilter(this.filter));
			//this.getStage().setColor(Color.BLACK);
			
			
			
			//this.walkMovieClip.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => {
				//this.walkMovieClip.stop();
				//console.log(this.walkMovieClip.getCurrentFrameIndex())
			//});
			//this.walkMovieClip.addEventListener(splashjs.events.MouseEvent.MOUSE_DOWN, (event) => {
				//this.startDrag();
			//});
			//this.walkMovieClip.addEventListener(splashjs.events.MouseEvent.MOUSE_UP, (event) => {
				//this.stopDrag();
			//});
		});
	}
	
	resourceLoaded = (event) => {
		
		
	};
	
	
	
}
