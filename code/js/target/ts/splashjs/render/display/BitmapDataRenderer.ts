/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBitmapDataRenderer } from './iface/IBitmapDataRenderer';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IBitmapDrawable } from '../../display/iface/IBitmapDrawable';
import { IVideo } from '../../media/iface/IVideo';
import { ICameraRenderer } from '../media/iface/ICameraRenderer';
import { MediaStream } from '../../def/webrtc/MediaStream';
import { IRenderer } from '../iface/IRenderer';
import { ICamera } from '../../media/iface/ICamera';

export class BitmapDataRenderer extends EventDispatcherRenderer implements IBitmapDataRenderer {
    /*private*/ blob : Blob;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.blob===undefined) this.blob = null;
        super.setRenderObject(renderObject);
    }

    public draw(bitmapDrawable : IBitmapDrawable) {
        if(bitmapDrawable != null && (bitmapDrawable["__interfaces"] != null && bitmapDrawable["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0 || bitmapDrawable.constructor != null && bitmapDrawable.constructor["__interfaces"] != null && bitmapDrawable.constructor["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0)) {
            let video : IVideo = <IVideo><any>bitmapDrawable;
            let mediaStream : splashjs.def.webrtc.MediaStream = (<ICameraRenderer><any>video.getCamera().getRenderer()).getMediaStream();
            let imageCapture : Object = <any>(eval("new ImageCapture(mediaStream.getVideoTracks()[0]);"));
            let photoPromise : Promise<any> = <any>(eval("imageCapture.takePhoto();"));
            photoPromise.then((blobData) => {
                this.blob = <Blob>blobData;
            }).catch((error) => {
                console.info(error);
            });
        }
    }

    public getBlob() : Blob {
        return this.blob;
    }
}
BitmapDataRenderer["__class"] = "splashjs.render.display.BitmapDataRenderer";
BitmapDataRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IBitmapDataRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




