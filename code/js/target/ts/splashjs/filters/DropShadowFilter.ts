/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDropShadowFilter } from './iface/IDropShadowFilter';
import { IColor } from '../utils/iface/IColor';
import { Color } from '../utils/Color';
import { Filter } from './Filter';

export class DropShadowFilter extends Filter implements IDropShadowFilter {
    /*private*/ offsetX : number;

    /*private*/ offsetY : number;

    /*private*/ blur : number;

    /*private*/ spread : number;

    /*private*/ color : IColor;

    public constructor(offsetX? : any, offsetY? : any, blur? : any, color? : any) {
        if(((typeof offsetX === 'number') || offsetX === null) && ((typeof offsetY === 'number') || offsetY === null) && ((typeof blur === 'number') || blur === null) && ((color != null && (color["__interfaces"] != null && color["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0 || color.constructor != null && color.constructor["__interfaces"] != null && color.constructor["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0)) || color === null)) {
            let __args = arguments;
            super();
            if(this.offsetX===undefined) this.offsetX = 0;
            if(this.offsetY===undefined) this.offsetY = 0;
            if(this.blur===undefined) this.blur = 0;
            if(this.spread===undefined) this.spread = 0;
            this.color = Color.BLACK_$LI$();
            if(this.offsetX===undefined) this.offsetX = 0;
            if(this.offsetY===undefined) this.offsetY = 0;
            if(this.blur===undefined) this.blur = 0;
            if(this.spread===undefined) this.spread = 0;
            (() => {
                this.offsetX = offsetX;
                this.offsetY = offsetY;
                this.blur = blur;
                this.color = color;
            })();
        } else if(offsetX === undefined && offsetY === undefined && blur === undefined && color === undefined) {
            let __args = arguments;
            super();
            if(this.offsetX===undefined) this.offsetX = 0;
            if(this.offsetY===undefined) this.offsetY = 0;
            if(this.blur===undefined) this.blur = 0;
            if(this.spread===undefined) this.spread = 0;
            this.color = Color.BLACK_$LI$();
            if(this.offsetX===undefined) this.offsetX = 0;
            if(this.offsetY===undefined) this.offsetY = 0;
            if(this.blur===undefined) this.blur = 0;
            if(this.spread===undefined) this.spread = 0;
        } else throw new Error('invalid overload');
    }

    public setOffsetX(offsetX : number) : IDropShadowFilter {
        this.offsetX = offsetX;
        return this;
    }

    public getOffsetX() : number {
        return this.offsetX;
    }

    public setOffsetY(offsetY : number) : IDropShadowFilter {
        this.offsetY = offsetY;
        return this;
    }

    public getOffsetY() : number {
        return this.offsetY;
    }

    public setBlur(blur : number) : IDropShadowFilter {
        this.blur = blur;
        return this;
    }

    public getBlur() : number {
        return this.blur;
    }

    public setSpread(spread : number) : IDropShadowFilter {
        this.spread = spread;
        return this;
    }

    public getSpread() : number {
        return this.spread;
    }

    public setColor(color : IColor) : IDropShadowFilter {
        this.color = color;
        return this;
    }

    public getColor() : IColor {
        return this.color;
    }
}
DropShadowFilter["__class"] = "splashjs.filters.DropShadowFilter";
DropShadowFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IDropShadowFilter"];




