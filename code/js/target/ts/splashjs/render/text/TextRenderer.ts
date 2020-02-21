/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { InteractiveObjectRenderer } from '../display/InteractiveObjectRenderer';
import { IColor } from '../../utils/iface/IColor';
import { IText } from '../../text/iface/IText';
import { ITextFormat } from '../../text/iface/ITextFormat';
import { IFont } from '../../text/iface/IFont';
import { ColorName } from '../../utils/ColorName';
import { ColorType } from '../../utils/ColorType';
import { ITextRenderer } from './iface/ITextRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export abstract class TextRenderer extends InteractiveObjectRenderer implements ITextRenderer {
    /**
     * 
     */
    public setColor() {
        (<HTMLElement>this.getDOMElement()).style.color = this.getCSSColorText();
    }

    public setText() {
    }

    public setFont() {
        let text : IText = <IText><any>super.getRenderObject();
        let font : IFont = text.getFont();
        if(font != null) {
            let fontID : string = font.getFontID();
            (<HTMLElement>this.getDOMElement()).style.fontFamily = fontID;
        }
    }

    public setFontSize() {
        let text : IText = <IText><any>super.getRenderObject();
        let fontSize : number = text.getFontSize();
        if(fontSize >= 0) (<HTMLElement>this.getDOMElement()).style.fontSize = fontSize + this.UNIT;
    }

    public setFontWeight() {
        let text : IText = <IText><any>super.getRenderObject();
        let fontWeight : string = text.getFontWeight();
        if(fontWeight != null) (<HTMLElement>this.getDOMElement()).style.fontWeight = fontWeight;
    }

    public setFontStyle() {
        let text : IText = <IText><any>super.getRenderObject();
        let fontStyle : string = text.getFontStyle();
        if(fontStyle != null) (<HTMLElement>this.getDOMElement()).style.fontStyle = fontStyle;
    }

    public setSelectable() {
    }

    public setTextFormat() {
        let text : IText = <IText><any>super.getRenderObject();
        let textFormat : ITextFormat = <ITextFormat><any>text.getTextFormat();
        let font : IFont = textFormat.getFont();
        let fontWeight : string = textFormat.getFontWeight();
        let fontStyle : string = textFormat.getFontStyle();
        let fontSize : number = textFormat.getFontSize();
        if(font != null) {
            let fontID : string = font.getFontID();
            (<HTMLElement>this.getDOMElement()).style.fontFamily = fontID;
        }
        if(fontWeight != null) {
            (<HTMLElement>this.getDOMElement()).style.fontWeight = fontWeight;
        }
        if(fontStyle != null) {
            (<HTMLElement>this.getDOMElement()).style.fontStyle = fontStyle;
        }
        if(fontSize >= 0) {
            (<HTMLElement>this.getDOMElement()).style.fontSize = fontSize + this.UNIT;
        }
    }

    public getClientWidth() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
    }

    public getClientHeight() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
    }

    /*private*/ getCSSColorText() : string {
        let colorName : string = ColorName.BLACK;
        let color : IColor = (<IText><any>super.getRenderObject()).getColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), ColorType.NAME)) colorName = color.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), ColorType.HEX)) colorName = color.getHEX();
        return colorName;
    }

    constructor() {
        super();
    }
}
TextRenderer["__class"] = "splashjs.render.text.TextRenderer";
TextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




