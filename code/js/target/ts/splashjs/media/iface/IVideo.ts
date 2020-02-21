/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { ICamera } from './ICamera';

export interface IVideo extends IDisplayObject {
    getVideoPath() : string;

    setVideoPath(videoPath : string);

    getCamera() : ICamera;
}


