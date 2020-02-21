/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../../events/Event';
import { RenderElement } from '../RenderElement';
import { DisplayObjectRenderer } from '../display/DisplayObjectRenderer';
import { ISound } from '../../media/iface/ISound';
import { IEvent } from '../../events/iface/IEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export class SoundRenderer extends DisplayObjectRenderer {
    /*private*/ htmlAudioElement : HTMLAudioElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlAudioElement===undefined) this.htmlAudioElement = null;
        super.setRenderObject(renderObject);
        this.htmlAudioElement = <HTMLAudioElement>document.createElement("audio");
        super.setRenderElement(new RenderElement(this.htmlAudioElement));
        this.htmlAudioElement.addEventListener("canplaythrough", (event) => {
            this.htmlAudioElement.controls = true;
            let loadedEvent : IEvent = new splashjs.events.Event(Event.LOADED, super.getRenderObject(), super.getRenderObject());
            super.getRenderObject().dispatchEvent(loadedEvent);
        });
        this.htmlAudioElement.addEventListener("click", (event) => {
            console.info("sound clicked");
        });
        this.create();
    }

    public create() {
        this.setSoundPath();
        document.body.appendChild(this.htmlAudioElement);
        super.setDisplay("none");
    }

    public setSoundPath() {
        let soundPath : string = (<ISound><any>super.getRenderObject()).getSoundPath();
        this.htmlAudioElement.src = soundPath;
    }

    public playSound() {
        let js : string = "var playPromise = document.getElementById(\"" + super.getRenderObjectID() + "\").play();";
        js += "if(playPromise !== undefined) {";
        js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
        js += "}";
        Globals.eval(js);
    }

    public pauseSound() {
        this.htmlAudioElement.pause();
    }

    /*private*/ getHTMLAudioElement() : HTMLAudioElement {
        return <HTMLAudioElement>super.getDOMElement();
    }
}
SoundRenderer["__class"] = "splashjs.render.media.SoundRenderer";
SoundRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




