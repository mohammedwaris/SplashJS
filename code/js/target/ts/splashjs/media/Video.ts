/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { DisplayObject } from '../display/DisplayObject';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IResource } from '../utils/iface/IResource';
import { IVideo } from './iface/IVideo';
import { ICamera } from './iface/ICamera';
import { IVideoRenderer } from '../render/media/iface/IVideoRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Video extends DisplayObject implements IVideo {
    /*private*/ resource : IResource;

    /*private*/ videoPath : string;

    /*private*/ camera : ICamera;

    public constructor(width? : any, height? : any) {
        if(((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
            let __args = arguments;
            super("video");
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            (() => {
                this.width = width;
                this.height = height;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
            })();
        } else if(((width != null && (width["__interfaces"] != null && width["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || width.constructor != null && width.constructor["__interfaces"] != null && width.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || width === null) && height === undefined) {
            let __args = arguments;
            let resource : any = __args[0];
            super("video");
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
                this.videoPath = resource.getResourcePath();
            })();
        } else if(((typeof width === 'string') || width === null) && height === undefined) {
            let __args = arguments;
            let videoPath : any = __args[0];
            super("video");
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.camera===undefined) this.camera = null;
            (() => {
                this.videoPath = videoPath;
            })();
        } else throw new Error('invalid overload');
    }

    public attachCamera(camera : ICamera) {
        this.camera = camera;
        (<IVideoRenderer><any>super.getRenderer()).attachCamera(camera);
    }

    public getCamera() : ICamera {
        return this.camera;
    }

    public dispatchEvent(event : IEvent) : boolean {
        let val : boolean = super.dispatchEvent(event);
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
        }
        return val;
    }

    /**
     * 
     * @return {string}
     */
    public getVideoPath() : string {
        return this.videoPath;
    }

    /**
     * 
     * @param {string} videoPath
     */
    public setVideoPath(videoPath : string) {
        this.videoPath = videoPath;
    }

    /**
     * 
     */
    public render() {
        super.render();
    }

    public play() {
        (<IVideoRenderer><any>super.getRenderer()).playVideo();
    }

    public toString() : string {
        return "[object Video]";
    }
}
Video["__class"] = "splashjs.media.Video";
Video["__interfaces"] = ["splashjs.media.iface.IVideo","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




