/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { EventDispatcher } from '../events/EventDispatcher';
import { ITimer } from './iface/ITimer';
import { TimerTask } from '../../java/util/TimerTask';
import { TimerEvent } from '../events/TimerEvent';

export class Timer extends EventDispatcher implements ITimer {
    /*private*/ currentCount : number;

    /*private*/ delay : number;

    /*private*/ repeatCount : number;

    /*private*/ running : boolean;

    /*private*/ self : ITimer;

    /*private*/ jTimer : java.util.Timer;

    public constructor(delay? : any, repeatCount? : any) {
        if(((typeof delay === 'number') || delay === null) && ((typeof repeatCount === 'number') || repeatCount === null)) {
            let __args = arguments;
            super("timer");
            this.currentCount = 0;
            this.delay = 0;
            this.repeatCount = 0;
            this.running = false;
            this.self = this;
            this.jTimer = new java.util.Timer();
            (() => {
                this.delay = delay;
                this.repeatCount = repeatCount;
            })();
        } else if(((typeof delay === 'number') || delay === null) && repeatCount === undefined) {
            let __args = arguments;
            super("timer");
            this.currentCount = 0;
            this.delay = 0;
            this.repeatCount = 0;
            this.running = false;
            this.self = this;
            this.jTimer = new java.util.Timer();
            (() => {
                this.delay = delay;
            })();
        } else if(delay === undefined && repeatCount === undefined) {
            let __args = arguments;
            super("timer");
            this.currentCount = 0;
            this.delay = 0;
            this.repeatCount = 0;
            this.running = false;
            this.self = this;
            this.jTimer = new java.util.Timer();
        } else throw new Error('invalid overload');
    }

    public reset() {
        this.jTimer.cancel();
        this.currentCount = 0;
        this.running = false;
    }

    public start() {
        this.jTimer.scheduleAtFixedRate$java_util_TimerTask$long$long(new Timer.Timer$0(this), this.delay, this.delay);
        this.running = true;
    }

    public stop() {
        this.jTimer.cancel();
        this.running = false;
    }

    public getCurrentCount() : number {
        return this.currentCount;
    }

    public getDelay() : number {
        return this.delay;
    }

    public setDelay(delay : number) {
        this.delay = delay;
    }

    public getRepeatCount() : number {
        return this.repeatCount;
    }

    public setRepeatCount(repeatCount : number) {
        this.repeatCount = repeatCount;
    }

    public isRunning() : boolean {
        return this.running;
    }
}
Timer["__class"] = "splashjs.utils.Timer";
Timer["__interfaces"] = ["splashjs.utils.iface.ITimer","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];



export namespace Timer {

    export class Timer$0 extends java.util.TimerTask {
        public __parent: any;
        public run() {
            this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER, this.__parent.self, this.__parent.self));
            this.__parent.currentCount += 1;
            if(this.__parent.currentCount === this.__parent.repeatCount) {
                this.__parent.jTimer.cancel();
                this.__parent.running = false;
                this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER_COMPLETE, this.__parent.self, this.__parent.self));
            }
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    Timer$0["__interfaces"] = ["java.lang.Runnable"];


}



