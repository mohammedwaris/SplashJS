/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { MouseEvent } from '../events/MouseEvent';
import { IRadioButton } from './iface/IRadioButton';
import { IRadioButtonGroup } from './iface/IRadioButtonGroup';
import { ISplashObject } from '../lang/iface/ISplashObject';
import { IEvent } from '../events/iface/IEvent';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';

export class RadioButtonGroup implements IRadioButtonGroup {
    /*private*/ name : string;

    /*private*/ radioButtons : Array<IRadioButton> = <any>([]);

    /*private*/ eventHandlers : Array<(p1: IEvent) => void> = <any>([]);

    public constructor(name : string) {
        if(this.name===undefined) this.name = null;
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public getNumRadioButtons() : number {
        return /* size */(<number>this.radioButtons.length);
    }

    public getSelectedData() : ISplashObject {
        return this.getSelection().getValue();
    }

    public setSelection(selection : IRadioButton) {
        let radioButton : IRadioButton = null;
        for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
            radioButton = /* get */this.radioButtons[i];
            if(radioButton === selection) {
                this.setAllSelected(false);
                radioButton.setSelected(true);
                break;
            }
        };}
    }

    public getSelection() : IRadioButton {
        let selectedRadioButton : IRadioButton = null;
        let radioButton : IRadioButton = null;
        for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
            radioButton = /* get */this.radioButtons[i];
            if(radioButton.getSelected() === true) {
                selectedRadioButton = radioButton;
                break;
            }
        };}
        return selectedRadioButton;
    }

    public addRadioButton(radioButton : IRadioButton) {
        let eventHandler : (p1: IEvent) => void = (event) => {
            this.setAllSelected(false);
            (<IRadioButton><any>event.getCurrentTarget()).setSelected(true);
        };
        radioButton.addEventListener(MouseEvent.CLICK, <any>(eventHandler));
        radioButton.setGroup(this);
        /* add */(this.radioButtons.push(radioButton)>0);
        /* add */(this.eventHandlers.push(eventHandler)>0);
    }

    public removeRadioButton(radioButton : IRadioButton) {
        let pos : number = -1;
        for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
            if(radioButton === /* get */this.radioButtons[i]) {
                pos = i;
                break;
            }
        };}
        if(pos >= 0) {
            /* get */this.radioButtons[pos].setGroup(null);
            /* get */this.radioButtons[pos].removeEventListener(MouseEvent.CLICK, <any>(/* get */this.eventHandlers[pos]));
            /* remove */this.radioButtons.splice(pos, 1)[0];
            /* remove */this.eventHandlers.splice(pos, 1)[0];
        }
    }

    /*private*/ setAllSelected(selected : boolean) {
        for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
            /* get */this.radioButtons[i].setSelected(selected);
        };}
    }
}
RadioButtonGroup["__class"] = "splashjs.controls.RadioButtonGroup";
RadioButtonGroup["__interfaces"] = ["splashjs.controls.iface.IRadioButtonGroup"];




