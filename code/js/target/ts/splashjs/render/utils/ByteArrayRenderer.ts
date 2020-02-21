/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IByteArray } from '../../utils/iface/IByteArray';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IByteArrayRenderer } from './iface/IByteArrayRenderer';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';

export class ByteArrayRenderer extends EventDispatcherRenderer implements IByteArrayRenderer {
    /*private*/ dataView : DataView;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.dataView===undefined) this.dataView = null;
        super.setRenderObject(renderObject);
        this.dataView = new DataView(new ArrayBuffer(0));
    }

    public setDataView(dataView : DataView) {
        this.dataView = dataView;
    }

    public getLength() : number {
        return (<number>this.dataView.byteLength|0);
    }

    public writeBytes(byteArray : IByteArray, offset : number, length : number) {
    }
}
ByteArrayRenderer["__class"] = "splashjs.render.utils.ByteArrayRenderer";
ByteArrayRenderer["__interfaces"] = ["splashjs.render.utils.iface.IByteArrayRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




