import splashjs from "./bundle";

var Sprite = splashjs.display.Sprite;
var Camera = splashjs.media.Camera;
var Video = splashjs.media.Video;
var PermissionEvent = splashjs.events.PermissionEvent;
var Event = splashjs.events.Event;

export default class CameraDemo extends Sprite {
	
	constructor() {
		super();
		
		this.addEventListener(Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});

	}
		

	addedToStage(event) {
		this.video = new Video(this.getStage().getWidth(), this.getStage().getHeight());
		this.camera = Camera.getCamera();
		this.camera.addEventListener(PermissionEvent.PERMISSION_STATUS, (event) => {
			this.video.attachCamera(this.camera);
		});
		this.camera.requestPermission();
		this.addChild(this.video);
	}

}