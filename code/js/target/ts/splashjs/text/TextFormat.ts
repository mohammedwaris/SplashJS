/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFont } from './iface/IFont';
import { ITextFormat } from './iface/ITextFormat';

export class TextFormat implements ITextFormat {
    public font : IFont;

    public fontStyle : string;

    /*private*/ fontWeight : string;

    public fontSize : number;

    public constructor(font? : any, fontStyle? : any, fontWeight? : any, fontSize? : any) {
        if(((font != null && (font["__interfaces"] != null && font["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0 || font.constructor != null && font.constructor["__interfaces"] != null && font.constructor["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0)) || font === null) && ((typeof fontStyle === 'string') || fontStyle === null) && ((typeof fontWeight === 'string') || fontWeight === null) && ((typeof fontSize === 'number') || fontSize === null)) {
            let __args = arguments;
            if(this.font===undefined) this.font = null;
            if(this.fontStyle===undefined) this.fontStyle = null;
            if(this.fontWeight===undefined) this.fontWeight = null;
            if(this.fontSize===undefined) this.fontSize = 0;
            if(this.font===undefined) this.font = null;
            if(this.fontStyle===undefined) this.fontStyle = null;
            if(this.fontWeight===undefined) this.fontWeight = null;
            if(this.fontSize===undefined) this.fontSize = 0;
            (() => {
                this.font = font;
                this.fontStyle = fontStyle;
                this.fontWeight = fontWeight;
                this.fontSize = fontSize;
            })();
        } else if(font === undefined && fontStyle === undefined && fontWeight === undefined && fontSize === undefined) {
            let __args = arguments;
            if(this.font===undefined) this.font = null;
            if(this.fontStyle===undefined) this.fontStyle = null;
            if(this.fontWeight===undefined) this.fontWeight = null;
            if(this.fontSize===undefined) this.fontSize = 0;
            if(this.font===undefined) this.font = null;
            if(this.fontStyle===undefined) this.fontStyle = null;
            if(this.fontWeight===undefined) this.fontWeight = null;
            if(this.fontSize===undefined) this.fontSize = 0;
        } else throw new Error('invalid overload');
    }

    public setFont(font : IFont) {
        this.font = font;
    }

    public getFont() : IFont {
        return this.font;
    }

    public setFontStyle(fontStyle : string) {
        this.fontStyle = fontStyle;
    }

    public getFontStyle() : string {
        return this.fontStyle;
    }

    public setFontWeight(fontWeight : string) {
        this.fontWeight = fontWeight;
    }

    public getFontWeight() : string {
        return this.fontWeight;
    }

    public setFontSize(fontSize : number) {
        this.fontSize = fontSize;
    }

    public getFontSize() : number {
        return this.fontSize;
    }
}
TextFormat["__class"] = "splashjs.text.TextFormat";
TextFormat["__interfaces"] = ["splashjs.text.iface.ITextFormat"];




