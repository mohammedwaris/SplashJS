import {Sprite, Shape, Color} from "./splashjs.js";

class MyCircle extends Sprite {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
}

//var com = com || {};
//var com.silverbrain = com.silverbrain || {};
//var com.silvebrain.MyCircle = MyCircle;

export { MyCircle } 



/*
splashjs.Package.define(function() {
	
	var Sprite = splashjs.display.Sprite;
	
	class MyCircle extends Sprite {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
	}
	
	return {
		package: "com.silverbrain",
		import: ["splashjs.display.Sprite", "splashjs.display.Shape", "splashjs.utils.Color"],
		class : MyCircle
	}
});*/

/*
splashjs.Package.define("com.silverbrain", 
						[
							"splashjs.display.Sprite", 
							"splashjs.display.Shape", 
							"splashjs.utils.Color"
						], () => {
							
	var Sprite = splashjs.display.Sprite;
							
	class MyCircle extends Sprite {
	
		constructor() {
			super();
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
	}
	
	return MyCircle;
	
});*/