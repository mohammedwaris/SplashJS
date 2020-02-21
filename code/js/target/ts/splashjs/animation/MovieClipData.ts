/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { EventDispatcher } from '../events/EventDispatcher';
import { IMovieClipData } from './iface/IMovieClipData';
import { IFrame } from './iface/IFrame';
import { ISpriteSheet } from './iface/ISpriteSheet';

export class MovieClipData extends EventDispatcher implements IMovieClipData {
    /*private*/ spriteSheet : ISpriteSheet;

    /*private*/ label : string;

    /*private*/ frames : IFrame[];

    public constructor(spriteSheet : ISpriteSheet, label : string, frames : IFrame[]) {
        super();
        if(this.spriteSheet===undefined) this.spriteSheet = null;
        if(this.label===undefined) this.label = null;
        if(this.frames===undefined) this.frames = null;
        this.spriteSheet = spriteSheet;
        this.label = label;
        this.frames = frames;
    }

    public getLabel() : string {
        return this.label;
    }

    public getFrames() : IFrame[] {
        return this.frames;
    }

    public getSpriteSheet() : ISpriteSheet {
        return this.spriteSheet;
    }
}
MovieClipData["__class"] = "splashjs.animation.MovieClipData";
MovieClipData["__interfaces"] = ["splashjs.animation.iface.IMovieClipData","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




