/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IGridLayout } from './iface/IGridLayout';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { Layout } from './Layout';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class GridLayout extends Layout implements IGridLayout {
    /*private*/ row : number;

    /*private*/ col : number;

    /*private*/ children : Array<IDisplayObject>;

    public constructor(row : number, col : number) {
        super("gridLayout");
        if(this.row===undefined) this.row = 0;
        if(this.col===undefined) this.col = 0;
        if(this.children===undefined) this.children = null;
        this.row = row;
        this.col = col;
        this.children = <any>([]);
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(GridLayout, this));
    }

    public render() {
        super.render();
    }

    public getRow() : number {
        return this.row;
    }

    public getCol() : number {
        return this.col;
    }

    public add(displayObject : IDisplayObject, rowNum : number, colNum : number) {
        /* add */(this.children.push(displayObject)>0);
        displayObject.render();
    }
}
GridLayout["__class"] = "splashjs.layout.GridLayout";
GridLayout["__interfaces"] = ["splashjs.layout.iface.IGridLayout","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




