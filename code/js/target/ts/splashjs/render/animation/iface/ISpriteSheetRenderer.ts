/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';
import { ISprite } from '../../../display/iface/ISprite';
import { IMovieClip } from '../../../display/iface/IMovieClip';

export interface ISpriteSheetRenderer extends IEventDispatcherRenderer {
    getSprite(label : string) : ISprite;

    getMovieClip(label : string) : IMovieClip;

    getWidth() : number;

    getHeight() : number;
}


