splashjs.Package.define(function() {

	

	class MyCircle extends Sprite {
	
		constructor() {
			this.circle = Shape.createCircle(20);
			this.circle.setFillColor(Color.YELLOW);
			this.circle.setStrokeColor(Color.RED);
			this.addChild(this.circle);
		}
	}
	
	return {
		package: "com.silverbrain",
		class : MyCircle
	}
});