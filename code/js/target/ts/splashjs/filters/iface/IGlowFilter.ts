/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IFilter } from './IFilter';

export interface IGlowFilter extends IFilter {
    setBlur(blur : number) : IGlowFilter;

    getBlur() : number;

    setColor(color : IColor) : IGlowFilter;

    getColor() : IColor;
}


