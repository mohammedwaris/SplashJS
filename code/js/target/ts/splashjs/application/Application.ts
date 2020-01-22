/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IApplication } from './iface/IApplication';
import { IApplicationRenderer } from '../render/application/iface/IApplicationRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Application extends EventDispatcher implements IApplication {
    static application : IApplication = null;

    constructor() {
        super("browserApp");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Application, this));
    }

    public static getApplicationInstance() : IApplication {
        if(Application.application == null) Application.application = new Application();
        return Application.application;
    }

    public isOnline() : boolean {
        return (<IApplicationRenderer><any>super.getRenderer()).isOnline();
    }
}
Application["__class"] = "splashjs.application.Application";
Application["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.application.iface.IApplication"];




