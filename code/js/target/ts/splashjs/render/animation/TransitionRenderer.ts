/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ITimer } from '../../utils/iface/ITimer';
import { TimerEvent } from '../../events/TimerEvent';
import { Timer } from '../../utils/Timer';
import { TransitionState } from '../../animation/TransitionState';
import { ITransition } from '../../animation/iface/ITransition';
import { IScaleTransition } from '../../animation/iface/IScaleTransition';
import { TransitionEvent } from '../../events/TransitionEvent';
import { Linear } from '../../animation/easing/Linear';
import { Elastic } from '../../animation/easing/Elastic';
import { Quint } from '../../animation/easing/Quint';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ITransitionEvent } from '../../events/iface/ITransitionEvent';
import { ScaleTransitionType } from '../../animation/ScaleTransitionType';
import { TransitionType } from '../../animation/TransitionType';
import { ScaleTransition } from '../../animation/ScaleTransition';
import { ITransitionRenderer } from './iface/ITransitionRenderer';
import { AnimationRenderer } from './AnimationRenderer';
import { IEvent } from '../../events/iface/IEvent';

export abstract class TransitionRenderer extends AnimationRenderer implements ITransitionRenderer {
    animTimer : ITimer;

    delayTimer : ITimer;

    repeatCount : number;

    currentState : string = TransitionState.NONE;

    fps : number = 60;

    deltaTime : number = (1000 / this.fps|0);

    /*private*/ transition : ITransition;

    /*private*/ currentLoopCount : number = 0;

    /*private*/ running : boolean = false;

    /*private*/ transitionEvent : ITransitionEvent = null;

