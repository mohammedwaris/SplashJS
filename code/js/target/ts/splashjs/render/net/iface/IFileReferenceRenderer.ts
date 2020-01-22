/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';
import { IURLRequest } from '../../../net/iface/IURLRequest';

export interface IFileReferenceRenderer extends IEventDispatcherRenderer {
    download(urlRequest : IURLRequest, defaultFileName : string);

    browse();
}


