/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { DisplayObject } from '../display/DisplayObject';
import { IStage } from '../display/iface/IStage';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IResource } from '../utils/iface/IResource';
import { ISound } from './iface/ISound';
import { ISoundRenderer } from '../render/media/iface/ISoundRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Sound extends DisplayObject implements ISound {
    /*private*/ resource : IResource;

    /*private*/ soundPath : string;

    public constructor(resource? : any) {
        if(((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
            let __args = arguments;
            super("sound");
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
            (() => {
                this.soundPath = resource.getResourcePath();
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Sound, this));
            })();
        } else if(((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) || resource === null)) {
            let __args = arguments;
            let stage : any = __args[0];
            super("sound");
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
        } else if(((typeof resource === 'string') || resource === null)) {
            let __args = arguments;
            let soundPath : any = __args[0];
            super("sound");
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
            if(this.resource===undefined) this.resource = null;
            if(this.soundPath===undefined) this.soundPath = null;
            (() => {
                this.soundPath = soundPath;
            })();
        } else throw new Error('invalid overload');
    }

    public setSoundPath(soundPath : string) {
        this.soundPath = soundPath;
        if(super.getRenderer() != null) (<ISoundRenderer><any>super.getRenderer()).setSoundPath();
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
        }
        return super.dispatchEvent(event);
    }

    /**
     * 
     * @return {string}
     */
    public getSoundPath() : string {
        return this.soundPath;
    }

    /**
     * 
     */
    public render() {
        super.render();
    }

    public play() {
        if(super.getRenderer() != null) (<ISoundRenderer><any>super.getRenderer()).playSound();
    }

    public pause() {
        if(super.getRenderer() != null) (<ISoundRenderer><any>super.getRenderer()).pauseSound();
    }

    public toString() : string {
        return "[object Sound]";
    }
}
Sound["__class"] = "splashjs.media.Sound";
Sound["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.media.iface.ISound","splashjs.events.iface.IEventDispatcher"];




