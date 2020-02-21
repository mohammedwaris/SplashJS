/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { ITree } from './iface/ITree';
import { Control } from './Control';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Tree extends Control implements ITree {
    /*private*/ treeData : any;

    public constructor(treeData? : any) {
        if(((treeData != null) || treeData === null)) {
            let __args = arguments;
            super("tree");
            if(this.treeData===undefined) this.treeData = null;
            if(this.treeData===undefined) this.treeData = null;
            (() => {
                this.treeData = treeData;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
            })();
        } else if(treeData === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let treeData : any = null;
                super("tree");
                if(this.treeData===undefined) this.treeData = null;
                if(this.treeData===undefined) this.treeData = null;
                (() => {
                    this.treeData = treeData;
                    super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
                })();
            }
        } else throw new Error('invalid overload');
    }

    public getTreeData() : any {
        return this.treeData;
    }
}
Tree["__class"] = "splashjs.controls.Tree";
Tree["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.ITree","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];




