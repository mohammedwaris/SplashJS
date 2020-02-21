/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { ISpriteSheetRenderer } from './iface/ISpriteSheetRenderer';
import { ISpriteSheet } from '../../animation/iface/ISpriteSheet';
import { ISprite } from '../../display/iface/ISprite';
import { IMovieClip } from '../../display/iface/IMovieClip';
import { IImage } from '../../display/iface/IImage';
import { Image } from '../../display/Image';
import { ISpriteData } from '../../animation/iface/ISpriteData';
import { IMovieClipData } from '../../animation/iface/IMovieClipData';
import { IFrame } from '../../animation/iface/IFrame';
import { Sprite } from '../../display/Sprite';
import { MovieClip } from '../../display/MovieClip';
import { IRenderer } from '../iface/IRenderer';

export class SpriteSheetRenderer extends EventDispatcherRenderer implements ISpriteSheetRenderer {
    /*private*/ spriteSheet : ISpriteSheet = null;

    /*private*/ imageElement : HTMLImageElement = null;

    /*private*/ width : number = 0;

    /*private*/ height : number = 0;

    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        this.spriteSheet = <ISpriteSheet><any>super.getRenderObject();
        this.imageElement = <HTMLImageElement>document.createElement("img");
        this.imageElement.src = this.spriteSheet.getImagePath();
        this.imageElement.addEventListener("load", (event) => {
            this.width = (<number>this.imageElement.naturalWidth|0);
            this.height = (<number>this.imageElement.naturalHeight|0);
        });
        let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.responseType = "blob";
        xmlHttpRequest.addEventListener("load", ((xmlHttpRequest) => {
            return (event) => {
                let fileReader : FileReader = new FileReader();
                fileReader.addEventListener("load", (fevent) => {
                    this.spriteSheet.setImageBase64(<string>fileReader.result);
                });
                fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
            }
        })(xmlHttpRequest));
        xmlHttpRequest.open("get", this.spriteSheet.getImagePath());
        xmlHttpRequest.send();
    }

    public getSprite(label : string) : ISprite {
        let spriteData : ISpriteData = (<ISpriteSheet><any>super.getRenderObject()).getSpriteDataByLabel(label);
        let imagePath : string = spriteData.getSpriteSheet().getImagePath();
        let frame : IFrame = spriteData.getFrame();
        let x : number = frame.getX();
        let y : number = frame.getY();
        let width : number = frame.getWidth();
        let height : number = frame.getHeight();
        let sprite : ISprite = new Sprite();
        let spanElement : HTMLSpanElement = <HTMLSpanElement>sprite.getRenderer().getDOMElement();
        spanElement.style.width = width + this.UNIT;
        spanElement.style.height = height + this.UNIT;
        spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
        spanElement.style.backgroundPosition = "-" + x + this.UNIT + " -" + y + this.UNIT;
        let parentSprite : ISprite = new Sprite();
        parentSprite.addChild(sprite);
        return parentSprite;
    }

    public getMovieClip(label : string) : IMovieClip {
        let movieClip : IMovieClip = new MovieClip(this.spriteSheet.getMovieClipDataByLabel(label));
        return movieClip;
    }

    public getWidth() : number {
        return this.width;
    }

    public getHeight() : number {
        return this.height;
    }
}
SpriteSheetRenderer["__class"] = "splashjs.render.animation.SpriteSheetRenderer";
SpriteSheetRenderer["__interfaces"] = ["splashjs.render.animation.iface.ISpriteSheetRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




