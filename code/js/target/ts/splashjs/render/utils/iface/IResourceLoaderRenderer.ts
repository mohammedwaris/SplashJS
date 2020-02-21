/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IResource } from '../../../utils/iface/IResource';
import { IEventDispatcherRenderer } from '../../events/iface/IEventDispatcherRenderer';

export interface IResourceLoaderRenderer extends IEventDispatcherRenderer {
    loadAll(resources : Array<IResource>);
}


