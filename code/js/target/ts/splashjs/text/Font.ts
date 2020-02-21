/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IFont } from './iface/IFont';
import { IFontPath } from './iface/IFontPath';
import { IFontRenderer } from '../render/text/iface/IFontRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Font extends EventDispatcher implements IFont {
    static fonts : Array<IFont>; public static fonts_$LI$() : Array<IFont> { if(Font.fonts == null) Font.fonts = <any>([]); return Font.fonts; };

    /*private*/ fontID : string;

    /*private*/ fontPath : IFontPath;

    public constructor(fontID : string, fontPath : IFontPath) {
        super("font");
        if(this.fontID===undefined) this.fontID = null;
        if(this.fontPath===undefined) this.fontPath = null;
        this.fontID = fontID;
        this.fontPath = fontPath;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Font, this));
    }

    public getFontID() : string {
        return this.fontID;
    }

    public getFontPath() : IFontPath {
        return this.fontPath;
    }

    public load() {
        (<IFontRenderer><any>super.getRenderer()).load();
    }

    public static registerFont(font : IFont) {
        /* add */(Font.fonts_$LI$().push(font)>0);
    }

    public static getFontPathById(fontID : string) : IFontPath {
        let fontPath : IFontPath = null;
        let font : IFont;
        for(let i : number = 0; i < /* size */(<number>Font.fonts_$LI$().length); i++) {{
            font = /* get */Font.fonts_$LI$()[i];
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(font.getFontID(), fontID)) {
                fontPath = font.getFontPath();
                break;
            }
        };}
        return fontPath;
    }

    public static getFonts() : Array<IFont> {
        return Font.fonts_$LI$();
    }
}
Font["__class"] = "splashjs.text.Font";
Font["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IFont"];





Font.fonts_$LI$();
