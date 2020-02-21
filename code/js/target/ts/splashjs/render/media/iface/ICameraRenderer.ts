/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';
import { MediaStream } from '../../../def/webrtc/MediaStream';

export interface ICameraRenderer extends IEventDispatcherRenderer {
    setMediaStream(mediaStream : splashjs.def.webrtc.MediaStream);

    getMediaStream() : splashjs.def.webrtc.MediaStream;

    requestPermission();
}


