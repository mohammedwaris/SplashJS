/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IGlobal } from './iface/IGlobal';
import { IRendererCreator } from './render/iface/IRendererCreator';
import { RendererCreator } from './render/RendererCreator';

export class Global implements IGlobal {
    public static global : IGlobal; public static global_$LI$() : IGlobal { if(Global.global == null) Global.global = new Global(); return Global.global; };

    /*private*/ rendererCreator : IRendererCreator = new RendererCreator();

    constructor() {
    }

    public getRendererCreator() : IRendererCreator {
        return this.rendererCreator;
    }
}
Global["__class"] = "splashjs.Global";
Global["__interfaces"] = ["splashjs.iface.IGlobal"];





Global.global_$LI$();
