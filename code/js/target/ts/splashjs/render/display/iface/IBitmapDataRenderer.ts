/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';
import { IBitmapDrawable } from '../../../display/iface/IBitmapDrawable';

export interface IBitmapDataRenderer extends IEventDispatcherRenderer {
    draw(bitmapDrawable : IBitmapDrawable);

    getBlob() : Blob;
}


