/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IFontPath } from './IFontPath';

export interface IFont extends IEventDispatcher {
    getFontID() : string;

    getFontPath() : IFontPath;
}


