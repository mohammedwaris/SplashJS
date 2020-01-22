/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IDisplayObject } from '../../display/iface/IDisplayObject';

export interface IText extends IDisplayObject {
    setText(text : string);

    getText() : string;

    setFontSize(size : number);

    getFontSize() : number;

    setFontStyle(fontStyle : string);

    getFontStyle() : string;

    setFontWeight(fontWeight : string);

    getFontWeight() : string;

    setFont(fontId : string);

    getFont() : string;

    setColor(color : IColor);

    getColor() : IColor;

    setSelectable(selectable : boolean);

    isSelectable() : boolean;
}


