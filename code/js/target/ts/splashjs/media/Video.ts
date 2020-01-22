/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { DisplayObject } from '../display/DisplayObject';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IResource } from '../utils/iface/IResource';
import { IVideo } from './iface/IVideo';
import { IVideoRenderer } from '../render/media/iface/IVideoRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';
import { Sound } from './Sound';

export class Video extends DisplayObject implements IVideo {
    /*private*/ resource : IResource;

    /*private*/ videoPath : string;

    public constructor(resource? : any) {
        if(((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
            let __args = arguments;
            super("video");
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Sound, this));
                this.videoPath = resource.getResourcePath();
            })();
        } else if(((typeof resource === 'string') || resource === null)) {
            let __args = arguments;
            let videoPath : any = __args[0];
            super("video");
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            if(this.resource===undefined) this.resource = null;
            if(this.videoPath===undefined) this.videoPath = null;
            (() => {
                this.videoPath = videoPath;
            })();
        } else throw new Error('invalid overload');
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
Video["__interfaces"] = ["splashjs.media.iface.IVideo","splashjs.display.iface.IDisplayObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




