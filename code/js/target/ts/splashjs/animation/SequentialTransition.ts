/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ITransition } from './iface/ITransition';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { TransitionEvent } from '../events/TransitionEvent';
import { Transition } from './Transition';
import { IEvent } from '../events/iface/IEvent';

export class SequentialTransition extends Transition {
    /*private*/ transitions : Array<ITransition> = <any>([]);

    /*private*/ currentTransitionNumber : number = 0;

    /*private*/ currentTransition : ITransition;

    public constructor() {
        super();
        if(this.currentTransition===undefined) this.currentTransition = null;
    }

    public add(transition : ITransition) : ITransition {
        /* add */(this.transitions.push(transition)>0);
        return this;
    }

    public play() : ITransition {
        let transition : ITransition = null;
        for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
            transition = /* get */this.transitions[i];
            transition.addEventListener(TransitionEvent.DURATION_COMPLETE, (event) => {
                this.currentTransitionNumber += 1;
                if(this.currentTransitionNumber < /* size */(<number>this.transitions.length)) {
                    this.currentTransition = /* get */this.transitions[this.currentTransitionNumber];
                    this.currentTransition.play();
                }
            });
        };}
        this.currentTransition = /* get */this.transitions[this.currentTransitionNumber];
        this.currentTransition.play();
        return this;
    }

    public stop() : ITransition {
        this.currentTransition.stop();
        return this;
    }

    public update(value : number) : ITransition {
        return this;
    }
}
SequentialTransition["__class"] = "splashjs.animation.SequentialTransition";
SequentialTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




