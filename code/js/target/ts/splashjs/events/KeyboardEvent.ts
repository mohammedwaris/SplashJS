/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IKeyboardEvent } from './iface/IKeyboardEvent';
import { Event } from './Event';

export class KeyboardEvent extends Event implements IKeyboardEvent {
    public static KEY_UP : string = "key_up";

    public static KEY_DOWN : string = "key_down";

    public static KEY_PRESS : string = "key_press";

    /*private*/ __splashjs_events_KeyboardEvent_altKey : boolean;

    /*private*/ charCode : number;

    /*private*/ code : string;

    /*private*/ ctrlKey : boolean;

    /*private*/ key : string;

    /*private*/ keyCode : number;

    /*private*/ location : string;

    /*private*/ metaKey : boolean;

    /*private*/ repeat : boolean;

    /*private*/ shiftKey : boolean;

    /*private*/ which : number;

    public constructor(name : string, altKey : boolean, charCode : number, code : string, ctrlKey : boolean, key : string, keyCode : number, location : string, metaKey : boolean, repeat : boolean, shiftKey : boolean, which : number) {
        super(name);
        if(this.__splashjs_events_KeyboardEvent_altKey===undefined) this.__splashjs_events_KeyboardEvent_altKey = null;
        if(this.charCode===undefined) this.charCode = null;
        if(this.code===undefined) this.code = null;
        if(this.ctrlKey===undefined) this.ctrlKey = null;
        if(this.key===undefined) this.key = null;
        if(this.keyCode===undefined) this.keyCode = null;
        if(this.location===undefined) this.location = null;
        if(this.metaKey===undefined) this.metaKey = null;
        if(this.repeat===undefined) this.repeat = null;
        if(this.shiftKey===undefined) this.shiftKey = null;
        if(this.which===undefined) this.which = null;
        this.__splashjs_events_KeyboardEvent_altKey = altKey;
        this.charCode = charCode;
        this.code = code;
        this.ctrlKey = ctrlKey;
        this.key = key;
        this.keyCode = keyCode;
        this.location = location;
        this.metaKey = metaKey;
        this.repeat = repeat;
        this.shiftKey = shiftKey;
        this.which = which;
    }

    public getAltKey() : boolean {
        return this.__splashjs_events_KeyboardEvent_altKey;
    }

    public getCharCode() : number {
        return this.charCode;
    }

    public getCode() : string {
        return this.code;
    }

    public getCtrlKey() : boolean {
        return this.ctrlKey;
    }

    public getKey() : string {
        return this.key;
    }

    public getKeyCode() : number {
        return this.keyCode;
    }

    public getLocation() : string {
        return this.location;
    }

    public getMetaKey() : boolean {
        return this.metaKey;
    }

    public getRepeat() : boolean {
        return this.repeat;
    }

    public getShiftKey() : boolean {
        return this.shiftKey;
    }

    public getWhich() : number {
        return this.which;
    }

    public toString() : string {
        let properties : string = "";
        properties += "name=" + this.getType() + ", altKey=" + this.__splashjs_events_KeyboardEvent_altKey + ", charCode=" + this.charCode + ", code=" + this.code + ", ctrlKey=" + this.ctrlKey + ", key=" + this.key + ", keyCode=" + this.keyCode + ", location=" + this.location + ", metaKey=" + this.metaKey + ", repeat=" + this.repeat + ", shifKey=" + this.shiftKey + ", which=" + this.which;
        return "KeyboardEvent[" + properties + "]";
    }
}
KeyboardEvent["__class"] = "splashjs.events.KeyboardEvent";
KeyboardEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IKeyboardEvent"];




