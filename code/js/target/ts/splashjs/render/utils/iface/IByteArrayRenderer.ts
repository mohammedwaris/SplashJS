/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';
import { IByteArray } from '../../../utils/iface/IByteArray';

export interface IByteArrayRenderer extends IEventDispatcherRenderer {
    writeBytes(byteArray : IByteArray, offset : number, length : number);

    getLength() : number;

    setDataView(dataView : DataView);
}


