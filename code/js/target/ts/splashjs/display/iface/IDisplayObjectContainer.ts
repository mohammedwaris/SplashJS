/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IInteractiveObject } from './IInteractiveObject';
import { IDisplayObject } from './IDisplayObject';

export interface IDisplayObjectContainer extends IInteractiveObject {
    addChild(displayObject : IDisplayObject);

    addChildAt(displayObject : IDisplayObject, index : number);

    removeChild(displayObject : IDisplayObject);

    removeChildAt(index : number);

    getChildByName(name : string) : IDisplayObject;

    getChildAt(index : number) : IDisplayObject;

    getChildIndex(displayObject : IDisplayObject) : number;

    setChildIndex(displayObject : IDisplayObject, index : number);

    swapChildren(displayObject1 : IDisplayObject, displayObject2 : IDisplayObject);

    swapChildrenAt(index1 : number, index2 : number);

    contains(displayObject : IDisplayObject) : boolean;
}


