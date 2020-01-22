/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IResource } from './IResource';

export interface IResourceLoader {
    addResource(resource : IResource);

    getResourceByName(resourceName : string) : IResource;

    loadAll();
}


