/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IStage } from '../display/iface/IStage';
import { IRenderer } from '../render/iface/IRenderer';
import { EventDispatcher } from '../events/EventDispatcher';
import { IStageOwner } from './iface/IStageOwner';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class StageOwner extends EventDispatcher implements IStageOwner {
    /*private*/ __splashjs_application_StageOwner_renderer : IRenderer;

    /*private*/ stage : IStage;

    width : number;

    height : number;

    public constructor(stageOwnerName : string, stage : IStage, width : number, height : number) {
        super(stageOwnerName);
        if(this.__splashjs_application_StageOwner_renderer===undefined) this.__splashjs_application_StageOwner_renderer = null;
        if(this.stage===undefined) this.stage = null;
        if(this.width===undefined) this.width = 0;
        if(this.height===undefined) this.height = 0;
        this.stage = stage;
        this.width = width;
        this.height = height;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(StageOwner, this));
    }

    public getStage() : IStage {
        return this.stage;
    }

    public setWidth(width : number) {
        this.width = width;
    }

    public getWidth() : number {
        return this.width;
    }

    public setHeight(height : number) {
        this.height = height;
    }

    public getHeight() : number {
        return this.height;
    }
}
StageOwner["__class"] = "splashjs.application.StageOwner";
StageOwner["__interfaces"] = ["splashjs.application.iface.IStageOwner","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




