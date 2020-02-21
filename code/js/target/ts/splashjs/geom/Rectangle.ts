/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRectangle } from './iface/IRectangle';

export class Rectangle implements IRectangle {
    /*private*/ x : number;

    /*private*/ y : number;

    /*private*/ width : number;

    /*private*/ height : number;

    public constructor(x : number, y : number, width : number, height : number) {
        if(this.x===undefined) this.x = 0;
        if(this.y===undefined) this.y = 0;
        if(this.width===undefined) this.width = 0;
        if(this.height===undefined) this.height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public getX() : number {
        return this.x;
    }

    public getY() : number {
        return this.y;
    }

    public getWidth() : number {
        return this.width;
    }

    public getHeight() : number {
        return this.height;
    }
}
Rectangle["__class"] = "splashjs.geom.Rectangle";
Rectangle["__interfaces"] = ["splashjs.geom.iface.IRectangle"];




