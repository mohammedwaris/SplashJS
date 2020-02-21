/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBlurFilter } from './iface/IBlurFilter';
import { Filter } from './Filter';

export class BlurFilter extends Filter implements IBlurFilter {
    /*private*/ blur : number;

    public constructor(blur? : any) {
        if(((typeof blur === 'number') || blur === null)) {
            let __args = arguments;
            super();
            if(this.blur===undefined) this.blur = 0;
            if(this.blur===undefined) this.blur = 0;
            (() => {
                this.blur = blur;
            })();
        } else if(blur === undefined) {
            let __args = arguments;
            super();
            if(this.blur===undefined) this.blur = 0;
            if(this.blur===undefined) this.blur = 0;
        } else throw new Error('invalid overload');
    }

    public setBlur(blur : number) : IBlurFilter {
        this.blur = blur;
        return this;
    }

    public getBlur() : number {
        return this.blur;
    }
}
BlurFilter["__class"] = "splashjs.filters.BlurFilter";
BlurFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IBlurFilter"];




