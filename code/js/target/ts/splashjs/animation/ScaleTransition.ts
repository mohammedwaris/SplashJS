/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { TimerEvent } from '../events/TimerEvent';
import { Timer } from '../utils/Timer';
import { ITransition } from './iface/ITransition';
import { IScaleTransition } from './iface/IScaleTransition';
import { Elastic } from './easing/Elastic';
import { Transition } from './Transition';
import { ScaleTransitionType } from './ScaleTransitionType';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class ScaleTransition extends Transition implements IScaleTransition {
    /*private*/ scaleTransitionType : string = ScaleTransitionType.XY;

    public constructor() {
        super();
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(ScaleTransition, this));
    }

    public setScaleTransitionType(scaleTransitionType : string) {
        this.scaleTransitionType = scaleTransitionType;
    }

    public getScaleTransitionType() : string {
        return this.scaleTransitionType;
    }

    /**
     * 
     * @param {number} nextValue
     * @return {*}
     */
    public update(nextValue : number) : ITransition {
        let targetObject : IDisplayObject = super.getTargetObject();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, ScaleTransitionType.X)) {
            targetObject.setScaleX(nextValue);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, ScaleTransitionType.Y)) {
            targetObject.setScaleY(nextValue);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, ScaleTransitionType.XY)) {
            targetObject.setScaleX(nextValue);
            targetObject.setScaleY(nextValue);
        }
        return this;
    }
}
ScaleTransition["__class"] = "splashjs.animation.ScaleTransition";
ScaleTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.animation.iface.IScaleTransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




