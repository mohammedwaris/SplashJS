/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IRenderElement } from './IRenderElement';

export interface IRenderer {
    create();

    update();

    applyCSS();

    appendChild(childRenderer : IRenderer);

    appendToBody();

    removeChild(childRenderer : IRenderer);

    getRenderObjectID() : string;

    getRenderObject() : IEventDispatcher;

    createEventListeners();

    getDOMElement() : Element;

    getRenderElement() : IRenderElement;

    setRenderElement(renderElement : IRenderElement);

    refresh();

    getOriginalWidth() : number;

    getOriginalHeight() : number;
}


