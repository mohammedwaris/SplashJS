/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISplashObject } from '../../lang/iface/ISplashObject';
import { IRadioButton } from './IRadioButton';

export interface IRadioButtonGroup {
    getName() : string;

    getNumRadioButtons() : number;

    getSelectedData() : ISplashObject;

    setSelection(radioButton : IRadioButton);

    getSelection() : IRadioButton;
}


