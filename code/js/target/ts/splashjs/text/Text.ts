/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { InteractiveObject } from '../display/InteractiveObject';
import { ITextRenderer } from '../render/text/iface/ITextRenderer';
import { IText } from './iface/IText';
import { IColor } from '../utils/iface/IColor';
import { Color } from '../utils/Color';
import { FontStyle } from './FontStyle';
import { FontWeight } from './FontWeight';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class Text extends InteractiveObject implements IText {
    /*private*/ text : string = "";

    /*private*/ fontSize : number = 12;

    /*private*/ fontStyle : string = FontStyle.NORMAL;

    /*private*/ fontWeight : string = FontWeight.NORMAL;

    /*private*/ color : IColor = Color.BLACK_$LI$();

    /*private*/ selectable : boolean = true;

    /*private*/ fontId : string;

    public constructor(id : string) {
        super(id);
        if(this.fontId===undefined) this.fontId = null;
    }

    public setText(text : string) {
        this.text = text;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setText();
    }

    public getText() : string {
        return this.text;
    }

    public setFontSize(fontSize : number) {
        this.fontSize = fontSize;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setFontSize();
    }

    public getFontSize() : number {
        return this.fontSize;
    }

    public setFontStyle(fontStyle : string) {
        this.fontStyle = fontStyle;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setFontStyle();
    }

    public getFontStyle() : string {
        return this.fontStyle;
    }

    public setFontWeight(fontWeight : string) {
        this.fontWeight = fontWeight;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setFontWeight();
    }

    public getFontWeight() : string {
        return this.fontWeight;
    }

    public setColor(color : IColor) {
        this.color = color;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setColor();
    }

    public getColor() : IColor {
        return this.color;
    }

    public setFont(fontId : string) {
        this.fontId = fontId;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setFont();
    }

    public getFont() : string {
        return this.fontId;
    }

    public setSelectable(selectable : boolean) {
        this.selectable = selectable;
        if(super.getRenderer() != null) (<ITextRenderer><any>super.getRenderer()).setSelectable();
    }

    public isSelectable() : boolean {
        return this.selectable;
    }

    public render() {
        super.render();
        (<ITextRenderer><any>super.getRenderer()).setText();
        (<ITextRenderer><any>super.getRenderer()).setSelectable();
        (<ITextRenderer><any>super.getRenderer()).setColor();
        (<ITextRenderer><any>super.getRenderer()).setFont();
        (<ITextRenderer><any>super.getRenderer()).setFontSize();
        (<ITextRenderer><any>super.getRenderer()).setFontStyle();
        (<ITextRenderer><any>super.getRenderer()).setFontWeight();
        (<ITextRenderer><any>super.getRenderer()).setBorder("0px dotted blue");
    }
}
Text["__class"] = "splashjs.text.Text";
Text["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText"];




