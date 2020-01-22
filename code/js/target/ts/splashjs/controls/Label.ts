/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { ILabel } from './iface/ILabel';
import { ILabelRenderer } from '../render/controls/iface/ILabelRenderer';
import { BaseText } from './BaseText';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Label extends BaseText implements ILabel {
    public constructor(text : string) {
        super("label");
        super.setText(text);
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Label, this));
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<ILabelRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<ILabelRenderer><any>super.getRenderer()).getOriginalHeight();
            if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
            if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
        }
        return super.dispatchEvent(event);
    }
}
Label["__class"] = "splashjs.controls.Label";
Label["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.controls.iface.ILabel","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];




