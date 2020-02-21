/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ICircle } from './iface/ICircle';

export class Circle implements ICircle {
    /*private*/ centerX : number;

    /*private*/ centerY : number;

    /*private*/ radius : number;

    public constructor(centerX? : any, centerY? : any, radius? : any) {
        if(((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
            let __args = arguments;
            if(this.centerX===undefined) this.centerX = 0;
            if(this.centerY===undefined) this.centerY = 0;
            if(this.radius===undefined) this.radius = 0;
            if(this.centerX===undefined) this.centerX = 0;
            if(this.centerY===undefined) this.centerY = 0;
            if(this.radius===undefined) this.radius = 0;
            (() => {
                this.centerX = centerX;
                this.centerY = centerY;
                this.radius = radius;
            })();
        } else if(centerX === undefined && centerY === undefined && radius === undefined) {
            let __args = arguments;
            if(this.centerX===undefined) this.centerX = 0;
            if(this.centerY===undefined) this.centerY = 0;
            if(this.radius===undefined) this.radius = 0;
            if(this.centerX===undefined) this.centerX = 0;
            if(this.centerY===undefined) this.centerY = 0;
            if(this.radius===undefined) this.radius = 0;
        } else throw new Error('invalid overload');
    }

    public setCenterX(centerX : number) : ICircle {
        this.centerX = centerX;
        return this;
    }

    public getCenterX() : number {
        return this.centerX;
    }

    public setCenterY(centerY : number) : ICircle {
        this.centerY = centerY;
        return this;
    }

    public getCenterY() : number {
        return this.centerY;
    }

    public setRadius(radius : number) : ICircle {
        this.radius = radius;
        return this;
    }

    public getRadius() : number {
        return this.radius;
    }
}
Circle["__class"] = "splashjs.geom.Circle";
Circle["__interfaces"] = ["splashjs.geom.iface.ICircle"];




