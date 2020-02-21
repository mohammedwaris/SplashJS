/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { ITimer } from '../utils/iface/ITimer';
import { Timer } from '../utils/Timer';
import { TimerEvent } from '../events/TimerEvent';
import { ITransition } from './iface/ITransition';
import { Transition } from './Transition';

export class FadeTransition extends Transition {
    /*private*/ currentValue : number;

    /**
     * 
     * @param {number} nextValue
     * @return {*}
     */
    public update(nextValue : number) : ITransition {
        let targetObject : IDisplayObject = super.getTargetObject();
        targetObject.setAlpha(nextValue);
        return this;
    }

    public play() : ITransition {
        return this;
    }

    constructor() {
        super();
        if(this.currentValue===undefined) this.currentValue = 0;
    }
}
FadeTransition["__class"] = "splashjs.animation.FadeTransition";
FadeTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




