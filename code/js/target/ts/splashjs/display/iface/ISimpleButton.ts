/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IInteractiveObject } from './IInteractiveObject';
import { IDisplayObject } from './IDisplayObject';

export interface ISimpleButton extends IInteractiveObject {
    setUpState(upState : IDisplayObject);

    getUpState() : IDisplayObject;

    setDownState(downState : IDisplayObject);

    getDownState() : IDisplayObject;

    setOverState(OverState : IDisplayObject);

    getOverState() : IDisplayObject;

    setDisabledState(disabledState : IDisplayObject);

    getDisabledState() : IDisplayObject;

    setEnabled(enabled : boolean);

    getEnabled() : boolean;

    isEnabled() : boolean;
}


