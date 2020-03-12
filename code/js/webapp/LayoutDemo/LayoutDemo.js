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
var StageScaleMode = splashjs.display.StageScaleMode;

var PermissionStatus = splashjs.permissions.PermissionStatus
var Sprite = splashjs.display.Sprite;
var Shape = splashjs.display.Shape;
var NetConnection = splashjs.net.NetConnection;
var NetStream = splashjs.net.NetStream;
var VBoxLayout = splashjs.layout.VBoxLayout;
var HBoxLayout = splashjs.layout.HBoxLayout;
var HAlign = splashjs.layout.HAlign;
var VAlign = splashjs.layout.VAlign;
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


class LayoutDemo extends Sprite {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.addedToStage(event);
		});
	}
	
	addedToStage(event) {
		
		//this.getStage().setScaleMode(StageScaleMode.NO_SCALE);
		
		
		this.circle1 = Shape.createCircle(30);
		this.circle1.setStrokeColor(Color.GREEN);
		this.circle1.setFillColor(Color.YELLOW);
		
		this.circle2 = Shape.createCircle(30);
		this.circle2.setStrokeColor(Color.GREEN);
		this.circle2.setFillColor(Color.YELLOW);
		
		this.circle3 = Shape.createCircle(30);
		this.circle3.setStrokeColor(Color.RED);
		this.circle3.setFillColor(Color.YELLOW);
		
		this.circle4 = Shape.createCircle(30);
		this.circle4.setStrokeColor(Color.RED);
		this.circle4.setFillColor(Color.YELLOW);
		
		this.circle5 = Shape.createCircle(10);
		this.circle5.setStrokeColor(Color.RED);
		this.circle5.setFillColor(Color.YELLOW);
		
		this.circle6 = Shape.createCircle(10);
		this.circle6.setStrokeColor(Color.RED);
		this.circle6.setFillColor(Color.YELLOW);
		
		this.circle1.setXY(200, 20);
		this.hBox = new HBoxLayout();
		this.hBox.add(this.circle1);
		this.hBox.add(this.circle2);
		//this.hBox.setPadding(5, 5, 5, 5);
		this.hBox.setHAlign(HAlign.CENTER);
		this.hBox.setVAlign(VAlign.MIDDLE);
		this.hBox.setHGap(20);
		//this.hBox.setXY(300, 100);
		this.addChild(this.hBox);
		
		this.vBox = new VBoxLayout();
		this.vBox.add(this.circle3);
		this.vBox.add(this.circle4);
		//this.vBox.setPadding(5, 5, 5, 5);
		//this.vBox.setXY(50, 100);
		this.vBox.setHAlign(HAlign.CENTER);
		this.vBox.setVAlign(VAlign.MIDDLE);
		this.vBox.setVGap(20);
		this.hBox.add(this.vBox);

		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
		
		
		
		
		
	}
}

