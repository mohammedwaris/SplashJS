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


class StageColor extends splashjs.layout.HBoxLayout {
	
	constructor() {
		super();
		this.addEventListener(splashjs.events.Event.ADDED_TO_STAGE, (event) => {
			this.init();
		});
	}
	
	init() {
		console.log("added");
		this.getStage().setScaleMode(StageScaleMode.NO_SCALE);
		this.circle1 = Shape.createCircle(30);
		this.circle1.setStrokeColor(Color.GREEN);
		this.circle1.setFillColor(Color.YELLOW);
		
		this.circle2 = Shape.createCircle(30);
		this.circle2.setStrokeColor(Color.GREEN);
		this.circle2.setFillColor(Color.YELLOW);

		this.spacer = new Spacer();
		this.textInput = new TextInput();
		
		
		this.button = new Button("Click Me!");

		this.myList = new MyList();
		
		
		
		this.add(this.textInput);
		this.add(this.button);

		this.setPadding(10, 10, 10, 10);
		this.setHAlign(HAlign.CENTER);

		
		
		
		this.circle3 = Shape.createCircle(300);
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
		
		this.vl = new HBoxLayout();
		
		this.vl.add(this.circle5);
		this.vl.add(this.circle6);

		this.vl.setPadding(10, 10, 10, 10);
		
		
		//this.add(this.vl);
		
	
		
		
		
		
		
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
