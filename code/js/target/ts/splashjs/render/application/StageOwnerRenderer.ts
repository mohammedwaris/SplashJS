/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../../events/Event';
import { IEvent } from '../../events/iface/IEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IStageOwner } from '../../application/iface/IStageOwner';
import { IStageOwnerRenderer } from './iface/IStageOwnerRenderer';
import { RenderElement } from '../RenderElement';

export class StageOwnerRenderer extends EventDispatcherRenderer implements IStageOwnerRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        this.create();
    }

    public create() {
        let stageOwner : IStageOwner = <IStageOwner><any>super.getRenderObject();
        let htmlElement : HTMLElement = document.getElementById(super.getRenderObject().getID());
        if(htmlElement == null) {
            htmlElement = <HTMLDivElement>document.createElement("div");
            htmlElement.id = super.getRenderObject().getID();
            htmlElement.style.position = "absolute";
            htmlElement.style.top = "0" + this.UNIT;
            htmlElement.style.left = "0" + this.UNIT;
            htmlElement.style.bottom = "0" + this.UNIT;
            htmlElement.style.right = "0" + this.UNIT;
            super.setRenderElement(new RenderElement(htmlElement));
            this.appendToBody();
        } else {
            super.setRenderElement(new RenderElement(htmlElement));
        }
        stageOwner.setWidth((<number>(<HTMLDivElement>htmlElement).clientWidth|0));
        stageOwner.setHeight((<number>(<HTMLDivElement>htmlElement).clientHeight|0));
        window.addEventListener("resize", ((stageOwner) => {
            return (event) => {
                let resizeEvent : IEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE);
                resizeEvent.setTarget(super.getRenderObject());
                resizeEvent.setCurrentTarget(super.getRenderObject());
                let newWidth : number = (<number>(<HTMLDivElement>super.getDOMElement()).clientWidth|0);
                let newHeight : number = (<number>(<HTMLDivElement>super.getDOMElement()).clientHeight|0);
                stageOwner.setWidth(newWidth);
                stageOwner.setHeight(newHeight);
                stageOwner.dispatchEvent(resizeEvent);
            }
        })(stageOwner));
    }
}
StageOwnerRenderer["__class"] = "splashjs.render.application.StageOwnerRenderer";
StageOwnerRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.application.iface.IStageOwnerRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




