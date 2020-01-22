/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IRadioButton } from '../../controls/iface/IRadioButton';
import { IRadioButtonGroup } from '../../controls/iface/IRadioButtonGroup';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IRadioButtonRenderer } from './iface/IRadioButtonRenderer';
import { ControlRenderer } from './ControlRenderer';

export class RadioButtonRenderer extends ControlRenderer implements IRadioButtonRenderer {
    /*private*/ htmlInputElement : HTMLInputElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.type = "radio";
        super.setRenderElement(new RenderElement(this.htmlInputElement));
    }

    public create() {
    }

    public setSelected() {
        let selected : boolean = (<IRadioButton><any>super.getRenderObject()).getSelected();
        if(selected === true) this.htmlInputElement.checked = true; else if(selected === false) this.htmlInputElement.checked = false;
    }

    public setGroup() {
        let group : IRadioButtonGroup = (<IRadioButton><any>super.getRenderObject()).getGroup();
        if(group != null) this.htmlInputElement.name = group.getName(); else if(group == null) this.htmlInputElement.removeAttribute("name");
    }
}
RadioButtonRenderer["__class"] = "splashjs.render.controls.RadioButtonRenderer";
RadioButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.IRadioButtonRenderer"];




