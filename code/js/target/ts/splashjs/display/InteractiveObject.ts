/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IMouseEvent } from '../events/iface/IMouseEvent';
import { IInteractiveObject } from './iface/IInteractiveObject';
import { DisplayObject } from './DisplayObject';

export abstract class InteractiveObject extends DisplayObject implements IInteractiveObject {
    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super(id);
        } else if(id === undefined) {
            let __args = arguments;
            super();
        } else throw new Error('invalid overload');
    }

    public dispatchClickEvent(mouseEvent : IMouseEvent) {
        this.dispatchEvent(mouseEvent);
    }

    public dispatchDoubleClickEvent(mouseEvent : IMouseEvent) {
        this.dispatchEvent(mouseEvent);
    }

    public dispatchMouseMoveEvent() {
    }

    public dispatchMouseDownEvent() {
    }

    public dispatchMouseUpEvent() {
    }

    public dispatchMouseOverEvent() {
    }

    public dispatchMouseEnterEvent() {
    }

    public dispatchMouseLeaveEvent() {
    }

    public dispatchMouseOutEvent() {
    }
}
InteractiveObject["__class"] = "splashjs.display.InteractiveObject";
InteractiveObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




