/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../../events/Event';
import { RenderElement } from '../RenderElement';
import { DisplayObjectRenderer } from '../display/DisplayObjectRenderer';
import { IEvent } from '../../events/iface/IEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IRenderElement } from '../iface/IRenderElement';

export class VideoRenderer extends DisplayObjectRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        this.renderElement = new RenderElement(<HTMLVideoElement>document.createElement("video"));
        this.getHTMLVideoElement().addEventListener("canplaythrough", (event) => {
            this.getHTMLVideoElement().controls = true;
            let loadedEvent : IEvent = new splashjs.events.Event(Event.LOADED, super.getRenderObject(), super.getRenderObject());
            super.getRenderObject().dispatchEvent(loadedEvent);
        });
        this.getHTMLVideoElement().addEventListener("click", (event) => {
            console.info("video clicked");
        });
    }

    public playVideo() {
        let js : string = "var playPromise = " + super.getRenderObjectID() + ".play();";
        js += "if(playPromise !== undefined) {";
        js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
        js += "}";
        Globals.eval(js);
    }

    /*private*/ getHTMLVideoElement() : HTMLVideoElement {
        return <HTMLVideoElement>super.getDOMElement();
    }
}
VideoRenderer["__class"] = "splashjs.render.media.VideoRenderer";
VideoRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




