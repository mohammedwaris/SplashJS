/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBaseInput } from './iface/IBaseInput';
import { IBaseInputRenderer } from '../render/controls/iface/IBaseInputRenderer';
import { BaseText } from './BaseText';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class BaseInput extends BaseText implements IBaseInput {
    /*private*/ placeHolderText : string;

    /*private*/ maxChars : number = 0;

    /*private*/ selectionBeginIndex : number;

    /*private*/ selectionEndIndex : number;

    /*private*/ editable : boolean = true;

    public constructor(id : string) {
        super(id);
        if(this.placeHolderText===undefined) this.placeHolderText = null;
        if(this.selectionBeginIndex===undefined) this.selectionBeginIndex = 0;
        if(this.selectionEndIndex===undefined) this.selectionEndIndex = 0;
    }

    public setMaxChars(maxChars : number) {
        this.maxChars = maxChars;
        if(super.getRenderer() != null) (<IBaseInputRenderer><any>super.getRenderer()).setMaxChars();
    }

    public getMaxChars() : number {
        return this.maxChars;
    }

    public setEditable(editable : boolean) {
        this.editable = editable;
    }

    public getEditable() : boolean {
        return this.editable;
    }

    public isEditable() : boolean {
        return this.getEditable();
    }

    public setPlaceHolderText(placeHolderText : string) {
        this.placeHolderText = placeHolderText;
        if(super.getRenderer() != null) (<IBaseInputRenderer><any>super.getRenderer()).setPlaceHolderText();
    }

    public getPlaceHolderText() : string {
        return this.placeHolderText;
    }

    public getSelectionBeginIndex() : number {
        return this.selectionBeginIndex;
    }

    public getSelectionEndIndex() : number {
        return this.selectionEndIndex;
    }

    public setSelection(beginIndex : number, endIndex : number) {
        this.selectionBeginIndex = beginIndex;
        this.selectionEndIndex = endIndex;
        if(super.getRenderer() != null) (<IBaseInputRenderer><any>super.getRenderer()).setSelection();
    }

    public render() {
        super.render();
        (<IBaseInputRenderer><any>super.getRenderer()).setMaxChars();
        (<IBaseInputRenderer><any>super.getRenderer()).setEditable();
        (<IBaseInputRenderer><any>super.getRenderer()).setPlaceHolderText();
    }
}
BaseInput["__class"] = "splashjs.controls.BaseInput";
BaseInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];




