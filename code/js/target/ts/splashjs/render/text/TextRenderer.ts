/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { InteractiveObjectRenderer } from '../display/InteractiveObjectRenderer';
import { IColor } from '../../utils/iface/IColor';
import { IText } from '../../text/iface/IText';
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
    }

    public setFontSize() {
    }

    public setFontWeight() {
    }

    public setFontStyle() {
    }

    public setSelectable() {
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




