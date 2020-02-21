/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IContrastFilter } from './iface/IContrastFilter';
import { Filter } from './Filter';

export class ContrastFilter extends Filter implements IContrastFilter {
    /*private*/ contrast : number;

    public constructor(contrast? : any) {
        if(((typeof contrast === 'number') || contrast === null)) {
            let __args = arguments;
            super();
            if(this.contrast===undefined) this.contrast = 0;
            if(this.contrast===undefined) this.contrast = 0;
            (() => {
                this.contrast = contrast;
            })();
        } else if(contrast === undefined) {
            let __args = arguments;
            super();
            if(this.contrast===undefined) this.contrast = 0;
            if(this.contrast===undefined) this.contrast = 0;
        } else throw new Error('invalid overload');
    }

    public setContrast(contrast : number) : IContrastFilter {
        this.contrast = contrast;
        return this;
    }

    public getContrast() : number {
        return this.contrast;
    }
}
ContrastFilter["__class"] = "splashjs.filters.ContrastFilter";
ContrastFilter["__interfaces"] = ["splashjs.filters.iface.IContrastFilter","splashjs.filters.iface.IFilter"];




