/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from './IEventDispatcher';

export interface IEvent {
    getType() : string;

    getTarget() : IEventDispatcher;

    getCurrentTarget() : IEventDispatcher;

    setData(data : any);

    getData() : any;

    setTarget(target : IEventDispatcher);

    setCurrentTarget(currentTarget : IEventDispatcher);
}


