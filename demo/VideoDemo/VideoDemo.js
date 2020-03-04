import splashjs from "./bundle";


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
var Shape = splashjs.display.Shape;
var NetConnection = splashjs.net.NetConnection;
var NetStream = splashjs.net.NetStream;


export default class VideoDemo extends Sprite {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.init();
		});
	}
	
	init() {
		this.netConnection = new NetConnection();
		this.netStream = new NetStream(this.netConnection);
		this.video = new Video(this.getStage().getStageWidth(), this.getStage().getStageHeight());
		this.video.attachNetStream(this.netStream);
		this.addChild(this.video);
		this.netStream.play("river_cross.mp4");
		
	}
}

