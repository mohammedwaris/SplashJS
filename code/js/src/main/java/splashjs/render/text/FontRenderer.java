package splashjs.render.text;

import def.dom.HTMLStyleElement;
import static def.dom.Globals.document;

import splashjs.text.iface.IFont;
import splashjs.text.iface.IFontPath;
import splashjs.events.EventDispatcher;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.text.iface.IFontRenderer;
import splashjs.render.RenderElement;
import splashjs.render.events.EventDispatcherRenderer;



public class FontRenderer extends EventDispatcherRenderer implements IFontRenderer {

	private HTMLStyleElement htmlStyleElement;
	
	public FontRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlStyleElement = (HTMLStyleElement) document.createElement("style");
		super.setRenderElement(new RenderElement(htmlStyleElement));
		create();
	}
	
	public void create() {
		document.head.appendChild(htmlStyleElement);
	}
	
	@Override
	public void load() {
		IFont font = (IFont)super.getRenderObject();
		String fontID = font.getFontID();
		IFontPath fontPath = font.getFontPath();
		String normalFontPath = fontPath.getNormalFontPath();
		
		String fontFaceText  = "@font-face {" + ENDLINE_CHAR;
			   fontFaceText += "font-family: \"" + fontID + "\";" + ENDLINE_CHAR;
			   fontFaceText += "src: url(\"" + normalFontPath + "\");" + ENDLINE_CHAR;
			   fontFaceText += "}" + ENDLINE_CHAR;
		htmlStyleElement.appendChild(document.createTextNode(fontFaceText));
	}

}