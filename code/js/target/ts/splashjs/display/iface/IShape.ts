/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from '../../utils/iface/IColor';
import { IInteractiveObject } from './IInteractiveObject';

export interface IShape extends IInteractiveObject {
    setStrokeWidth(strokeWidth : number);

    getStrokeWidth() : number;

    setFillColor(fillColor : IColor);

    getFillColor() : IColor;

    setStrokeColor(strokeColor : IColor);

    getStrokeColor() : IColor;
}


