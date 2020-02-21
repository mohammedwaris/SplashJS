/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISpriteRenderer } from './ISpriteRenderer';

export interface IMovieClipRenderer extends ISpriteRenderer {
    play();

    gotoAndStop(label : string, frameIndex : number);

    gotoAndPlay(label : string, loopCount : number);

    stop();

    isPlaying(label? : any) : any;

    getCurrentLabel() : string;

    getCurrentFrameIndex() : number;

    getCurrentLoopCount() : number;

    isLooping() : boolean;
}


