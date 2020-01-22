package splashjs.text;

public class FontPath {
		
		private String normalFontPath;
		private String italicFontPath;
		private String boldFontPath;
		private String boldItalicFontPath;
		
		public FontPath() {
			
		}
		
		public FontPath(String normalFontPath) {
			this.normalFontPath = normalFontPath;
		}
		
		public FontPath setNormalFontPath(String normalFontPath) {
			this.normalFontPath = normalFontPath;
			return this;
		}
		
		public FontPath setBoldFontPath(String boldFontPath) {
			this.boldFontPath = boldFontPath;
			return this;
		}
		
		public FontPath setItalicFontPath(String italicFontPath) {
			this.italicFontPath = italicFontPath;
			return this;
		}
		
		public FontPath setBoldItalicFontPath(String boldItalicFontPath) {
			this.boldItalicFontPath = boldItalicFontPath;
			return this;
		}
		
		public String getNormalFontPath() {
			return normalFontPath;
		}
		
		public String getBoldFontPath() {
			return boldFontPath;
		}
		
		public String getItalicFontPath() {
			return italicFontPath;
		}
		
		public String getBoldItalicFontPath() {
			return boldItalicFontPath;
		}
		
}