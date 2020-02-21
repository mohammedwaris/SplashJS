/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { DisplayObjectContainer } from './DisplayObjectContainer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Scene extends DisplayObjectContainer {
    public constructor() {
        super("scene");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Scene, this));
    }
}
Scene["__class"] = "splashjs.display.Scene";
Scene["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




