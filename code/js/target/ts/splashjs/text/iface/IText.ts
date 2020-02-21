/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { IFont } from './IFont';
import { ITextFormat } from './ITextFormat';

export interface IText extends IDisplayObject {
    setText(text : string);

    getText() : string;

    setFontSize(size : number);

    getFontSize() : number;

    setFontStyle(fontStyle : string);

    getFontStyle() : string;

    setFontWeight(fontWeight : string);

    getFontWeight() : string;

    setFont(font : IFont);

    getFont() : IFont;

    setColor(color : IColor);

    getColor() : IColor;

    setSelectable(selectable : boolean);

    isSelectable() : boolean;

    setTextFormat(textFormat : ITextFormat);

    getTextFormat() : ITextFormat;
}


