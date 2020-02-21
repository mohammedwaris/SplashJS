/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { ITransition } from './iface/ITransition';
import { ICircularTransition } from './iface/ICircularTransition';
import { ICircle } from '../geom/iface/ICircle';
import { Circle } from '../geom/Circle';
import { Transition } from './Transition';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class CircularTransition extends Transition implements ICircularTransition {
    /*private*/ radius : number = 50;

    /*private*/ centerX : number = 0;

    /*private*/ centerY : number = 0;

    public constructor() {
        super();
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(CircularTransition, this));
    }

    public setCenterX(centerX : number) : ICircularTransition {
        this.centerX = centerX;
        return this;
    }

    public getCenterX() : number {
        return this.centerX;
    }

    public setCenterY(centerY : number) : ICircularTransition {
        this.centerY = centerY;
        return this;
    }

    public getCenterY() : number {
        return this.centerY;
    }

    public setRadius(radius : number) : ICircularTransition {
        this.radius = radius;
        return this;
    }

    public getRadius() : number {
        return this.radius;
    }

    public setCircle$splashjs_geom_iface_ICircle(circle : ICircle) : ICircularTransition {
        this.centerX = circle.getCenterX();
        this.centerY = circle.getCenterY();
        this.radius = circle.getRadius();
        return this;
    }

    public getCircle() : ICircle {
        return new Circle(this.centerX, this.centerY, this.radius);
    }

    public setCircle$int$int$int(centerX : number, centerY : number, radius : number) : ICircularTransition {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        return this;
    }

    public setCircle(centerX? : any, centerY? : any, radius? : any) : any {
        if(((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
            return <any>this.setCircle$int$int$int(centerX, centerY, radius);
        } else if(((centerX != null && (centerX["__interfaces"] != null && centerX["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0 || centerX.constructor != null && centerX.constructor["__interfaces"] != null && centerX.constructor["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0)) || centerX === null) && centerY === undefined && radius === undefined) {
            return <any>this.setCircle$splashjs_geom_iface_ICircle(centerX);
        } else throw new Error('invalid overload');
    }

    public update(nextValue : number) : ITransition {
        let targetObject : IDisplayObject = super.getTargetObject();
        targetObject.setX(100 + (<number>(Math.cos((Math.PI / 180) * (nextValue)) * this.radius)|0));
        targetObject.setY(100 + (<number>(Math.sin((Math.PI / 180) * (nextValue)) * this.radius)|0));
        return this;
    }
}
CircularTransition["__class"] = "splashjs.animation.CircularTransition";
CircularTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher","splashjs.animation.iface.ICircularTransition"];




