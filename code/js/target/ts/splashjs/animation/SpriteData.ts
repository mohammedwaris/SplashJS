/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFrame } from './iface/IFrame';
import { ISpriteSheet } from './iface/ISpriteSheet';
import { ISpriteData } from './iface/ISpriteData';

export class SpriteData implements ISpriteData {
    /*private*/ spriteSheet : ISpriteSheet;

    /*private*/ frame : IFrame;

    /*private*/ label : string;

    public constructor(spriteSheet : ISpriteSheet, label : string, frame : IFrame) {
        if(this.spriteSheet===undefined) this.spriteSheet = null;
        if(this.frame===undefined) this.frame = null;
        if(this.label===undefined) this.label = null;
        this.spriteSheet = spriteSheet;
        this.frame = frame;
        this.label = label;
    }

    public getLabel() : string {
        return this.label;
    }

    public getFrame() : IFrame {
        return this.frame;
    }

    public getSpriteSheet() : ISpriteSheet {
        return this.spriteSheet;
    }
}
SpriteData["__class"] = "splashjs.animation.SpriteData";
SpriteData["__interfaces"] = ["splashjs.animation.iface.ISpriteData"];




