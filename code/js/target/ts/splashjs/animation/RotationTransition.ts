/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { ITransition } from './iface/ITransition';
import { Transition } from './Transition';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class RotationTransition extends Transition {
    public constructor() {
        super();
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(RotationTransition, this));
    }

    /**
     * 
     * @param {number} nextValue
     * @return {*}
     */
    public update(nextValue : number) : ITransition {
        let targetObject : IDisplayObject = super.getTargetObject();
        targetObject.setRotation(nextValue);
        return this;
    }
}
RotationTransition["__class"] = "splashjs.animation.RotationTransition";
RotationTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




