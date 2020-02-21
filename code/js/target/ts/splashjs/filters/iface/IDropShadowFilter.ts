/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IFilter } from './IFilter';

export interface IDropShadowFilter extends IFilter {
    setOffsetX(offsetX : number) : IDropShadowFilter;

    getOffsetX() : number;

    setOffsetY(offsetY : number) : IDropShadowFilter;

    getOffsetY() : number;

    setBlur(blur : number) : IDropShadowFilter;

    getBlur() : number;

    setSpread(spread : number) : IDropShadowFilter;

    getSpread() : number;

    setColor(color : IColor) : IDropShadowFilter;

    getColor() : IColor;
}


