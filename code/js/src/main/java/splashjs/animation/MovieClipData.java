package splashjs.animation;

import splashjs.events.EventDispatcher;
import splashjs.animation.iface.IMovieClipData;
import splashjs.animation.iface.IFrame;
import splashjs.animation.iface.ISpriteSheet;

public class MovieClipData extends EventDispatcher implements IMovieClipData {

		private ISpriteSheet spriteSheet;
		private String label;
		private IFrame[] frames;
		
		public MovieClipData(ISpriteSheet spriteSheet, String label, IFrame[] frames) {
			this.spriteSheet = spriteSheet;
			this.label = label;
			this.frames = frames;
		}
		
		public String getLabel() {
			return this.label;
		}
		
		public IFrame[] getFrames() {
			return this.frames;
		}
		
		public ISpriteSheet getSpriteSheet() {
			return this.spriteSheet;
		}
}