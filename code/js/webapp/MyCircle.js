
var Class = splashjs.Class;

Class.define("com.silverbrain", function() {
	
	var Sprite = Class.get("splashjs.display.Sprite");
	var Shape  = Class.get("splashjs.display.Shape");
	var Color  = Class.get("splashjs.utils.Color");
	var Circle = Class.get("splashjs.display.Circle");
	
	var MyCircle = class extends Circle {
	
		constructor() {
			super();
			this.setRadius(20);
			this.setFillColor(Color.YELLOW);
			this.setStrokeColor(Color.RED);
			this.setXY(100, 100);
		}
	}

	return MyCircle;

});