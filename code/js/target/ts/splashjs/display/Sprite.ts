/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { ISprite } from './iface/ISprite';
import { IDisplayObject } from './iface/IDisplayObject';
import { ISpriteRenderer } from '../render/display/iface/ISpriteRenderer';
import { DisplayObjectContainer } from './DisplayObjectContainer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Sprite extends DisplayObjectContainer implements ISprite {
    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super(id);
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
            })();
        } else if(id === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let id : any = "sprite";
                super(id);
                (() => {
                    super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * 
     */
    public render() {
        super.render();
        (<ISpriteRenderer><any>super.getRenderer()).setBorder("0px solid olive");
    }

    /**
     * 
     * @return {number}
     */
    public getWidth() : number {
        let leftX : number = 0;
        let rightX : number = 0;
        if(/* size */(<number>this.children.length) > 0) {
            leftX = /* get */this.children[0].getX();
            rightX = /* get */this.children[0].getX() + /* get */this.children[0].getWidth();
            for(let index124=0; index124 < this.children.length; index124++) {
                let child = this.children[index124];
                {
                    if(leftX > child.getX()) leftX = child.getX();
                    if(rightX < (child.getX() + child.getWidth())) rightX = (child.getX() + child.getWidth());
                }
            }
        }
        return (rightX - leftX);
    }

    /**
     * 
     * @return {number}
     */
    public getHeight() : number {
        let topY : number = 0;
        let bottomY : number = 0;
        if(/* size */(<number>this.children.length) > 0) {
            topY = /* get */this.children[0].getY();
            bottomY = /* get */this.children[0].getY() + /* get */this.children[0].getHeight();
            for(let index125=0; index125 < this.children.length; index125++) {
                let child = this.children[index125];
                {
                    if(topY > child.getY()) topY = child.getY();
                    if(bottomY < (child.getY() + child.getHeight())) bottomY = (child.getY() + child.getHeight());
                }
            }
        }
        return (bottomY - topY);
    }
}
Sprite["__class"] = "splashjs.display.Sprite";
Sprite["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.ISprite","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




