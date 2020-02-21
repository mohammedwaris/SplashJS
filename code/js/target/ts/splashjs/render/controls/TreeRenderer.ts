/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ITree } from '../../controls/iface/ITree';
import { ISprite } from '../../display/iface/ISprite';
import { Sprite } from '../../display/Sprite';
import { ILabel } from '../../controls/iface/ILabel';
import { Label } from '../../controls/Label';
import { RenderElement } from '../RenderElement';
import { ITreeRenderer } from './iface/ITreeRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ControlRenderer } from './ControlRenderer';

export class TreeRenderer extends ControlRenderer implements ITreeRenderer {
    /*private*/ container : ISprite;

    /*private*/ htmlSpanElement : HTMLSpanElement;

    px : number = 0;

    py : number = 0;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.container===undefined) this.container = null;
        if(this.htmlSpanElement===undefined) this.htmlSpanElement = null;
        super.setRenderObject(renderObject);
        this.htmlSpanElement = <HTMLSpanElement>document.createElement("span");
        super.setRenderElement(new RenderElement(this.htmlSpanElement));
        this.create();
    }

    public create() {
        let jsRootObject : Object = <Object>(<ITree><any>super.getRenderObject()).getTreeData();
        if(jsRootObject != null) {
            this.container = new Sprite();
        }
    }
}
TreeRenderer["__class"] = "splashjs.render.controls.TreeRenderer";
TreeRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.controls.iface.ITreeRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




