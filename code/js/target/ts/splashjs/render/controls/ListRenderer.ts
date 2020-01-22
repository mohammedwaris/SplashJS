/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IItem } from '../../controls/iface/IItem';
import { IList } from '../../controls/iface/IList';
import { IBaseItem } from '../../controls/iface/IBaseItem';
import { IItemGroup } from '../../controls/iface/IItemGroup';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IListRenderer } from './iface/IListRenderer';
import { BaseListRenderer } from './BaseListRenderer';

export class ListRenderer extends BaseListRenderer implements IListRenderer {
    /*private*/ htmlSelectElement : HTMLSelectElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlSelectElement===undefined) this.htmlSelectElement = null;
        super.setRenderObject(renderObject);
        this.htmlSelectElement = <HTMLSelectElement>document.createElement("select");
        super.setRenderElement(new RenderElement(this.htmlSelectElement));
    }

    public create() {
    }

    public addItem(item : IItem) {
        let option : HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
        option.text = item.getText();
        this.htmlSelectElement.add(option);
    }

    public addItemGroup(itemGroup : IItemGroup) {
        let optGroup : HTMLOptGroupElement = <HTMLOptGroupElement>document.createElement("optgroup");
        optGroup.label = itemGroup.getTitle();
        let items : Array<IItem> = itemGroup.getAllItems();
        let option : HTMLOptionElement = null;
        let item : IItem = null;
        for(let i : number = 0; i < /* size */(<number>items.length); i++) {{
            item = /* get */items[i];
            option = <HTMLOptionElement>document.createElement("option");
            option.text = item.getText();
            optGroup.appendChild(option);
        };}
        this.htmlSelectElement.add(optGroup);
    }

    public addAllItems() {
        let items : Array<IBaseItem> = (<IList><any>super.getRenderObject()).getAllItems();
        let baseItem : IBaseItem = null;
        let option : HTMLOptionElement = null;
        console.info(/* size */(<number>items.length));
        for(let i : number = 0; i < /* size */(<number>items.length); i++) {{
            baseItem = /* get */items[i];
            if(baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0)) {
                this.addItem(<IItem><any>baseItem);
            } else if(baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0)) {
                this.addItemGroup(<IItemGroup><any>baseItem);
            }
        };}
    }
}
ListRenderer["__class"] = "splashjs.render.controls.ListRenderer";
ListRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.controls.iface.IListRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.IBaseListRenderer"];




