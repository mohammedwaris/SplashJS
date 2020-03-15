import splashjs from "./bundle.js";
import Background from "./Background.js";
import Fly from "./Fly.js";

var Sprite = splashjs.display.Sprite;
var EmbeddedLibrary = splashjs.EmbeddedLibrary;
var Image = splashjs.display.Image;

class TinyPlatformer extends Sprite {
	
	constructor() {
		super();

		this.background = new Background();
		this.fly1 = new Fly();
		this.fly1.setXY(200, 100);
		this.fly2 = new Fly();
		this.fly2.setXY(130, 75);
		this.addChild(this.background);
		this.addChild(this.fly1);
		this.addChild(this.fly2);

	}
}

export {TinyPlatformer as default};