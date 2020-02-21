/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IPoint } from './iface/IPoint';

export class Point implements IPoint {
    /*private*/ x : number;

    /*private*/ y : number;

    public constructor(x? : any, y? : any) {
        if(((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
            let __args = arguments;
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            (() => {
                this.x = x;
                this.y = y;
            })();
        } else if(x === undefined && y === undefined) {
            let __args = arguments;
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
        } else throw new Error('invalid overload');
    }

    public setX(x : number) {
        this.x = x;
    }

    public getX() : number {
        return this.x;
    }

    public setY(y : number) {
        this.y = y;
    }

    public getY() : number {
        return this.y;
    }
}
Point["__class"] = "splashjs.geom.Point";
Point["__interfaces"] = ["splashjs.geom.iface.IPoint"];




