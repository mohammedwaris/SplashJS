/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../../events/Event';
import { IApplicationRenderer } from './iface/IApplicationRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IEvent } from '../../events/iface/IEvent';

export class ApplicationRenderer extends EventDispatcherRenderer implements IApplicationRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        document.body.addEventListener("online", (event) => {
            let onlineEvent : IEvent = new splashjs.events.Event(Event.ONLINE);
            this.getRenderObject().dispatchEvent(onlineEvent);
        });
        document.body.addEventListener("offline", (event) => {
            let offlineEvent : IEvent = new splashjs.events.Event(Event.OFFLINE);
            this.getRenderObject().dispatchEvent(offlineEvent);
        });
    }

    public isOnline() : boolean {
        let online : boolean = false;
        if(navigator.onLine === true) online = true;
        return online;
    }
}
ApplicationRenderer["__class"] = "splashjs.render.application.ApplicationRenderer";
ApplicationRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.application.iface.IApplicationRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




