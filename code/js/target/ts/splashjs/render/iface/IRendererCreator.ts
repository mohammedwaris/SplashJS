/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IRenderer } from './IRenderer';

export interface IRendererCreator {
    createRenderer(clazz : any, renderObject : IEventDispatcher) : IRenderer;
}


