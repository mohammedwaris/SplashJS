/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IFrame } from './IFrame';
import { ISpriteSheet } from './ISpriteSheet';

export interface IMovieClipData extends IEventDispatcher {
    getLabel() : string;

    getFrames() : IFrame[];

    getSpriteSheet() : ISpriteSheet;
}


