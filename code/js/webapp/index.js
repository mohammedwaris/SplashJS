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
var Video = splashjs.media.Video;
var BitmapData = splashjs.display.BitmapData;
var Bitmap = splashjs.display.Bitmap;
var PermissionStatus = splashjs.permissions.PermissionStatus
//var Sprite = splashjs.display.Sprite;
//var Shape = splashjs.display.Shape;


class StageColor extends splashjs.display.Sprite {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.getStage().setScaleMode(splashjs.display.StageScaleMode.NO_SCALE);
			this.getStage().setAlign(splashjs.display.StageAlign.TOP_LEFT);
			this.getStage().setColor(splashjs.utils.Color.TOMATO);
			this.getStage().addEventListener(splashjs.events.Event.RESIZE, (event) => {
				console.log(this.getStage().getWidth() , this.getStage().getStageWidth());
				console.log(this.getStage().getHeight() , this.getStage().getStageHeight());
				this.getStage().setScaleX(this.getStage().getStageWidth()/this.getStage().getWidth());
				this.getStage().setScaleY(this.getStage().getStageHeight()/this.getStage().getHeight());
			});
		});
	}
}

/*













class index extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.circle = splashjs.display.Shape.createCircle(20);
		this.circle.setFillColor(Color.GREEN);
		this.sprite = new splashjs.display.Sprite();
		this.sprite.addChild(this.circle);
		
		this.sprite.addEventListener(splashjs.events.MouseEvent.MOUSE_DOWN, (event) => {
			this.sprite.startDrag();
		});
		this.sprite.addEventListener(splashjs.events.MouseEvent.MOUSE_UP, (event) => {
			this.sprite.stopDrag();
		});
		this.addChild(this.sprite);
		
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});
		
		
	}
	
	addedToStage(event) {
		//var userClass = new splashjs.Package.packageData[0].clazz();
		//console.log(com.silverbrain);
		this.getStage().setScaleMode(splashjs.display.StageScaleMode.SHOW_ALL);
		//event.getCurrentTarget().getStage().addChild(this.sprite);
	}
	
	
	
}
*/
