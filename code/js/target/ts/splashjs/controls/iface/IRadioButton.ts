/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISplashObject } from '../../lang/iface/ISplashObject';
import { IControl } from './IControl';
import { IRadioButtonGroup } from './IRadioButtonGroup';

export interface IRadioButton extends IControl {
    setValue(value : ISplashObject);

    getValue() : ISplashObject;

    getGroup() : IRadioButtonGroup;

    setGroup(group : IRadioButtonGroup);

    setSelected(selected : boolean);

    getSelected() : boolean;

    isSelected() : boolean;
}


