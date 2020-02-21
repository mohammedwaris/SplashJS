/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IStageOwner } from '../../application/iface/IStageOwner';
import { IColor } from '../../utils/iface/IColor';
import { IDisplayObjectContainer } from './IDisplayObjectContainer';
import { IScene } from './IScene';

export interface IStage extends IDisplayObjectContainer {
    setScaleMode(scaleMode : string);

    setAlign(stageAlign : string);

    setColor(color : IColor);

    getColor() : IColor;

    getStageOwner() : IStageOwner;

    setScene(scene : IScene);

    getScene() : IScene;
}


