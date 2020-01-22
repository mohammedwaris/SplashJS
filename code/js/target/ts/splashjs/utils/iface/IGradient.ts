/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from './IColor';

export interface IGradient {
    addColor(color : IColor);

    addColors(...colors : IColor[]);

    getColors() : Array<IColor>;

    setRepeat(repeat : boolean);

    getRepeat() : boolean;
}


