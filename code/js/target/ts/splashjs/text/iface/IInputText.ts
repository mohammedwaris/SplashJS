/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IText } from './IText';

export interface IInputText extends IText {
    setPlaceholder(placeholder : string);

    getPlaceholder() : string;

    setBackgroundColor(backgroundColor : IColor);

    getBackgroundColor() : IColor;

    setBorderColor(borderColor : IColor);

    getBorderColor() : IColor;
}


