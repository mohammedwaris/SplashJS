/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBrightnessFilter } from './iface/IBrightnessFilter';
import { Filter } from './Filter';

export class BrightnessFilter extends Filter implements IBrightnessFilter {
    /*private*/ brightness : number;

    public constructor(brightness? : any) {
        if(((typeof brightness === 'number') || brightness === null)) {
            let __args = arguments;
            super();
            if(this.brightness===undefined) this.brightness = 0;
            if(this.brightness===undefined) this.brightness = 0;
            (() => {
                this.brightness = brightness;
            })();
        } else if(brightness === undefined) {
            let __args = arguments;
            super();
            if(this.brightness===undefined) this.brightness = 0;
            if(this.brightness===undefined) this.brightness = 0;
        } else throw new Error('invalid overload');
    }

    public setBrightness(brightness : number) : IBrightnessFilter {
        this.brightness = brightness;
        return this;
    }

    public getBrightness() : number {
        return this.brightness;
    }
}
BrightnessFilter["__class"] = "splashjs.filters.BrightnessFilter";
BrightnessFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IBrightnessFilter"];




