/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IGrayscaleFilter } from './iface/IGrayscaleFilter';
import { Filter } from './Filter';

export class GrayscaleFilter extends Filter implements IGrayscaleFilter {
    /*private*/ grayscale : number;

    public constructor(grayscale? : any) {
        if(((typeof grayscale === 'number') || grayscale === null)) {
            let __args = arguments;
            super();
            if(this.grayscale===undefined) this.grayscale = 0;
            if(this.grayscale===undefined) this.grayscale = 0;
            (() => {
                this.grayscale = grayscale;
            })();
        } else if(grayscale === undefined) {
            let __args = arguments;
            super();
            if(this.grayscale===undefined) this.grayscale = 0;
            if(this.grayscale===undefined) this.grayscale = 0;
        } else throw new Error('invalid overload');
    }

    public setGrayscale(grayscale : number) : IGrayscaleFilter {
        this.grayscale = grayscale;
        return this;
    }

    public getGrayscale() : number {
        return this.grayscale;
    }
}
GrayscaleFilter["__class"] = "splashjs.filters.GrayscaleFilter";
GrayscaleFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IGrayscaleFilter"];




