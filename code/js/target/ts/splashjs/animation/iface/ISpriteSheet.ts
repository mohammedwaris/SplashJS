/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IResource } from '../../utils/iface/IResource';
import { ISpriteData } from './ISpriteData';
import { IMovieClipData } from './IMovieClipData';

export interface ISpriteSheet extends IEventDispatcher {
    getImagePath() : string;

    getSpriteDataByLabel(name : string) : ISpriteData;

    getMovieClipDataByLabel(name : string) : IMovieClipData;

    getWidth() : number;

    getHeight() : number;

    setImageBase64(imageBase64 : string);

    getImageBase64() : string;

    getResource() : IResource;
}


