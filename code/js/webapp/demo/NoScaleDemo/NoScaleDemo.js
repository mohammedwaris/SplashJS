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
var StaticText = splashjs.text.StaticText;
var URLLoader = splashjs.net.URLLoader;
var URLRequest = splashjs.net.URLRequest;
var URLRequestMethod = splashjs.net.URLRequestMethod;
var URLLoaderDataFormat = splashjs.net.URLLoaderDataFormat;
var URLVariable = splashjs.net.URLVariable;
var Camera = splashjs.media.Camera;
var Video = splashjs.media.Video;

var BitmapData = splashjs.display.BitmapData;
var Bitmap = splashjs.display.Bitmap;
var StageScaleMode = splashjs.display.StageScaleMode;
var StageAlign = splashjs.display.StageAlign;

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

class MyList extends List {

	constructor() {
		super();
		this.addItem(new Item("Item 1", "item1"));
		this.addItem(new Item("Item 2", "item2"));

	}
}


class NoScaleDemo extends Sprite {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});
	}
	
	addedToStage(event) {
		
		this.stage = this.getStage();
		this.stage.setColor(Color.TOMATO);
		this.stage.setAlign(StageAlign.TOP_LEFT);
		this.stage.setScaleMode(StageScaleMode.NO_SCALE);
		
		this.staticText = new StaticText();
		this.wd = this.stage.getWidth();
		this.ht = this.stage.getHeight();
		this.stage_wd = this.stage.getStageWidth();
		this.stage_ht = this.stage.getStageHeight();
		this.staticText.setText(`width:${this.wd}, height:${this.ht}, stageWidth:${this.stage_wd}, stageHeight:${this.stage_ht}`);
		this.stage.addEventListener(Event.RESIZE, (event) => {
			this.wd = this.stage.getWidth();
			this.ht = this.stage.getHeight();
			this.stage_wd = this.stage.getStageWidth();
			this.stage_ht = this.stage.getStageHeight();
			this.staticText.setText(`width:${this.wd}, height:${this.ht}, stageWidth:${this.stage_wd}, stageHeight:${this.stage_ht}`);
		});
		
		
		this.addChild(this.staticText);
		this.circle1 = Shape.createCircle(30);
		this.circle1.setStrokeColor(Color.GREEN);
		this.circle1.setFillColor(Color.YELLOW);
		
		this.circle2 = Shape.createCircle(30);
		this.circle2.setStrokeColor(Color.GREEN);
		this.circle2.setFillColor(Color.YELLOW);

		this.circle1.setXY(60, 0);
		//this.addChild(this.circle1);
		//this.addChild(this.circle2);
		
		//this.setXY(100, 100);
	}
}