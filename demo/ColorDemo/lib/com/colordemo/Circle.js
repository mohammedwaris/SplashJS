
var Class = splashjs.Class;

Class.define("com.silverbrain", function() {
	
	var Sprite = Class.get("splashjs.display.Sprite");
	var Shape  = Class.get("splashjs.display.Shape");
	var Color  = Class.get("splashjs.utils.Color");

	
	class Circle extends splashjs.display.Circle {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.circle.setXY(100, 200);
			this.addChild(this.circle);
		}
	}

	

	return Circle;

});