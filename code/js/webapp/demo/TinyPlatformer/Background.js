import splashjs from "./bundle.js";

var Sprite = splashjs.display.Sprite;
var Image = splashjs.display.Image;

class Background extends Sprite {
	
	constructor() {
		super();

		this.backgroundLayer3Image = new Image("EmbeddedLibrary/Layer_03.png");
		this.backgroundLayer2Image = new Image("EmbeddedLibrary/Layer_02.png");
		this.backgroundLayer2Image.setXY(10, -30);
		this.backgroundLayer1Image = new Image("EmbeddedLibrary/Layer_01.png");
		this.backgroundLayer1Image.setY(-200);

		this.addChild(this.backgroundLayer3Image);
		this.addChild(this.backgroundLayer2Image);
		this.addChild(this.backgroundLayer1Image);
	}
}

export {Background as default};