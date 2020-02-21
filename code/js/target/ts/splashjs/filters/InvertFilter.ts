/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IInvertFilter } from './iface/IInvertFilter';
import { Filter } from './Filter';

export class InvertFilter extends Filter implements IInvertFilter {
    /*private*/ invert : number;

    public constructor(invert? : any) {
        if(((typeof invert === 'number') || invert === null)) {
            let __args = arguments;
            super();
            if(this.invert===undefined) this.invert = 0;
            if(this.invert===undefined) this.invert = 0;
            (() => {
                this.invert = invert;
            })();
        } else if(invert === undefined) {
            let __args = arguments;
            super();
            if(this.invert===undefined) this.invert = 0;
            if(this.invert===undefined) this.invert = 0;
        } else throw new Error('invalid overload');
    }

    public setInvert(invert : number) : IInvertFilter {
        this.invert = invert;
        return this;
    }

    public getInvert() : number {
        return this.invert;
    }
}
InvertFilter["__class"] = "splashjs.filters.InvertFilter";
InvertFilter["__interfaces"] = ["splashjs.filters.iface.IInvertFilter","splashjs.filters.iface.IFilter"];