    ctr : number = 0;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.animTimer===undefined) this.animTimer = null;
        if(this.delayTimer===undefined) this.delayTimer = null;
        if(this.repeatCount===undefined) this.repeatCount = 0;
        if(this.transition===undefined) this.transition = null;
        super.setRenderObject(renderObject);
        this.transition = (<ITransition><any>this.getRenderObject());
    }

    public play() {
        this.repeatCount = (<number>((this.transition.getDuration() / this.deltaTime|0))|0);
        this.animTimer = new Timer(this.deltaTime, this.repeatCount);
        console.info(this.deltaTime + " " + this.repeatCount);
        this.animTimer.addEventListener(TimerEvent.TIMER, (event) => {
            let currentTime : number = this.deltaTime * (this.animTimer.getCurrentCount() + 1);
            let nextValue : number = 0.0;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.NORMAL)) nextValue = this.getNextValue(currentTime, this.transition.getFrom(), this.transition.getTo(), this.transition.getDuration(), this.transition.getEasing()); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.REVERSE)) nextValue = this.getNextValue(currentTime, this.transition.getTo(), this.transition.getFrom(), this.transition.getDuration(), this.transition.getEasing());
            this.transition.update(nextValue);
            this.ctr++;
            console.info("nextValue: " + nextValue + " ctr: " + this.ctr + " currentCount: " + this.animTimer.getCurrentCount() + " repeatCount: " + this.repeatCount);
        });
        this.animTimer.addEventListener(TimerEvent.TIMER_COMPLETE, (event) => {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.NORMAL)) this.transition.update(this.transition.getTo()); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.REVERSE)) this.transition.update(this.transition.getFrom());
            if(this.transition.getAutoReverse() === true) {
                this.currentLoopCount += 1;
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.NORMAL)) this.currentState = TransitionState.REVERSE; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, TransitionState.REVERSE)) this.currentState = TransitionState.NORMAL;
            } else {
                this.currentLoopCount += 2;
            }
            if(this.running === true && (this.transition.getLoopCount() === 0 || this.currentLoopCount < this.transition.getLoopCount() * 2)) {
                this.animTimer.reset();
                this.animTimer.start();
            } else {
                this.running = false;
                let transitionEvent : splashjs.events.iface.ITransitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE);
                this.transition.dispatchEvent(transitionEvent);
            }
            if(this.transition.getLoopCount() <= this.currentLoopCount) {
                this.transitionEvent = new TransitionEvent(TransitionEvent.LOOP_INTERVAL_COMPLETE, this.transition, this.transition);
                this.transition.dispatchEvent(this.transitionEvent);
            }
            if(this.transition.getLoopCount() === this.currentLoopCount) {
                this.transitionEvent = new TransitionEvent(TransitionEvent.COMPLETE, this.transition, this.transition);
                this.transition.dispatchEvent(this.transitionEvent);
                this.currentState = TransitionState.NONE;
            }
        });
        if(this.transition.getDelay() > 0) {
            this.delayTimer = new Timer(this.transition.getDelay(), 1);
            this.delayTimer.addEventListener(TimerEvent.TIMER_COMPLETE, (event) => {
                this.transitionEvent = new TransitionEvent(TransitionEvent.DELAY_COMPLETE, this.transition, this.transition);
                this.transition.dispatchEvent(this.transitionEvent);
                this.animTimer.start();
            });
            this.running = true;
            this.currentState = TransitionState.NORMAL;
            this.delayTimer.start();
        } else {
            this.running = true;
            this.currentState = TransitionState.NORMAL;
            this.animTimer.start();
        }
    }

    public stop() {
        this.running = false;
    }

    public isRunning() : boolean {
        return this.running;
    }

    /*private*/ getNextValue(currentTime : number, from : number, to : number, duration : number, easing : string) : number {
        let nextValue : number = 0.0;
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Linear.EASE_NONE)) {
            nextValue = Linear.easeNone(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Linear.EASE_IN)) {
            nextValue = Linear.easeIn(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Linear.EASE_OUT)) {
            nextValue = Linear.easeOut(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Linear.EASE_IN_OUT)) {
            nextValue = Linear.easeInOut(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Elastic.EASE_IN)) {
            nextValue = Elastic.easeIn$double$double$double$double(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Elastic.EASE_OUT)) {
            nextValue = Elastic.easeOut$double$double$double$double(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Elastic.EASE_IN_OUT)) {
            nextValue = Elastic.easeInOut$double$double$double$double(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Quint.EASE_IN)) {
            nextValue = Quint.easeIn(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Quint.EASE_OUT)) {
            nextValue = Quint.easeOut(currentTime, from, to - from, duration);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, Quint.EASE_IN_OUT)) {
            nextValue = Quint.easeInOut(currentTime, from, to - from, duration);
        }
        return nextValue;
    }

    public getTransitionState() : string {
        return this.currentState;
    }

    public static create(inparams : any) : ITransition {
        let params : Object = <Object>inparams;
        let transition : ITransition = null;
        let type : string = <any>(params["type"]);
        if(type != null && !/* isEmpty */(type.length === 0)) {
            let target : IDisplayObject;
            let from : number;
            let to : number;
            let ease : string;
            let duration : number;
            let autoReverse : boolean;
            let loopCount : number;
            let delay : number;
            let onComplete : Function;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_X) || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_X) || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_XY)) {
                transition = new ScaleTransition();
                target = <any>(params["target"]);
                from = <any>(params["from"]);
                to = <any>(params["to"]);
                ease = params["ease"] === undefined?transition.getEasing():<any>(params["ease"]);
                duration = params["duration"] === undefined?transition.getDuration():<any>(params["duration"]);
                autoReverse = params["autoReverse"] === undefined?transition.getAutoReverse():<any>(params["autoReverse"]);
                loopCount = params["loopCount"] === undefined?transition.getLoopCount():<any>(params["loopCount"]);
                delay = <any>(params["delay"]);
                onComplete = <any>(params["onComplete"]);
                transition.setTargetObject(target).setFrom(from).setTo(to).setDuration(duration).setAutoReverse(autoReverse).setLoopCount(loopCount).setDelay(delay).setEasing(ease).addEventListener(TransitionEvent.COMPLETE, ((onComplete) => {
                    return (event) => {
                        onComplete.apply(event);
                    }
                })(onComplete));
            }
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_X)) (<IScaleTransition><any>transition).setScaleTransitionType(ScaleTransitionType.X); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_Y)) (<IScaleTransition><any>transition).setScaleTransitionType(ScaleTransitionType.Y); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, TransitionType.SCALE_XY)) (<IScaleTransition><any>transition).setScaleTransitionType(ScaleTransitionType.XY);
        }
        return transition;
    }
}
TransitionRenderer["__class"] = "splashjs.render.animation.TransitionRenderer";
TransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




