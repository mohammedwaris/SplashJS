/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISepiaFilter } from './iface/ISepiaFilter';
import { Filter } from './Filter';

export class SepiaFilter extends Filter implements ISepiaFilter {
    /*private*/ sepia : number;

    public constructor(sepia? : any) {
        if(((typeof sepia === 'number') || sepia === null)) {
            let __args = arguments;
            super();
            if(this.sepia===undefined) this.sepia = 0;
            if(this.sepia===undefined) this.sepia = 0;
            (() => {
                this.sepia = sepia;
            })();
        } else if(sepia === undefined) {
            let __args = arguments;
            super();
            if(this.sepia===undefined) this.sepia = 0;
            if(this.sepia===undefined) this.sepia = 0;
        } else throw new Error('invalid overload');
    }

    public setSepia(sepia : number) : ISepiaFilter {
        this.sepia = sepia;
        return this;
    }

    public getSepia() : number {
        return this.sepia;
    }
}
SepiaFilter["__class"] = "splashjs.filters.SepiaFilter";
SepiaFilter["__interfaces"] = ["splashjs.filters.iface.ISepiaFilter","splashjs.filters.iface.IFilter"];




