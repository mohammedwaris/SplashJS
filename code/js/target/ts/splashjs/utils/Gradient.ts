/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IGradient } from './iface/IGradient';
import { IColor } from './iface/IColor';

export abstract class Gradient implements IGradient {
    /*private*/ colors : Array<IColor> = <any>([]);

    /*private*/ repeat : boolean = false;

    public addColor(color : IColor) {
        /* add */(this.colors.push(color)>0);
    }

    public addColors(...colors : IColor[]) {
        for(let index130=0; index130 < colors.length; index130++) {
            let color = colors[index130];
            {
                /* add */(this.colors.push(color)>0);
            }
        }
    }

    public getColors() : Array<IColor> {
        return this.colors;
    }

    public setRepeat(repeat : boolean) {
        this.repeat = repeat;
    }

    public getRepeat() : boolean {
        return this.repeat;
    }

    constructor() {
    }
}
Gradient["__class"] = "splashjs.utils.Gradient";
Gradient["__interfaces"] = ["splashjs.utils.iface.IGradient"];




