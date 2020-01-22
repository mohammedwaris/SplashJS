package splashjs.text;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.text.iface.IFont;
import splashjs.text.iface.IFontPath;
import splashjs.render.text.iface.IFontRenderer;

public class Font extends EventDispatcher implements IFont {
	
	private static ArrayList<IFont> fonts = new ArrayList<IFont>();
	
	private String fontID;
	private IFontPath fontPath;
	
	public Font(String fontID, IFontPath fontPath) {
		super("font");
		this.fontID = fontID;
		this.fontPath = fontPath;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Font.class, this));
	}
	
	public String getFontID() {
		return this.fontID;
	}
	
	public IFontPath getFontPath() {
		return this.fontPath;
	}
	
	public void load() {
		((IFontRenderer)super.getRenderer()).load();
	}
	
	public static void registerFont(IFont font) {
		fonts.add(font);
	}
	
	public static IFontPath getFontPathById(String fontID) {
		IFontPath fontPath = null;
		IFont font;
		for(int i=0;i<fonts.size();i++) {
			font = fonts.get(i);
			if(font.getFontID().equalsIgnoreCase(fontID)) {
				fontPath = font.getFontPath();
				break;
			}
		}
		return fontPath;
	}
	
	public static ArrayList<IFont> getFonts() {
		return fonts;
	}
	
	
}