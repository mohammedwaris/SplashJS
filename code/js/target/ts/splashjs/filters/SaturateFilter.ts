/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISaturateFilter } from './iface/ISaturateFilter';
import { Filter } from './Filter';

export class SaturateFilter extends Filter implements ISaturateFilter {
    /*private*/ saturate : number;

    public constructor(saturate? : any) {
        if(((typeof saturate === 'number') || saturate === null)) {
            let __args = arguments;
            super();
            if(this.saturate===undefined) this.saturate = 0;
            if(this.saturate===undefined) this.saturate = 0;
            (() => {
                this.saturate = saturate;
            })();
        } else if(saturate === undefined) {
            let __args = arguments;
            super();
            if(this.saturate===undefined) this.saturate = 0;
            if(this.saturate===undefined) this.saturate = 0;
        } else throw new Error('invalid overload');
    }

    public setSaturate(saturate : number) : ISaturateFilter {
        this.saturate = saturate;
        return this;
    }

    public getSaturate() : number {
        return this.saturate;
    }
}
SaturateFilter["__class"] = "splashjs.filters.SaturateFilter";
SaturateFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.ISaturateFilter"];




