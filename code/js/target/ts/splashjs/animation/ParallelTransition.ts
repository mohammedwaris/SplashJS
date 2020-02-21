/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { ITransition } from './iface/ITransition';
import { IParallelTransition } from './iface/IParallelTransition';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { Transition } from './Transition';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class ParallelTransition extends Transition implements IParallelTransition {
    /*private*/ transitions : Array<ITransition> = <any>([]);

    public constructor() {
        super();
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(ParallelTransition, this));
    }

    public add(transition : ITransition) : ITransition {
        /* add */(this.transitions.push(transition)>0);
        return this;
    }

    public play() : ITransition {
        for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
            /* get */this.transitions[i].play();
        };}
        return this;
    }

    public stop() : ITransition {
        for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
            /* get */this.transitions[i].stop();
        };}
        return this;
    }

    /**
     * 
     * @return {number}
     */
    public getDuration() : number {
        let maxDuration : number = 0;
        let duration : number = 0;
        for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
            duration = /* get */this.transitions[i].getDuration();
            if(duration > maxDuration) maxDuration = duration;
        };}
        return maxDuration;
    }

    public update(nextValue : number) : ITransition {
        return this;
    }
}
ParallelTransition["__class"] = "splashjs.animation.ParallelTransition";
ParallelTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IParallelTransition","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];




