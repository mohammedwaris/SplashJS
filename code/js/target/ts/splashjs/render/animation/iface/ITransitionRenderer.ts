/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';

export interface ITransitionRenderer extends IEventDispatcherRenderer {
    play();

    stop();

    isRunning() : boolean;

    getTransitionState() : string;
}


