/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRenderer } from '../../render/iface/IRenderer';
import { IStage } from '../../display/iface/IStage';
import { IEvent } from './IEvent';

export interface IEventDispatcher {
    addEventListener(eventName : string, eventHandler : (p1: IEvent) => void);

    removeEventListener(eventName : string, eventHandler : (p1: IEvent) => void);

    removeAllEventListeners(eventName : string);

    setRenderer(renderer : IRenderer);

    getRenderer() : IRenderer;

    getStage() : IStage;

    dispatchEvent(event : IEvent) : boolean;

    getUniqueID() : string;

    getID() : string;

    render();
}


