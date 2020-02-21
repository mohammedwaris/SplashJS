/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from './events/EventDispatcherRenderer';
import { IGlobalRenderer } from './iface/IGlobalRenderer';
import { IStage } from '../display/iface/IStage';
import { Stage } from '../display/Stage';
import { ISprite } from '../display/iface/ISprite';
import { IDisplayObject } from '../display/iface/IDisplayObject';

export class GlobalRenderer extends EventDispatcherRenderer implements IGlobalRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
    }

    public render(divID : any, jsClass : any, width : number, height : number) {
        let stage : IStage = new Stage(<string>divID, width, height);
        let js : string = "";
        try {
            js = "new " + jsClass.toString() + "();";
            stage.addChild(<any>(Globals.eval(js)));
        } catch(e) {
            console.error(e.message, e);
        };
    }
}
GlobalRenderer["__class"] = "splashjs.render.GlobalRenderer";
GlobalRenderer["__interfaces"] = ["splashjs.render.iface.IGlobalRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




