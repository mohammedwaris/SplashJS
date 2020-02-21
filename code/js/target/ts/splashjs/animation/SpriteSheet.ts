/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { ISpriteSheet } from './iface/ISpriteSheet';
import { IMovieClipData } from './iface/IMovieClipData';
import { ISpriteData } from './iface/ISpriteData';
import { IFrame } from './iface/IFrame';
import { ISprite } from '../display/iface/ISprite';
import { IMovieClip } from '../display/iface/IMovieClip';
import { ISpriteSheetRenderer } from '../render/animation/iface/ISpriteSheetRenderer';
import { IResource } from '../utils/iface/IResource';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';
import { SpriteData } from './SpriteData';
import { Frame } from './Frame';
import { MovieClipData } from './MovieClipData';

export class SpriteSheet extends EventDispatcher implements ISpriteSheet {
    /*private*/ imagePath : string;

    /*private*/ imageBase64 : string;

    /*private*/ resource : IResource;

    /*private*/ movieClipsData : Array<IMovieClipData>;

    /*private*/ spritesData : Array<ISpriteData>;

    public constructor(imagePath? : any) {
        if(((typeof imagePath === 'string') || imagePath === null)) {
            let __args = arguments;
            super("spriteSheet");
            if(this.imagePath===undefined) this.imagePath = null;
            if(this.imageBase64===undefined) this.imageBase64 = null;
            if(this.resource===undefined) this.resource = null;
            this.movieClipsData = <any>([]);
            this.spritesData = <any>([]);
            if(this.imagePath===undefined) this.imagePath = null;
            if(this.imageBase64===undefined) this.imageBase64 = null;
            if(this.resource===undefined) this.resource = null;
            (() => {
                this.imagePath = imagePath;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
            })();
        } else if(((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
            let __args = arguments;
            let resource : any = __args[0];
            super("spriteSheet");
            if(this.imagePath===undefined) this.imagePath = null;
            if(this.imageBase64===undefined) this.imageBase64 = null;
            if(this.resource===undefined) this.resource = null;
            this.movieClipsData = <any>([]);
            this.spritesData = <any>([]);
            if(this.imagePath===undefined) this.imagePath = null;
            if(this.imageBase64===undefined) this.imageBase64 = null;
            if(this.resource===undefined) this.resource = null;
            (() => {
                this.resource = resource;
                this.imagePath = resource.getResourcePath();
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
            })();
        } else throw new Error('invalid overload');
    }

    public getImagePath() : string {
        return this.imagePath;
    }

    public getResource() : IResource {
        return this.resource;
    }

    public setImageBase64(imageBase64 : string) {
        this.imageBase64 = imageBase64;
    }

    public getImageBase64() : string {
        return this.imageBase64;
    }

    public getWidth() : number {
        return (<ISpriteSheetRenderer><any>super.getRenderer()).getWidth();
    }

    public getHeight() : number {
        return (<ISpriteSheetRenderer><any>super.getRenderer()).getHeight();
    }

    public defineSprite(label : string, frame : IFrame) {
        /* add */(this.spritesData.push(new SpriteData(this, label, frame))>0);
    }

    public defineMovieClip(label : string, frameWidth : number, frameHeight : number, ...frameIndices : number[]) {
        let frames : IFrame[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(frameIndices.length);
        let frame : IFrame = null;
        for(let i : number = 0; i < frameIndices.length; i++) {{
            frame = new Frame(frameWidth, frameHeight, frameIndices[i]);
            frames[i] = frame;
        };}
        /* add */(this.movieClipsData.push(new MovieClipData(this, label, frames))>0);
    }

    /*private*/ getSprite(name : string) : ISprite {
        return (<ISpriteSheetRenderer><any>super.getRenderer()).getSprite(name);
    }

    public getMovieClip(name : string) : IMovieClip {
        return (<ISpriteSheetRenderer><any>super.getRenderer()).getMovieClip(name);
    }

    public getSpriteDataByLabel(label : string) : ISpriteData {
        let spriteData : ISpriteData = null;
        for(let i : number = 0; i < /* size */(<number>this.spritesData.length); i++) {{
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.spritesData[i].getLabel(), label)) {
                spriteData = /* get */this.spritesData[i];
                break;
            }
        };}
        return spriteData;
    }

    public getMovieClipDataByLabel(label : string) : IMovieClipData {
        let movieClipData : IMovieClipData = null;
        for(let i : number = 0; i < /* size */(<number>this.movieClipsData.length); i++) {{
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.movieClipsData[i].getLabel(), label)) {
                movieClipData = /* get */this.movieClipsData[i];
                break;
            }
        };}
        return movieClipData;
    }

    public getAllAnimations() : Array<IMovieClipData> {
        return this.movieClipsData;
    }
}
SpriteSheet["__class"] = "splashjs.animation.SpriteSheet";
SpriteSheet["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.animation.iface.ISpriteSheet"];




