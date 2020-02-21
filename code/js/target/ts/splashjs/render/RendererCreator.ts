/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Stage } from '../display/Stage';
import { Sprite } from '../display/Sprite';
import { MovieClip } from '../display/MovieClip';
import { Image } from '../display/Image';
import { Line } from '../display/Line';
import { Circle } from '../display/Circle';
import { Scene } from '../display/Scene';
import { Bitmap } from '../display/Bitmap';
import { BitmapData } from '../display/BitmapData';
import { StageRenderer } from './display/StageRenderer';
import { SpriteRenderer } from './display/SpriteRenderer';
import { MovieClipRenderer } from './display/MovieClipRenderer';
import { ImageRenderer } from './display/ImageRenderer';
import { LineRenderer } from './display/LineRenderer';
import { CircleRenderer } from './display/CircleRenderer';
import { SceneRenderer } from './display/SceneRenderer';
import { BitmapRenderer } from './display/BitmapRenderer';
import { BitmapDataRenderer } from './display/BitmapDataRenderer';
import { List } from '../controls/List';
import { Button } from '../controls/Button';
import { Tree } from '../controls/Tree';
import { Label } from '../controls/Label';
import { Font } from '../text/Font';
import { StaticText } from '../text/StaticText';
import { InputText } from '../text/InputText';
import { FontRenderer } from './text/FontRenderer';
import { StaticTextRenderer } from './text/StaticTextRenderer';
import { InputTextRenderer } from './text/InputTextRenderer';
import { FileReference } from '../net/FileReference';
import { URLLoader } from '../net/URLLoader';
import { FileReferenceRenderer } from './net/FileReferenceRenderer';
import { URLLoaderRenderer } from './net/URLLoaderRenderer';
import { ByteArray } from '../utils/ByteArray';
import { ResourceLoader } from '../utils/ResourceLoader';
import { Resource } from '../utils/Resource';
import { ResourceLoaderRenderer } from './utils/ResourceLoaderRenderer';
import { ResourceRenderer } from './utils/ResourceRenderer';
import { ByteArrayRenderer } from './utils/ByteArrayRenderer';
import { Application } from '../application/Application';
import { StageOwner } from '../application/StageOwner';
import { Sound } from '../media/Sound';
import { Video } from '../media/Video';
import { Camera } from '../media/Camera';
import { SoundRenderer } from './media/SoundRenderer';
import { VideoRenderer } from './media/VideoRenderer';
import { CameraRenderer } from './media/CameraRenderer';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';
import { GlobalRenderer } from './GlobalRenderer';
import { IRendererCreator } from './iface/IRendererCreator';
import { IRenderer } from './iface/IRenderer';
import { ApplicationRenderer } from './application/ApplicationRenderer';
import { StageOwnerRenderer } from './application/StageOwnerRenderer';
import { ListRenderer } from './controls/ListRenderer';
import { ButtonRenderer } from './controls/ButtonRenderer';
import { TreeRenderer } from './controls/TreeRenderer';
import { LabelRenderer } from './controls/LabelRenderer';
import { ScaleTransition } from '../animation/ScaleTransition';
import { FadeTransition } from '../animation/FadeTransition';
import { CircularTransition } from '../animation/CircularTransition';
import { RotationTransition } from '../animation/RotationTransition';
import { TranslateTransition } from '../animation/TranslateTransition';
import { SpriteSheet } from '../animation/SpriteSheet';
import { ScaleTransitionRenderer } from './animation/ScaleTransitionRenderer';
import { FadeTransitionRenderer } from './animation/FadeTransitionRenderer';
import { CircularTransitionRenderer } from './animation/CircularTransitionRenderer';
import { RotationTransitionRenderer } from './animation/RotationTransitionRenderer';
import { TranslateTransitionRenderer } from './animation/TranslateTransitionRenderer';
import { SpriteSheetRenderer } from './animation/SpriteSheetRenderer';

export class RendererCreator implements IRendererCreator {
    public createRenderer(clazz : any, renderObject : IEventDispatcher) : IRenderer {
        let renderer : IRenderer = null;
        if(clazz === Global) renderer = new GlobalRenderer(renderObject); else if(clazz === Application) renderer = new ApplicationRenderer(renderObject); else if(clazz === StageOwner) renderer = new StageOwnerRenderer(renderObject); else if(clazz === Stage) renderer = new StageRenderer(renderObject); else if(clazz === Scene) renderer = new SceneRenderer(renderObject); else if(clazz === Sprite) renderer = new SpriteRenderer(renderObject); else if(clazz === MovieClip) renderer = new MovieClipRenderer(renderObject); else if(clazz === Image) renderer = new ImageRenderer(renderObject); else if(clazz === Bitmap) renderer = new BitmapRenderer(renderObject); else if(clazz === BitmapData) renderer = new BitmapDataRenderer(renderObject); else if(clazz === Line) renderer = new LineRenderer(renderObject); else if(clazz === Circle) renderer = new CircleRenderer(renderObject); else if(clazz === Label) renderer = new LabelRenderer(renderObject); else if(clazz === Button) renderer = new ButtonRenderer(renderObject); else if(clazz === Tree) renderer = new TreeRenderer(renderObject); else if(clazz === StaticText) renderer = new StaticTextRenderer(renderObject); else if(clazz === InputText) renderer = new InputTextRenderer(renderObject); else if(clazz === FileReference) renderer = new FileReferenceRenderer(renderObject); else if(clazz === URLLoader) renderer = new URLLoaderRenderer(renderObject); else if(clazz === Resource) renderer = new ResourceRenderer(renderObject); else if(clazz === ResourceLoader) renderer = new ResourceLoaderRenderer(renderObject); else if(clazz === Sound) renderer = new SoundRenderer(renderObject); else if(clazz === Video) renderer = new VideoRenderer(renderObject); else if(clazz === Camera) renderer = new CameraRenderer(renderObject); else if(clazz === List) renderer = new ListRenderer(renderObject); else if(clazz === ByteArray) renderer = new ByteArrayRenderer(renderObject); else if(clazz === FadeTransition) renderer = new FadeTransitionRenderer(renderObject); else if(clazz === ScaleTransition) renderer = new ScaleTransitionRenderer(renderObject); else if(clazz === CircularTransition) renderer = new CircularTransitionRenderer(renderObject); else if(clazz === RotationTransition) renderer = new RotationTransitionRenderer(renderObject); else if(clazz === TranslateTransition) renderer = new TranslateTransitionRenderer(renderObject); else if(clazz === SpriteSheet) renderer = new SpriteSheetRenderer(renderObject); else {
            console.info("Error: " + clazz + " renderer not found");
        }
        return renderer;
    }

    constructor() {
    }
}
RendererCreator["__class"] = "splashjs.render.RendererCreator";
RendererCreator["__interfaces"] = ["splashjs.render.iface.IRendererCreator"];




