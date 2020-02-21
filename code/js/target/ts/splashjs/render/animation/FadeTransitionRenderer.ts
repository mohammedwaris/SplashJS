/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { TransitionRenderer } from './TransitionRenderer';

export class FadeTransitionRenderer extends TransitionRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super(renderObject);
    }
}
FadeTransitionRenderer["__class"] = "splashjs.render.animation.FadeTransitionRenderer";
FadeTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




