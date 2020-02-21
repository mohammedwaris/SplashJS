/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEvent } from '../../events/iface/IEvent';
import { Event } from '../../events/Event';
import { ResourceType } from '../../utils/ResourceType';
import { IResource } from '../../utils/iface/IResource';
import { IResourceLoader } from '../../utils/iface/IResourceLoader';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IResourceLoaderRenderer } from './iface/IResourceLoaderRenderer';
import { IResourceRenderer } from './iface/IResourceRenderer';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { IRenderer } from '../iface/IRenderer';

export class ResourceLoaderRenderer extends EventDispatcherRenderer implements IResourceLoaderRenderer {
    /*private*/ totalNumberOfResource : number;

    /*private*/ numberOfResourceLoaded : number;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.totalNumberOfResource===undefined) this.totalNumberOfResource = 0;
        if(this.numberOfResourceLoaded===undefined) this.numberOfResourceLoaded = 0;
        super.setRenderObject(renderObject);
    }

    public loadAll(resources : Array<IResource>) {
        this.totalNumberOfResource = /* size */(<number>resources.length);
        this.numberOfResourceLoaded = 0;
        let resource : IResource = null;
        for(let i : number = 0; i < /* size */(<number>resources.length); i++) {{
            resource = /* get */resources[i];
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(resource.getResourceType(), ResourceType.IMAGE)) {
                this.loadImage(resource);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(resource.getResourceType(), ResourceType.SOUND)) {
                this.loadSound(resource);
            }
        };}
    }

    /*private*/ loadImage(imageResource : IResource) {
        let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.responseType = "blob";
        xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
            return (xmlLoadEvent) => {
                let fileReader : FileReader = new FileReader();
                fileReader.addEventListener(HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                    (<IResourceRenderer><any>imageResource.getRenderer()).setResourceBase64(<string>fileReader.result);
                    this.numberOfResourceLoaded += 1;
                    this.checkIfResourceLoaded();
                });
                fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
            }
        })(xmlHttpRequest));
        xmlHttpRequest.open("get", imageResource.getResourcePath());
        xmlHttpRequest.send();
    }

    /*private*/ loadSound(soundResource : IResource) {
        let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.responseType = "blob";
        xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
            return (xmlLoadEvent) => {
                let fileReader : FileReader = new FileReader();
                fileReader.addEventListener(HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                    (<IResourceRenderer><any>soundResource.getRenderer()).setResourceBase64(<string>fileReader.result);
                    this.numberOfResourceLoaded += 1;
                    this.checkIfResourceLoaded();
                });
                fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
            }
        })(xmlHttpRequest));
        xmlHttpRequest.open("get", soundResource.getResourcePath());
        xmlHttpRequest.send();
    }

    /*private*/ checkIfResourceLoaded() {
        if(this.totalNumberOfResource === this.numberOfResourceLoaded) {
            let resourceLoader : IResourceLoader = <IResourceLoader><any>super.getRenderObject();
            let loadedEvent : IEvent = new splashjs.events.Event(splashjs.events.Event.LOAD, resourceLoader, resourceLoader);
            resourceLoader.dispatchEvent(loadedEvent);
        }
    }
}
ResourceLoaderRenderer["__class"] = "splashjs.render.utils.ResourceLoaderRenderer";
ResourceLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.utils.iface.IResourceLoaderRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




