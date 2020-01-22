/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IItem } from './iface/IItem';
import { IItemGroup } from './iface/IItemGroup';
import { BaseItem } from './BaseItem';

export class ItemGroup extends BaseItem implements IItemGroup {
    /*private*/ title : string;

    /*private*/ items : Array<IItem> = <any>([]);

    public constructor(title : string) {
        super();
        if(this.title===undefined) this.title = null;
        this.title = title;
    }

    public addItem(item : IItem) {
        /* add */(this.items.push(item)>0);
    }

    public removeItem(item : IItem) {
        /* remove */(a => { let index = a.indexOf(item); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.items);
    }

    public setTitle(title : string) {
        this.title = title;
    }

    public getTitle() : string {
        return this.title;
    }

    public getAllItems() : Array<IItem> {
        return this.items;
    }
}
ItemGroup["__class"] = "splashjs.controls.ItemGroup";
ItemGroup["__interfaces"] = ["splashjs.controls.iface.IItemGroup","splashjs.controls.iface.IBaseItem"];




