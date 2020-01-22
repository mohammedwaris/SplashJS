/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IStage } from '../../display/iface/IStage';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export interface IStageOwner extends IEventDispatcher {
    setWidth(width : number);

    setHeight(height : number);

    getWidth() : number;

    getHeight() : number;

    getStage() : IStage;
}


