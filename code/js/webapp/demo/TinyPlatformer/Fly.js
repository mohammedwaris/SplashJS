import splashjs from "./bundle.js";

var Sprite = splashjs.display.Sprite;

class Fly extends Sprite {

	constructor() {
		super();

		this.flySpriteSheet = new splashjs.animation.SpriteSheet("EmbeddedLibrary/Enemies/Enemy_03/fly.png");
		this.flySpriteSheet.defineMovieClip("fly", 34, 33, 0, 1, 2, 3);
		this.flyMovieClip = this.flySpriteSheet.getMovieClip("fly");
		this.addChild(this.flyMovieClip);
		this.flyMovieClip.gotoAndPlay("fly", 0);
	}
}

export {Fly as default};