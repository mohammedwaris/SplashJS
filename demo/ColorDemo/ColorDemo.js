class ColorDemo extends splashjs.display.Sprite {
	
	constructor() {
		super();
		this.circle = new splashjs.display.Circle(20);
		this.circle.setFillColor(splashjs.utils.Color.YELLOW);
		this.circle.setStrokeColor(splashjs.utils.Color.RED);
		this.addChild(this.circle);
	}
}