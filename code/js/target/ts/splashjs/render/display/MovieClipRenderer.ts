/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IMovieClip } from '../../display/iface/IMovieClip';
import { RenderElement } from '../RenderElement';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ITimer } from '../../utils/iface/ITimer';
import { Timer } from '../../utils/Timer';
import { ITimerEvent } from '../../events/iface/ITimerEvent';
import { TimerEvent } from '../../events/TimerEvent';
import { IFrame } from '../../animation/iface/IFrame';
import { ISpriteSheet } from '../../animation/iface/ISpriteSheet';
import { IMovieClipData } from '../../animation/iface/IMovieClipData';
import { IMovieClipRenderer } from './iface/IMovieClipRenderer';
import { IResource } from '../../utils/iface/IResource';
import { SpriteRenderer } from './SpriteRenderer';
import { IEvent } from '../../events/iface/IEvent';

export class MovieClipRenderer extends SpriteRenderer implements IMovieClipRenderer {
    /*private*/ spanElement : HTMLSpanElement;

    movieClip : IMovieClip;

    count : number = 0;

    currentLoopCount : number = 0;

    loopCount : number = 1;

    timer : ITimer;

    /*private*/ playing : boolean = false;

    /*private*/ currentLabel : string = null;

    /*private*/ currentFrameIndex : number = -1;

    public constructor(renderObject : IEventDispatcher) {
        super(renderObject);
        if(this.spanElement===undefined) this.spanElement = null;
        if(this.movieClip===undefined) this.movieClip = null;
        if(this.timer===undefined) this.timer = null;
        this.movieClip = <IMovieClip><any>super.getRenderObject();
        this.spanElement = <HTMLSpanElement>super.getDOMElement();
        this.create();
    }

    public create() {
    }

    public gotoAndStop(label : string, frameIndex : number) {
        this.stop();
        let movieClipData : IMovieClipData = this.movieClip.getMovieClipDataByLabel(label);
        let spriteSheet : ISpriteSheet = movieClipData.getSpriteSheet();
        let imagePath : string = spriteSheet.getImagePath();
        let resource : IResource = spriteSheet.getResource();
        let imageBase64 : string = "";
        if(resource != null) imageBase64 = resource.getResourceBase64(); else imageBase64 = spriteSheet.getImageBase64();
        let frames : IFrame[] = movieClipData.getFrames();
        let totalFrames : number = frames.length;
        this.spanElement.style.width = frames[frameIndex].getWidth() + this.UNIT;
        this.spanElement.style.height = frames[frameIndex].getHeight() + this.UNIT;
        this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
        let imageFrameIndex : number = frames[frameIndex].getIndex();
        let frameWidth : number = frames[frameIndex].getWidth();
        let frameHeight : number = frames[frameIndex].getHeight();
        let framePerRow : number = (spriteSheet.getWidth() / frameWidth|0);
        let framePerColumn : number = (spriteSheet.getHeight() / frameHeight|0);
        let x : number = -(imageFrameIndex % framePerRow) * frameWidth;
        let y : number = -((imageFrameIndex / framePerRow|0)) * frameHeight;
        this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
        this.currentLabel = label;
        this.currentFrameIndex = frameIndex;
    }

    public gotoAndPlay(label : string, loopCount : number) {
        this.stop();
        this.loopCount = loopCount;
        let movieClipData : IMovieClipData = this.movieClip.getMovieClipDataByLabel(label);
        let spriteSheet : ISpriteSheet = movieClipData.getSpriteSheet();
        let imagePath : string = spriteSheet.getImagePath();
        let frames : IFrame[] = movieClipData.getFrames();
        let totalFrames : number = frames.length;
        if(totalFrames <= 1) {
            this.gotoAndStop(label, 0);
            return;
        }
        let resource : IResource = spriteSheet.getResource();
        let imageBase64 : string = "";
        if(resource != null) imageBase64 = resource.getResourceBase64(); else imageBase64 = spriteSheet.getImageBase64();
        this.spanElement.style.width = frames[0].getWidth() + this.UNIT;
        this.spanElement.style.height = frames[0].getHeight() + this.UNIT;
        this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
        let frameRate : number = this.movieClip.getFrameRate();
        let interval : number = ((<number>1000|0) / frameRate|0);
        this.count = 0;
        this.currentLoopCount = 0;
        this.timer = new Timer(interval);
        this.timer.addEventListener(TimerEvent.TIMER, ((frames,spriteSheet,totalFrames) => {
            return (event) => {
                requestAnimationFrame((time : number) => {
                    let frameIndex : number = frames[this.count].getIndex();
                    let frameWidth : number = frames[this.count].getWidth();
                    let frameHeight : number = frames[this.count].getHeight();
                    let framePerRow : number = (spriteSheet.getWidth() / frameWidth|0);
                    let framePerColumn : number = (spriteSheet.getHeight() / frameHeight|0);
                    let x : number = -(frameIndex % framePerRow) * frameWidth;
                    let y : number = -((frameIndex / framePerRow|0)) * frameHeight;
                    this.spanElement.style.width = frameWidth + this.UNIT;
                    this.spanElement.style.height = frameHeight + this.UNIT;
                    this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
                    this.currentFrameIndex = this.count;
                    if(this.count === totalFrames - 1) {
                        this.currentLoopCount += 1;
                        this.count = 0;
                        if(loopCount !== 0 && this.currentLoopCount >= loopCount) {
                            this.currentLoopCount = -1;
                            (<ITimer><any>event.getCurrentTarget()).reset();
                            this.playing = false;
                        }
                    } else {
                        this.count += 1;
                    }
                });
            }
        })(frames,spriteSheet,totalFrames));
        this.timer.start();
        this.currentLabel = label;
        this.playing = true;
    }

    public stop() {
        if(this.timer != null) {
            this.timer.stop();
            this.playing = false;
        }
    }

    public play() {
    }

    /*private*/ getBackgroundPositionCSSText() : string {
        return null;
    }

    public isPlaying$() : boolean {
        return this.playing;
    }

    public isPlaying$java_lang_String(label : string) : boolean {
        let labelPlaying : boolean = false;
        if(this.currentLabel != null && /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentLabel, label) && this.playing === true) labelPlaying = true;
        return labelPlaying;
    }

    public isPlaying(label? : any) : any {
        if(((typeof label === 'string') || label === null)) {
            return <any>this.isPlaying$java_lang_String(label);
        } else if(label === undefined) {
            return <any>this.isPlaying$();
        } else throw new Error('invalid overload');
    }

    public getCurrentLabel() : string {
        return this.currentLabel;
    }

    public getCurrentFrameIndex() : number {
        return this.currentFrameIndex;
    }

    public isLooping() : boolean {
        let looping : boolean = false;
        if(this.loopCount === 0 && this.playing === true) looping = true;
        return looping;
    }

    public getCurrentLoopCount() : number {
        return this.currentLoopCount;
    }
}
MovieClipRenderer["__class"] = "splashjs.render.display.MovieClipRenderer";
MovieClipRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IMovieClipRenderer","splashjs.render.display.iface.ISpriteRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];




