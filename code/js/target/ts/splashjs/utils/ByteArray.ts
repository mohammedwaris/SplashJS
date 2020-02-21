/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IByteArrayRenderer } from '../render/utils/iface/IByteArrayRenderer';
import { IByteArray } from './iface/IByteArray';
import { EventDispatcher } from '../events/EventDispatcher';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class ByteArray extends EventDispatcher implements IByteArray {
    public constructor() {
        super("byteArray");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(ByteArray, this));
    }

    public getLength() : number {
        return (<IByteArrayRenderer><any>super.getRenderer()).getLength();
    }

    public writeBytes(byteArray : IByteArray, offset : number, length : number) {
        (<IByteArrayRenderer><any>super.getRenderer()).writeBytes(byteArray, offset, length);
    }
}
ByteArray["__class"] = "splashjs.utils.ByteArray";
ByteArray["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.utils.iface.IByteArray","splashjs.events.iface.IEventDispatcher"];




