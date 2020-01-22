/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRenderer } from '../render/iface/IRenderer';
import { IStage } from '../display/iface/IStage';
import { IEventDispatcher } from './iface/IEventDispatcher';
import { IEvent } from './iface/IEvent';
import { SplashObject } from '../lang/SplashObject';

export abstract class EventDispatcher extends SplashObject implements IEventDispatcher {
    /*private*/ eventStore : EventDispatcher.EventStore;

    /*private*/ uniqueID : string;

    /*private*/ id : string;

    /*private*/ renderer : IRenderer;

    stage : IStage;

    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super();
            if(this.eventStore===undefined) this.eventStore = null;
            if(this.uniqueID===undefined) this.uniqueID = null;
            if(this.id===undefined) this.id = null;
            if(this.renderer===undefined) this.renderer = null;
            if(this.stage===undefined) this.stage = null;
            if(this.eventStore===undefined) this.eventStore = null;
            if(this.uniqueID===undefined) this.uniqueID = null;
            if(this.id===undefined) this.id = null;
            if(this.renderer===undefined) this.renderer = null;
            if(this.stage===undefined) this.stage = null;
            (() => {
                this.eventStore = new EventDispatcher.EventStore(this);
                this.id = id;
                this.uniqueID = id + /* nanoTime */(Date.now() * 1000000);
            })();
        } else if(id === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let id : any = "splashjs";
                super();
                if(this.eventStore===undefined) this.eventStore = null;
                if(this.uniqueID===undefined) this.uniqueID = null;
                if(this.id===undefined) this.id = null;
                if(this.renderer===undefined) this.renderer = null;
                if(this.stage===undefined) this.stage = null;
                if(this.eventStore===undefined) this.eventStore = null;
                if(this.uniqueID===undefined) this.uniqueID = null;
                if(this.id===undefined) this.id = null;
                if(this.renderer===undefined) this.renderer = null;
                if(this.stage===undefined) this.stage = null;
                (() => {
                    this.eventStore = new EventDispatcher.EventStore(this);
                    this.id = id;
                    this.uniqueID = id + /* nanoTime */(Date.now() * 1000000);
                })();
            }
        } else throw new Error('invalid overload');
    }

    public setRenderer(renderer : IRenderer) {
        this.renderer = renderer;
    }

    public getRenderer() : IRenderer {
        return this.renderer;
    }

    public getStage() : IStage {
        return this.stage;
    }

    public render() {
    }

    public addEventListener(eventName : string, eventHandler : (p1: IEvent) => void) {
        this.eventStore.add(eventName, <any>(eventHandler));
    }

    public removeEventListener(eventName : string, eventHandler : (p1: IEvent) => void) {
        this.eventStore.remove(eventName, <any>(eventHandler));
    }

    public removeAllEventListeners(eventName : string) {
        this.eventStore.removeAll(eventName);
    }

    public dispatchEvent(event : IEvent) : boolean {
        let eventName : string = event.getType();
        {
            let array127 = this.eventStore.getEventHandlersByName(eventName);
            for(let index126=0; index126 < array127.length; index126++) {
                let eventHandler = array127[index126];
                (target => (typeof target === 'function')?target(event):(<any>target).accept(event))(eventHandler)
            }
        }
        return true;
    }

    /**
     * 
     * @return {string}
     */
    public getUniqueID() : string {
        return this.uniqueID;
    }

    /**
     * 
     * @return {string}
     */
    public getID() : string {
        return this.id;
    }
}
EventDispatcher["__class"] = "splashjs.events.EventDispatcher";
EventDispatcher["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];



export namespace EventDispatcher {

    export class EventStore {
        public __parent: any;
        eventNames : Array<string>;

        eventHandlers : Array<(p1: IEvent) => void>;

        public constructor(__parent: any) {
            this.__parent = __parent;
            this.eventNames = <any>([]);
            this.eventHandlers = <any>([]);
        }

        public add(eventName : string, eventHandler : (p1: IEvent) => void) {
            /* add */(this.eventNames.push(eventName)>0);
            /* add */(this.eventHandlers.push(eventHandler)>0);
        }

        public remove(eventName : string, eventHandler : (p1: IEvent) => void) {
            let pos : number = -1;
            for(let i : number = 0; i < /* size */(<number>this.eventHandlers.length); i++) {{
                if(/* get */this.eventHandlers[i] === eventHandler) {
                    pos = i;
                    break;
                }
            };}
            if(pos >= 0) {
                /* remove */this.eventNames.splice(pos, 1)[0];
                /* remove */this.eventHandlers.splice(pos, 1)[0];
            }
        }

        public removeAll(eventName : string) {
        }

        public getEventHandlersByName(eventName : string) : Array<(p1: IEvent) => void> {
            let eHandlers : Array<(p1: IEvent) => void> = <any>([]);
            for(let i : number = 0; i < /* size */(<number>this.eventNames.length); i++) {{
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.eventNames[i], eventName)) /* add */(eHandlers.push(/* get */this.eventHandlers[i])>0);
            };}
            return eHandlers;
        }
    }
    EventStore["__class"] = "splashjs.events.EventDispatcher.EventStore";

}



