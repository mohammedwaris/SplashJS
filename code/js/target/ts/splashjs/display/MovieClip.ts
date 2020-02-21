/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { ISpriteSheet } from '../animation/iface/ISpriteSheet';
import { IMovieClip } from './iface/IMovieClip';
import { IMovieClipData } from '../animation/iface/IMovieClipData';
import { IMovieClipRenderer } from '../render/display/iface/IMovieClipRenderer';
import { Sprite } from './Sprite';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class MovieClip extends Sprite implements IMovieClip {
    /*private*/ movieClipsData : Array<IMovieClipData>;

    /*private*/ frameRate : number;

    public constructor(movieClipData? : any) {
        if(((movieClipData != null && (movieClipData["__interfaces"] != null && movieClipData["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0 || movieClipData.constructor != null && movieClipData.constructor["__interfaces"] != null && movieClipData.constructor["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0)) || movieClipData === null)) {
            let __args = arguments;
            super("movieClip");
            if(this.movieClipsData===undefined) this.movieClipsData = null;
            this.frameRate = 10;
            if(this.movieClipsData===undefined) this.movieClipsData = null;
            (() => {
                this.movieClipsData = <any>([]);
                /* add */(this.movieClipsData.push(movieClipData)>0);
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                this.init();
            })();
        } else if(((movieClipData != null && (movieClipData instanceof Array)) || movieClipData === null)) {
            let __args = arguments;
            let movieClipsData : any = __args[0];
            super("movieClip");
            if(this.movieClipsData===undefined) this.movieClipsData = null;
            this.frameRate = 10;
            if(this.movieClipsData===undefined) this.movieClipsData = null;
            (() => {
                this.movieClipsData = movieClipsData;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                this.init();
            })();
        } else throw new Error('invalid overload');
    }

    /*private*/ init() {
        if(/* size */(<number>this.getAllLabels().length) > 0) {
            this.gotoAndStop(/* get */this.getAllLabels()[0]);
        }
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

    public setFrameRate(frameRate : number) {
        this.frameRate = frameRate;
    }

    public getFrameRate() : number {
        return this.frameRate;
    }

    public gotoAndStop(label : string, frameIndex : number = 0) {
        (<IMovieClipRenderer><any>super.getRenderer()).gotoAndStop(label, frameIndex);
    }

    public gotoAndPlay(label : string, loopCount : number = 1) {
        (<IMovieClipRenderer><any>super.getRenderer()).gotoAndPlay(label, loopCount);
    }

    public getCurrentLabel() : string {
        return (<IMovieClipRenderer><any>super.getRenderer()).getCurrentLabel();
    }

    public getCurrentFrameIndex() : number {
        return (<IMovieClipRenderer><any>super.getRenderer()).getCurrentFrameIndex();
    }

    public isPlaying$() : boolean {
        return (<IMovieClipRenderer><any>super.getRenderer()).isPlaying();
    }

    public isPlaying$java_lang_String(label : string) : boolean {
        return (<IMovieClipRenderer><any>super.getRenderer())['isPlaying$java_lang_String'](label);
    }

    public isPlaying(label? : any) : any {
        if(((typeof label === 'string') || label === null)) {
            return <any>this.isPlaying$java_lang_String(label);
        } else if(label === undefined) {
            return <any>this.isPlaying$();
        } else throw new Error('invalid overload');
    }

    public getCurrentLoopCount() : number {
        return (<IMovieClipRenderer><any>super.getRenderer()).getCurrentLoopCount();
    }

    public isLooping() : boolean {
        return (<IMovieClipRenderer><any>super.getRenderer()).isLooping();
    }

    public getAllLabels() : Array<string> {
        let labels : Array<string> = <any>([]);
        for(let i : number = 0; i < /* size */(<number>this.movieClipsData.length); i++) {{
            /* add */(labels.push(/* get */this.movieClipsData[i].getLabel())>0);
        };}
        return labels;
    }

    public play() {
        (<IMovieClipRenderer><any>super.getRenderer()).play();
    }

    public stop() {
        (<IMovieClipRenderer><any>super.getRenderer()).stop();
    }
}
MovieClip["__class"] = "splashjs.display.MovieClip";
MovieClip["__interfaces"] = ["splashjs.display.iface.IDraggable","splashjs.display.iface.IDisplayObject","splashjs.display.iface.ISprite","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.display.iface.IMovieClip","splashjs.events.iface.IEventDispatcher"];




