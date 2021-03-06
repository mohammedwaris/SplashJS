
splashjs.Class.define("com.silverbrain", function() {

	var Sprite = splashjs.Class.get("splashjs.display.Sprite");
	var Shape  = splashjs.Class.get("splashjs.display.Shape");
	var Color  = splashjs.Class.get("splashjs.utils.Color");

	class MyCircle extends Sprite {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
		
		toString() {
			return "[object MyCircle]";
		}
	}
	
	return MyCircle;
});

/*
var Sprite = splashjs.Class.get("splashjs.display.Sprite");
	var Shape  = splashjs.Class.get("splashjs.display.Shape");
	var Color  = splashjs.Class.get("splashjs.utils.Color");

	class MyCircle extends Sprite {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
		
		toString() {
			return "[object MyCircle]";
		}
	}
*/