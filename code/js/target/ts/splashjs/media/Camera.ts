/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { ICamera } from './iface/ICamera';
import { ICameraRenderer } from '../render/media/iface/ICameraRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Camera extends EventDispatcher implements ICamera {
    public constructor() {
        super("camera");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Camera, this));
    }

    public static getCamera() : ICamera {
        return new Camera();
    }

    public requestPermission() {
        (<ICameraRenderer><any>super.getRenderer()).requestPermission();
    }

    public static getNames() : Array<string> {
        return null;
    }
}
Camera["__class"] = "splashjs.media.Camera";
Camera["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.media.iface.ICamera"];




