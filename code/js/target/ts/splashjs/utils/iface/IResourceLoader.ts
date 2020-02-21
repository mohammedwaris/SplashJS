/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IResource } from './IResource';

export interface IResourceLoader extends IEventDispatcher {
    addResource(resource : IResource);

    getResourceByName(resourceName : string) : IResource;

    loadAll();
}


