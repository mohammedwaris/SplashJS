/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { IAnimation } from './IAnimation';

export interface ITransition extends IAnimation {
    getTransitionState() : string;

    getAutoReverse() : boolean;

    setAutoReverse(autoReverse : boolean) : ITransition;

    getLoopCount() : number;

    setLoopCount(loopCount : number) : ITransition;

    setDuration(duration : number) : ITransition;

    getDuration() : number;

    setDelay(delay : number) : ITransition;

    getDelay() : number;

    getTo() : number;

    setTo(to : number) : ITransition;

    setFrom(from : number) : ITransition;

    getFrom() : number;

    setEasing(easing : string) : ITransition;

    getEasing() : string;

    getTargetObject() : IDisplayObject;

    setTargetObject(targetObject : IDisplayObject) : ITransition;

    update(nextValue : number) : ITransition;

    play() : ITransition;

    stop() : ITransition;
}


