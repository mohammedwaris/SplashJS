/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IGlobal } from './iface/IGlobal';
import { IRendererCreator } from './render/iface/IRendererCreator';
import { RendererCreator } from './render/RendererCreator';
import { EventDispatcher } from './events/EventDispatcher';
import { IGlobalRenderer } from './render/iface/IGlobalRenderer';
import { IRenderer } from './render/iface/IRenderer';

export class Global extends EventDispatcher implements IGlobal {
    public static global : IGlobal; public static global_$LI$() : IGlobal { if(Global.global == null) Global.global = new Global(); return Global.global; };

    /*private*/ rendererCreator : IRendererCreator = new RendererCreator();

    constructor() {
        super();
        super.setRenderer(this.getRendererCreator().createRenderer(Global, this));
    }

    public render$java_lang_Object$java_lang_Object$int$int(divID : any, jsClass : any, width : number, height : number) {
        (<IGlobalRenderer><any>super.getRenderer()).render(divID, jsClass, width, height);
    }

    public render(divID? : any, jsClass? : any, width? : any, height? : any) : any {
        if(((divID != null) || divID === null) && ((jsClass != null) || jsClass === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
            return <any>this.render$java_lang_Object$java_lang_Object$int$int(divID, jsClass, width, height);
        } else if(divID === undefined && jsClass === undefined && width === undefined && height === undefined) {
            super.render();
        } else throw new Error('invalid overload');
    }

    public getRendererCreator() : IRendererCreator {
        return this.rendererCreator;
    }
}
Global["__class"] = "splashjs.Global";
Global["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.iface.IGlobal","splashjs.events.iface.IEventDispatcher"];





Global.global_$LI$();
