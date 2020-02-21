/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { ITransition } from './iface/ITransition';
import { ITransitionRenderer } from '../render/animation/iface/ITransitionRenderer';
import { TransitionRenderer } from '../render/animation/TransitionRenderer';
import { Linear } from './easing/Linear';
import { Animation } from './Animation';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class Transition extends Animation implements ITransition {
    targetObject : IDisplayObject;

    from : number;

    to : number;

    duration : number;

    /*private*/ autoReverse : boolean = false;

    /*private*/ loopCount : number = 1;

    delay : number = 0;

    easing : string = Linear.EASE_NONE;

    public constructor() {
        super();
        if(this.targetObject===undefined) this.targetObject = null;
        if(this.from===undefined) this.from = 0;
        if(this.to===undefined) this.to = 0;
        if(this.duration===undefined) this.duration = 0;
    }

    public setTargetObject(targetObject : IDisplayObject) : ITransition {
        this.targetObject = targetObject;
        return this;
    }

    public getTargetObject() : IDisplayObject {
        return this.targetObject;
    }

    public setAutoReverse(autoReverse : boolean) : ITransition {
        this.autoReverse = autoReverse;
        return this;
    }

    public getAutoReverse() : boolean {
        return this.autoReverse;
    }

    public setLoopCount(loopCount : number) : ITransition {
        this.loopCount = loopCount;
        return this;
    }

    public getLoopCount() : number {
        return this.loopCount;
    }

    public setEasing(easing : string) : ITransition {
        this.easing = easing;
        return this;
    }

    public getEasing() : string {
        return this.easing;
    }

    public setFrom(from : number) : ITransition {
        this.from = from;
        return this;
    }

    public getFrom() : number {
        return this.from;
    }

    public setTo(to : number) : ITransition {
        this.to = to;
        return this;
    }

    public getTo() : number {
        return this.to;
    }

    public setDuration(duration : number) : ITransition {
        this.duration = duration;
        return this;
    }

    public getTransitionState() : string {
        return (<ITransitionRenderer><any>super.getRenderer()).getTransitionState();
    }

    public getDuration() : number {
        return this.duration;
    }

    public setDelay(delay : number) : ITransition {
        this.delay = delay;
        return this;
    }

    public getDelay() : number {
        return this.delay;
    }

    public isRunning() : boolean {
        return (<ITransitionRenderer><any>super.getRenderer()).isRunning();
    }

    public play() : ITransition {
        (<ITransitionRenderer><any>super.getRenderer()).play();
        return this;
    }

    public stop() : ITransition {
        (<ITransitionRenderer><any>super.getRenderer()).stop();
        return this;
    }

    public abstract update(nextValue : number) : ITransition;

    public static create(params : any) : ITransition {
        let transition : ITransition = TransitionRenderer.create(params);
        return transition;
    }
}
Transition["__class"] = "splashjs.animation.Transition";
Transition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




