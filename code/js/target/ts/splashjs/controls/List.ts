/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IItem } from './iface/IItem';
import { IList } from './iface/IList';
import { IBaseItem } from './iface/IBaseItem';
import { IItemGroup } from './iface/IItemGroup';
import { IListRenderer } from '../render/controls/iface/IListRenderer';
import { BaseList } from './BaseList';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class List extends BaseList implements IList {
    /*private*/ items : Array<IBaseItem> = <any>([]);

    /*private*/ isRenderCalled : boolean = false;

    public constructor() {
        super("list");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(List, this));
    }

    public addItem(item : IItem) {
        /* add */(this.items.push(item)>0);
        (<IListRenderer><any>super.getRenderer()).addItem(item);
    }

    public addItemGroup(itemGroup : IItemGroup) {
        /* add */(this.items.push(itemGroup)>0);
    }

    public getAllItems() : Array<IBaseItem> {
        return this.items;
    }

    public render() {
        super.render();
    }
}
List["__class"] = "splashjs.controls.List";
List["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IList","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseList"];




