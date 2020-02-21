/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IHueRotateFilter } from './iface/IHueRotateFilter';
import { Filter } from './Filter';

export class HueRotateFilter extends Filter implements IHueRotateFilter {
    /*private*/ hueRotate : number;

    public constructor(hueRotate? : any) {
        if(((typeof hueRotate === 'number') || hueRotate === null)) {
            let __args = arguments;
            super();
            if(this.hueRotate===undefined) this.hueRotate = 0;
            if(this.hueRotate===undefined) this.hueRotate = 0;
            (() => {
                this.hueRotate = hueRotate;
            })();
        } else if(hueRotate === undefined) {
            let __args = arguments;
            super();
            if(this.hueRotate===undefined) this.hueRotate = 0;
            if(this.hueRotate===undefined) this.hueRotate = 0;
        } else throw new Error('invalid overload');
    }

    public setHueRotate(hueRotate : number) : IHueRotateFilter {
        this.hueRotate = hueRotate;
        return this;
    }

    public getHueRotate() : number {
        return this.hueRotate;
    }
}
HueRotateFilter["__class"] = "splashjs.filters.HueRotateFilter";
HueRotateFilter["__interfaces"] = ["splashjs.filters.iface.IHueRotateFilter","splashjs.filters.iface.IFilter"];




