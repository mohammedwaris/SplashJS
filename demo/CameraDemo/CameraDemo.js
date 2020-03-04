import splashjs from "./bundle";

var Sprite = splashjs.display.Sprite;
var Camera = splashjs.media.Camera;
var Video = splashjs.media.Video;
var PermissionEvent = splashjs.events.PermissionEvent;
var Event = splashjs.events.Event;

export default class CameraDemo extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});

	}
		

	addedToStage(event) {
		this.stage = this.getStage();
		this.stage.setColor(splashjs.utils.Color.TOMATO);
		this.stage.setAlign(splashjs.display.StageAlign.TOP_LEFT);
		this.stage.setScaleMode(splashjs.display.StageScaleMode.NO_SCALE);
		this.video = new Video(this.getStage().getWidth(), this.getStage().getHeight());
		this.camera = Camera.getCamera();
		this.camera.addEventListener(PermissionEvent.PERMISSION_STATUS, (event) => {
			this.video.attachCamera(this.camera);
		});
		this.camera.requestPermission();
		this.addChild(this.video);
		this.stage.addEventListener(splashjs.events.Event.RESIZE, (event) => {
			this.handleResize(event);
		});
	}
	
	handleResize(event) {
		
		this.stage.setScaleX(this.stage.getStageWidth()/this.stage.getWidth());
		this.stage.setScaleY(this.stage.getStageHeight()/this.stage.getHeight());
		this.video.setWidth(this.stage.getStageWidth());
		this.video.setHeight(this.stage.getStageHeight());
	}

}