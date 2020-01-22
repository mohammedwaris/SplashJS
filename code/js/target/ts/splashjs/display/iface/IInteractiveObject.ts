/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IMouseEvent } from '../../events/iface/IMouseEvent';
import { IDisplayObject } from './IDisplayObject';

export interface IInteractiveObject extends IDisplayObject {
    dispatchClickEvent(mouseEvent : IMouseEvent);

    dispatchDoubleClickEvent(mouseEvent : IMouseEvent);

    dispatchMouseMoveEvent();

    dispatchMouseEnterEvent();

    dispatchMouseLeaveEvent();

    dispatchMouseOverEvent();

    dispatchMouseOutEvent();

    dispatchMouseUpEvent();
}


