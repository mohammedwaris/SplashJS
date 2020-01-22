/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Stage } from '../display/Stage';
import { Sprite } from '../display/Sprite';
import { Line } from '../display/Line';
import { Circle } from '../display/Circle';
import { Button } from '../controls/Button';
import { StaticText } from '../text/StaticText';
import { FileReference } from '../net/FileReference';
import { Application } from '../application/Application';
import { StageOwner } from '../application/StageOwner';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';
import { StageRenderer } from './display/StageRenderer';
import { SpriteRenderer } from './display/SpriteRenderer';
import { LineRenderer } from './display/LineRenderer';
import { CircleRenderer } from './display/CircleRenderer';
import { IRendererCreator } from './iface/IRendererCreator';
import { IRenderer } from './iface/IRenderer';
import { ApplicationRenderer } from './application/ApplicationRenderer';
import { StageOwnerRenderer } from './application/StageOwnerRenderer';
import { ButtonRenderer } from './controls/ButtonRenderer';
import { StaticTextRenderer } from './text/StaticTextRenderer';
import { FileReferenceRenderer } from './net/FileReferenceRenderer';

export class RendererCreator implements IRendererCreator {
    public createRenderer(clazz : any, renderObject : IEventDispatcher) : IRenderer {
        let renderer : IRenderer = null;
        if(clazz === Application) renderer = new ApplicationRenderer(renderObject); else if(clazz === StageOwner) renderer = new StageOwnerRenderer(renderObject); else if(clazz === Stage) renderer = new StageRenderer(renderObject); else if(clazz === Sprite) renderer = new SpriteRenderer(renderObject); else if(clazz === Line) renderer = new LineRenderer(renderObject); else if(clazz === Circle) renderer = new CircleRenderer(renderObject); else if(clazz === Button) renderer = new ButtonRenderer(renderObject); else if(clazz === StaticText) renderer = new StaticTextRenderer(renderObject); else if(clazz === FileReference) renderer = new FileReferenceRenderer(renderObject);
        return renderer;
    }

    constructor() {
    }
}
RendererCreator["__class"] = "splashjs.render.RendererCreator";
RendererCreator["__interfaces"] = ["splashjs.render.iface.IRendererCreator"];




