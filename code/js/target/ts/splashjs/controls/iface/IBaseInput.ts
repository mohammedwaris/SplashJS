/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBaseText } from './IBaseText';

export interface IBaseInput extends IBaseText {
    setPlaceHolderText(placeHolderText : string);

    getPlaceHolderText() : string;

    setMaxChars(maxChars : number);

    getMaxChars() : number;

    getSelectionBeginIndex() : number;

    getSelectionEndIndex() : number;

    setSelection(beginIndex : number, endIndex : number);

    setEditable(editable : boolean);

    getEditable() : boolean;

    isEditable() : boolean;
}


