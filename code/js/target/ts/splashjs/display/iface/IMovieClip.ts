/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISpriteSheet } from '../../animation/iface/ISpriteSheet';
import { IMovieClipData } from '../../animation/iface/IMovieClipData';
import { ISprite } from './ISprite';

export interface IMovieClip extends ISprite {
    getMovieClipDataByLabel(label : string) : IMovieClipData;

    getFrameRate() : number;

    play();

    stop();

    getCurrentLabel() : string;

    getCurrentFrameIndex() : number;

    getCurrentLoopCount() : number;

    getAllLabels() : Array<string>;
}


