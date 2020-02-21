/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ICamera } from '../../media/iface/ICamera';
import { IPermissionEvent } from '../../events/iface/IPermissionEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { PermissionEvent } from '../../events/PermissionEvent';
import { ICameraRenderer } from './iface/ICameraRenderer';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { PermissionStatus } from '../../permissions/PermissionStatus';
import { MediaStream } from '../../def/webrtc/MediaStream';

export class CameraRenderer extends EventDispatcherRenderer implements ICameraRenderer {
    /*private*/ mediaStream : splashjs.def.webrtc.MediaStream;

    /*private*/ camera : ICamera;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.mediaStream===undefined) this.mediaStream = null;
        if(this.camera===undefined) this.camera = null;
        super.setRenderObject(renderObject);
        this.camera = <ICamera><any>renderObject;
    }

    public requestPermission() {
        let cameraPromise : Promise<any> = <any>(eval("navigator.mediaDevices.getUserMedia({video: true});"));
        cameraPromise.then((mStream) => {
            this.mediaStream = <splashjs.def.webrtc.MediaStream>mStream;
            let permissionEvent : IPermissionEvent = new PermissionEvent(PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
            permissionEvent.setStatus(PermissionStatus.GRANTED);
            this.camera.dispatchEvent(permissionEvent);
        }).catch((error) => {
            let permissionEvent : IPermissionEvent = new PermissionEvent(PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
            permissionEvent.setStatus(PermissionStatus.DENIED);
            this.camera.dispatchEvent(permissionEvent);
        });
    }

    public setMediaStream(mediaStream : splashjs.def.webrtc.MediaStream) {
        this.mediaStream = mediaStream;
    }

    public getMediaStream() : splashjs.def.webrtc.MediaStream {
        return this.mediaStream;
    }
}
CameraRenderer["__class"] = "splashjs.render.media.CameraRenderer";
CameraRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.media.iface.ICameraRenderer"];




