/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export interface ITimer extends IEventDispatcher {
    start();

    reset();

    stop();

    getCurrentCount() : number;

    getDelay() : number;

    setDelay(delay : number);

    getRepeatCount() : number;

    setRepeatCount(repeatCount : number);

    isRunning() : boolean;
}


