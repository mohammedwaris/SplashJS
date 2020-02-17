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
var Sprite = splashjs.display.Sprite;

class index extends splashjs.display.Sprite {
	
	constructor() {
		super();
		
		this.camera;
		this.video = new splashjs.media.Video(240, 180);
		this.video.setXY(100, 100);
		this.showButton = new splashjs.controls.Button("Start Webcam");
		this.showButton.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => {
			this.showButtonClicked(event);
		});
		this.hideButton = new splashjs.controls.Button("Show/Hide Webcam");
		this.hideButton.setY(50);
		this.hideButton.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => {
			this.video.setVisible(!this.video.getVisible());
		});
		this.takePicture = new splashjs.controls.Button("Take Picture");
		this.takePicture.setX(200);
		this.takePicture.addEventListener(splashjs.events.MouseEvent.CLICK, (event) => {
			this.takePictureClicked(event);
		});
		this.addChild(this.showButton);
		this.camera = Camera.getCamera();
		this.camera.addEventListener(splashjs.events.PermissionEvent.PERMISSION_STATUS, (event) => {
			this.permissionStatusRecieved(event);
		});
		this.bitmapData = new BitmapData(240, 180);
		this.sprite = new Sprite();
		this.sprite.setDraggable(true);
		this.sprite.addEventListener(splashjs.events.MouseEvent.MOUSE_DOWN, (event) => {
			console.log("down");
			this.sprite.startDrag();
		});
		this.sprite.addEventListener(splashjs.events.MouseEvent.MOUSE_UP, (event) => {
			this.sprite.stopDrag();
			console.log("up");
		});
			
			
		
		
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
	
	permissionStatusRecieved(event) {
		if(event.getStatus() === PermissionStatus.GRANTED) {
		//setTimeout(() => {
		this.addChild(this.hideButton);
		this.addChild(this.takePicture);
		this.video.attachCamera(this.camera);
		this.addChild(this.video);
		//}, 5000);
		}else{
			console.log("Permission: " + event.getStatus());
		}
	}
	
	showButtonClicked(event) {
		this.camera.requestPermission();
		
	}
	
	takePictureClicked(event) {
		this.bitmapData.draw(this.video);
		console.log(this.bitmapData);
		setTimeout(() => {
			this.sprite.addChild(new Bitmap(this.bitmapData));
			this.addChild(this.sprite);
		}, 5000);
	}
	
}
