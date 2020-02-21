/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../../events/Event';
import { RenderElement } from '../RenderElement';
import { DisplayObjectRenderer } from '../display/DisplayObjectRenderer';
import { IEvent } from '../../events/iface/IEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IVideo } from '../../media/iface/IVideo';
import { ICamera } from '../../media/iface/ICamera';
import { ICameraRenderer } from './iface/ICameraRenderer';
import { MediaStream } from '../../def/webrtc/MediaStream';
import { IRenderer } from '../iface/IRenderer';

export class VideoRenderer extends DisplayObjectRenderer {
    /*private*/ videoElement : HTMLVideoElement;

    /*private*/ video : IVideo;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.videoElement===undefined) this.videoElement = null;
        if(this.video===undefined) this.video = null;
        super.setRenderObject(renderObject);
        this.video = <IVideo><any>renderObject;
        this.videoElement = <HTMLVideoElement>document.createElement("video");
        super.setRenderElement(new RenderElement(this.videoElement));
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

    public attachCamera(camera : ICamera) {
        let mediaStream : splashjs.def.webrtc.MediaStream = (<ICameraRenderer><any>camera.getRenderer()).getMediaStream();
        eval("this.videoElement.srcObject = mediaStream");
    }

    /*private*/ getHTMLVideoElement() : HTMLVideoElement {
        return <HTMLVideoElement>super.getDOMElement();
    }

    public applyCSS() {
        super.applyCSS();
        this.videoElement.style.width = this.video.getWidth() + this.UNIT;
        this.videoElement.style.height = this.video.getHeight() + this.UNIT;
    }
}
VideoRenderer["__class"] = "splashjs.render.media.VideoRenderer";
VideoRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




