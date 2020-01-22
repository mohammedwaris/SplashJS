/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { ISplashObject } from '../lang/iface/ISplashObject';
import { IRadioButton } from './iface/IRadioButton';
import { ILabel } from './iface/ILabel';
import { IRadioButtonGroup } from './iface/IRadioButtonGroup';
import { IRadioButtonRenderer } from '../render/controls/iface/IRadioButtonRenderer';
import { Control } from './Control';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class RadioButton extends Control implements IRadioButton {
    /*private*/ label : ILabel;

    /*private*/ group : IRadioButtonGroup;

    /*private*/ selected : boolean = false;

    /*private*/ value : ISplashObject;

    public constructor() {
        super("radioButton");
        if(this.label===undefined) this.label = null;
        if(this.group===undefined) this.group = null;
        if(this.value===undefined) this.value = null;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(RadioButton, this));
    }

    public setValue(value : ISplashObject) {
        this.value = value;
    }

    public getValue() : ISplashObject {
        return this.value;
    }

    public setSelected(selected : boolean) {
        if(this.selected !== selected) {
            this.selected = selected;
            if(super.getRenderer() != null) (<IRadioButtonRenderer><any>super.getRenderer()).setSelected();
        }
    }

    public getSelected() : boolean {
        return this.selected;
    }

    public isSelected() : boolean {
        return this.getSelected();
    }

    public setGroup(group : IRadioButtonGroup) {
        this.group = group;
        if(super.getRenderer() != null) (<IRadioButtonRenderer><any>super.getRenderer()).setGroup();
    }

    public getGroup() : IRadioButtonGroup {
        return this.group;
    }

    public setLabel(label : ILabel) {
        this.label = label;
    }

    public getLabel() : ILabel {
        return this.label;
    }

    public render() {
        super.render();
        (<IRadioButtonRenderer><any>super.getRenderer()).setGroup();
        (<IRadioButtonRenderer><any>super.getRenderer()).setSelected();
    }
}
RadioButton["__class"] = "splashjs.controls.RadioButton";
RadioButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.controls.iface.IRadioButton","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];




