/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IItem } from './iface/IItem';
import { BaseItem } from './BaseItem';

export class Item extends BaseItem implements IItem {
    /*private*/ text : string;

    /*private*/ value : any;

    public constructor(text : string, value : any) {
        super();
        if(this.text===undefined) this.text = null;
        if(this.value===undefined) this.value = null;
        this.text = text;
        this.value = value;
    }

    public setText(text : string) {
        this.text = text;
    }

    public getText() : string {
        return this.text;
    }

    public setValue(value : any) {
        this.value = value;
    }

    public getValue() : any {
        return this.value;
    }
}
Item["__class"] = "splashjs.controls.Item";
Item["__interfaces"] = ["splashjs.controls.iface.IItem","splashjs.controls.iface.IBaseItem"];




