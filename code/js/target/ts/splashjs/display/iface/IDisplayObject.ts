/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFilter } from '../../filters/iface/IFilter';
import { IRenderer } from '../../render/iface/IRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IMouseCursor } from '../../ui/iface/IMouseCursor';
import { IPoint } from '../../geom/iface/IPoint';
import { IDisplayObjectContainer } from './IDisplayObjectContainer';

export interface IDisplayObject extends IEventDispatcher {
    getX() : number;

    setX(x : number);

    getY() : number;

    setY(y : number);

    setXY(x : number, y : number);

    getWidth() : number;

    setWidth(width : number);

    getHeight() : number;

    setHeight(height : number);

    setSize(width : number, height : number);

    getRegX() : number;

    setRegX(regX : number);

    getRegY() : number;

    setRegY(regY : number);

    setRegXY(regX : number, regY : number);

    getScaleX() : number;

    setScaleX(scaleX : number);

    getScaleY() : number;

    setScaleY(scaleY : number);

    setScaleXY(scaleX : number, scaleY : number);

    getRotation() : number;

    setRotation(rotation : number);

    getVisible() : boolean;

    setVisible(visible : boolean);

    getAlpha() : number;

    setAlpha(alpha : number);

    getName() : string;

    setName(name : string);

    getParent() : IDisplayObjectContainer;

    getMouseX() : number;

    getMouseY() : number;

    setMouseVisible(mouseVisible : boolean);

    getMouseVisible() : boolean;

    setMouseCursor(mouseCursor : IMouseCursor);

    getMouseCursor() : IMouseCursor;

    addFilter(filter : IFilter);

    removeFilter(filter : IFilter);

    removeAllFilters();

    hasFilter(filter : IFilter) : boolean;

    getAllFilters() : Array<IFilter>;

    localToGlobal(point : IPoint) : IPoint;

    globalToLocal(point : IPoint) : IPoint;

    hitTestObject(displayObject : IDisplayObject) : boolean;

    hitTestPoint(x : number, y : number) : boolean;
}


