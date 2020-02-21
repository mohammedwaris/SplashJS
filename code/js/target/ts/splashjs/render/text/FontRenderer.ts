/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFont } from '../../text/iface/IFont';
import { IFontPath } from '../../text/iface/IFontPath';
import { EventDispatcher } from '../../events/EventDispatcher';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IFontRenderer } from './iface/IFontRenderer';
import { RenderElement } from '../RenderElement';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';

export class FontRenderer extends EventDispatcherRenderer implements IFontRenderer {
    /*private*/ htmlStyleElement : HTMLStyleElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlStyleElement===undefined) this.htmlStyleElement = null;
        super.setRenderObject(renderObject);
        this.htmlStyleElement = <HTMLStyleElement>document.createElement("style");
        super.setRenderElement(new RenderElement(this.htmlStyleElement));
        this.create();
    }

    public create() {
        document.head.appendChild(this.htmlStyleElement);
    }

    /**
     * 
     */
    public load() {
        let font : IFont = <IFont><any>super.getRenderObject();
        let fontID : string = font.getFontID();
        let fontPath : IFontPath = font.getFontPath();
        let normalFontPath : string = fontPath.getNormalFontPath();
        let fontFaceText : string = "@font-face {" + this.ENDLINE_CHAR;
        fontFaceText += "font-family: \"" + fontID + "\";" + this.ENDLINE_CHAR;
        fontFaceText += "src: url(\"" + normalFontPath + "\");" + this.ENDLINE_CHAR;
        fontFaceText += "}" + this.ENDLINE_CHAR;
        this.htmlStyleElement.appendChild(document.createTextNode(fontFaceText));
    }
}
FontRenderer["__class"] = "splashjs.render.text.FontRenderer";
FontRenderer["__interfaces"] = ["splashjs.render.text.iface.IFontRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




