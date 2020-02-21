/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { ITransition } from './iface/ITransition';
import { Transition } from './Transition';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';
import { ScaleTransition } from './ScaleTransition';

export class TranslateTransition extends Transition {
    /*private*/ fromX : number = -1;

    /*private*/ toX : number = -1;

    /*private*/ fromY : number = -1;

    /*private*/ toY : number = -1;

    public constructor() {
        super();
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(ScaleTransition, this));
    }

    public setFromX(fromX : number) : ITransition {
        this.fromX = fromX;
        return this;
    }

    public getFromX() : number {
        return this.fromX;
    }

    public setFromY(fromY : number) : ITransition {
        this.fromY = fromY;
        return this;
    }

    public getFromY() : number {
        return this.fromY;
    }

    public setToX(toX : number) : ITransition {
        this.toX = toX;
        return this;
    }

    public getToX() : number {
        return this.toX;
    }

    public setToY(toY : number) : ITransition {
        this.toY = toY;
        return this;
    }

    public getToY() : number {
        return this.toY;
    }

    public setFromXY(fromX : number, fromY : number) : ITransition {
        this.fromX = fromX;
        this.fromY = fromY;
        return this;
    }

    public setToXY(toX : number, toY : number) : ITransition {
        this.toX = toX;
        this.toY = toY;
        return this;
    }

    /**
     * 
     * @param {number} nextValue
     * @return {*}
     */
    public update(nextValue : number) : ITransition {
        let targetObject : IDisplayObject = super.getTargetObject();
        return this;
    }
}
TranslateTransition["__class"] = "splashjs.animation.TranslateTransition";
TranslateTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




