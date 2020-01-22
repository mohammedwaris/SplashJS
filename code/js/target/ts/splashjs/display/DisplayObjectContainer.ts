/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../events/Event';
import { IDisplayObjectContainer } from './iface/IDisplayObjectContainer';
import { IDisplayObject } from './iface/IDisplayObject';
import { IStage } from './iface/IStage';
import { IEvent } from '../events/iface/IEvent';
import { IDisplayObjectRenderer } from '../render/display/iface/IDisplayObjectRenderer';
import { InteractiveObject } from './InteractiveObject';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class DisplayObjectContainer extends InteractiveObject implements IDisplayObjectContainer {
    children : Array<IDisplayObject>;

    parent : IDisplayObjectContainer;

    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super(id);
            if(this.parent===undefined) this.parent = null;
            this.children = <any>([]);
            if(this.parent===undefined) this.parent = null;
        } else if(id === undefined) {
            let __args = arguments;
            super();
            if(this.parent===undefined) this.parent = null;
            this.children = <any>([]);
            if(this.parent===undefined) this.parent = null;
        } else throw new Error('invalid overload');
    }

    public addChild(child : IDisplayObject) {
        if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        if(child.getParent() != null) {
            child.getParent().getRenderer().removeChild(child.getRenderer());
        }
        /* add */(this.children.push(child)>0);
        (<IDisplayObjectRenderer><any>child.getRenderer()).setZIndex((/* size */(<number>this.children.length) - 1) + "");
        super.getRenderer().appendChild(child.getRenderer());
        let addedEvent : IEvent = new Event(Event.ADDED, child, child);
        addedEvent.setData(this);
        child.dispatchEvent(addedEvent);
        if(this.getStage() != null) {
            let addedToStageEvent : IEvent = new Event(Event.ADDED_TO_STAGE, child, child);
            addedToStageEvent.setData(this.getStage());
            child.dispatchEvent(addedToStageEvent);
        }
    }

    public addChildAt(child : IDisplayObject, index : number) {
        if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index < 0 || index > /* size */(<number>this.children.length)) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        if(child.getParent() != null) {
            child.getParent().getRenderer().removeChild(child.getRenderer());
        }
        /* add */this.children.splice(index, 0, child);
        super.getRenderer().appendChild(child.getRenderer());
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = <IDisplayObject><any>/* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
        let addedEvent : IEvent = new Event(Event.ADDED, child, child);
        addedEvent.setData(this);
        child.dispatchEvent(addedEvent);
        if(this.getStage() != null) {
            let addedToStageEvent : IEvent = new Event(Event.ADDED_TO_STAGE, child, child);
            addedToStageEvent.setData(this.getStage());
            child.dispatchEvent(addedToStageEvent);
        }
    }

    public removeChild(child : IDisplayObject) {
        if(this.contains(child) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
        super.getRenderer().removeChild(child.getRenderer());
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = /* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
        let removedEvent : IEvent = new Event(Event.REMOVED, child, child);
        child.dispatchEvent(removedEvent);
        if(this.getStage() != null) {
            let removedFromStageEvent : IEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
            child.dispatchEvent(removedFromStageEvent);
        }
    }

    public removeChildAt(index : number) {
        if(index < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        let child : IDisplayObject = this.getChildAt(index);
        /* remove */this.children.splice(index, 1)[0];
        super.getRenderer().removeChild(child.getRenderer());
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = /* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
        let removedEvent : IEvent = new Event(Event.REMOVED, child, child);
        child.dispatchEvent(removedEvent);
        if(this.getStage() != null) {
            let removedFromStageEvent : IEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
            child.dispatchEvent(removedFromStageEvent);
        }
    }

    public getChildByName(name : string) : IDisplayObject {
        let outChild : IDisplayObject = null;
        for(let index121=0; index121 < this.children.length; index121++) {
            let child = this.children[index121];
            {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(child.getName(),name))) {
                    outChild = child;
                    break;
                }
            }
        }
        return outChild;
    }

    public getChildAt(index : number) : IDisplayObject {
        let outChild : IDisplayObject = null;
        outChild = /* get */this.children[index];
        return outChild;
    }

    public getChildIndex(child : IDisplayObject) : number {
        let index : number = -1;
        index = this.children.indexOf(child);
        return index;
    }

    public setChildIndex(child : IDisplayObject, index : number) {
        if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(this.contains(child) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        let currentIndex : number = this.getChildIndex(child);
        if(currentIndex < index) {
            /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
            /* add */this.children.splice(index, 0, child);
        } else if(currentIndex > index) {
            /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
            /* add */this.children.splice(index - 1, 0, child);
        }
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = /* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
    }

    public swapChildren(child1 : IDisplayObject, child2 : IDisplayObject) {
        if(this === child1 || this === child2) throw Object.defineProperty(new Error("A DisplayObject cannot be swapped to its parent."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(this.contains(child1) === false || this.contains(child2) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        let child1Index : number = this.getChildIndex(child1);
        let child2Index : number = this.getChildIndex(child2);
        let tempChild : IDisplayObject = child1;
        /* set */(this.children[child1Index] = child2);
        /* set */(this.children[child2Index] = tempChild);
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = /* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
    }

    public swapChildrenAt(index1 : number, index2 : number) {
        if(index1 >= /* size */(<number>this.children.length) || index2 >= /* size */(<number>this.children.length) || index1 < 0 || index2 < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index1 === index2) return;
        let child1 : IDisplayObject = this.getChildAt(index1);
        let child2 : IDisplayObject = this.getChildAt(index2);
        let tempChild : IDisplayObject = child1;
        /* set */(this.children[index1] = child2);
        /* set */(this.children[index2] = tempChild);
        for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
            let myChild : IDisplayObject = /* get */this.children[i];
            (<IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
        };}
    }

    public contains(displayObject : IDisplayObject) : boolean {
        let out : boolean = false;
        out = /* contains */(this.children.indexOf(<any>(displayObject)) >= 0);
        return out;
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let child : IDisplayObject = <IDisplayObject><any>/* get */this.children[i];
                let addedToStageEvent : IEvent = new Event(Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(event.getData());
                child.dispatchEvent(addedToStageEvent);
            };}
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED_FROM_STAGE)) {
            this.stage = null;
            for(let index122=0; index122 < this.children.length; index122++) {
                let child = this.children[index122];
                {
                    let removedFromStageEvent : IEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
                    child.dispatchEvent(removedFromStageEvent);
                }
            }
        }
        return super.dispatchEvent(event);
    }

    public render() {
        super.render();
        for(let index123=0; index123 < this.children.length; index123++) {
            let child = this.children[index123];
            {
                child.render();
            }
        }
    }
}
DisplayObjectContainer["__class"] = "splashjs.display.DisplayObjectContainer";
DisplayObjectContainer["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




