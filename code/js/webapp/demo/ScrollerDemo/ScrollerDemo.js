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
var Image = splashjs.display.Image;
var StageScaleMode = splashjs.display.StageScaleMode;

var PermissionStatus = splashjs.permissions.PermissionStatus
var Sprite = splashjs.display.Sprite;
var Shape = splashjs.display.Shape;
var NetConnection = splashjs.net.NetConnection;
var NetStream = splashjs.net.NetStream;
var VBoxLayout = splashjs.layout.VBoxLayout;
var HBoxLayout = splashjs.layout.HBoxLayout;
var HAlign = splashjs.layout.HAlign;
var Spacer = splashjs.controls.Spacer;
var Button = splashjs.controls.Button;
var List = splashjs.controls.List;
var Item = splashjs.controls.Item;
var TextInput = splashjs.controls.TextInput;
var Scroller = splashjs.controls.Scroller;

class ScrollerDemo extends Sprite {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});
	}
	
	addedToStage(event) {
		
		this.scroller = new Scroller();
		this.scroller.setWidth(220);
		this.scroller.setHeight(150);
		
		this.image = new Image("dog.jpg");
		
		this.scroller.setContent(this.image);
		
		this.addChild(this.scroller);
		
	}
}

