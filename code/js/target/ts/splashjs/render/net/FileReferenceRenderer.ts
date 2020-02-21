/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IRenderElement } from '../iface/IRenderElement';
import { IFileReference } from '../../net/iface/IFileReference';
import { IByteArray } from '../../utils/iface/IByteArray';
import { ByteArray } from '../../utils/ByteArray';
import { IURLRequest } from '../../net/iface/IURLRequest';
import { IFileFilter } from '../../net/iface/IFileFilter';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IEvent } from '../../events/iface/IEvent';
import { IProgressEvent } from '../../events/iface/IProgressEvent';
import { IIOErrorEvent } from '../../events/iface/IIOErrorEvent';
import { ProgressEvent } from '../../events/ProgressEvent';
import { IOErrorEvent } from '../../events/IOErrorEvent';
import { Event } from '../../events/Event';
import { IFileReferenceRenderer } from './iface/IFileReferenceRenderer';
import { IByteArrayRenderer } from '../utils/iface/IByteArrayRenderer';
import { IRenderer } from '../iface/IRenderer';
import { IStage } from '../../display/iface/IStage';

export class FileReferenceRenderer extends EventDispatcherRenderer implements IFileReferenceRenderer {
    htmlInputElement : HTMLInputElement;

    htmlAnchorElement : HTMLAnchorElement;

    selectedFile : File = null;

    inputRenderElement : IRenderElement;

    anchorRenderElement : IRenderElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        if(this.htmlAnchorElement===undefined) this.htmlAnchorElement = null;
        if(this.inputRenderElement===undefined) this.inputRenderElement = null;
        if(this.anchorRenderElement===undefined) this.anchorRenderElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.type = "file";
        this.inputRenderElement = new RenderElement(this.htmlInputElement);
        this.htmlAnchorElement = <HTMLAnchorElement>document.createElement("a");
        this.anchorRenderElement = new RenderElement(this.htmlAnchorElement);
        this.create();
    }

    public createEventListeners() {
        super.createEventListeners();
        this.htmlInputElement.addEventListener(HTMLDomEventName.CHANGE, (event) => {
            if(this.htmlInputElement.files.length === 1) {
                (<IFileReference><any>this.getRenderObject()).setName(null);
                (<IFileReference><any>this.getRenderObject()).setExtension(null);
                (<IFileReference><any>this.getRenderObject()).setSize(-1);
                (<IFileReference><any>this.getRenderObject()).setType(null);
                (<IFileReference><any>this.getRenderObject()).setModificationDate(null);
                this.selectedFile = this.htmlInputElement.files.item(0);
                let name : string = this.htmlInputElement.files.item(0).name;
                (<IFileReference><any>this.getRenderObject()).setName(name);
                let ext : string = name.substring(name.lastIndexOf(".") + 1);
                (<IFileReference><any>this.getRenderObject()).setExtension(ext);
                (<IFileReference><any>this.getRenderObject()).setSize(<any>(this.htmlInputElement.files.item(0)["size"]));
                (<IFileReference><any>this.getRenderObject()).setType(<any>(this.htmlInputElement.files.item(0)["type"]));
                let modificationDate : Date = new Date(<any>(this.htmlInputElement.files.item(0)["lastModified"]));
                (<IFileReference><any>this.getRenderObject()).setModificationDate(modificationDate);
                this.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.SELECT, this.getRenderObject(), this.getRenderObject()));
            }
        });
    }

    public create() {
        super.setRenderElement(this.inputRenderElement);
        super.getRenderObject().getStage().getRenderer().appendChild(this);
        super.setDisplay("none");
        super.setRenderElement(this.anchorRenderElement);
        super.getRenderObject().getStage().getRenderer().appendChild(this);
        super.setDisplay("none");
    }

    public download(urlRequest : IURLRequest, defaultFileName : string) {
        this.htmlAnchorElement.href = urlRequest.getURL();
        this.htmlAnchorElement.setAttribute("download", defaultFileName);
        this.htmlAnchorElement.click();
    }

    public browse$() : boolean {
        this.htmlInputElement.click();
        return true;
    }

    public browse$splashjs_net_iface_IFileFilter_A(fileFilters : IFileFilter[]) : boolean {
        this.htmlInputElement.click();
        return true;
    }

    public browse(fileFilters? : any) : any {
        if(((fileFilters != null && fileFilters instanceof <any>Array && (fileFilters.length==0 || fileFilters[0] == null ||(fileFilters[0] != null && (fileFilters[0]["__interfaces"] != null && fileFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || fileFilters[0].constructor != null && fileFilters[0].constructor["__interfaces"] != null && fileFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || fileFilters === null)) {
            return <any>this.browse$splashjs_net_iface_IFileFilter_A(fileFilters);
        } else if(fileFilters === undefined) {
            return <any>this.browse$();
        } else throw new Error('invalid overload');
    }

    public load() {
        if(this.selectedFile != null) {
            let fileReader : FileReader = new FileReader();
            fileReader.addEventListener("loadstart", (event) => {
                let loadStartEvent : IEvent = new Event(Event.OPEN, this.getRenderObject(), this.getRenderObject());
                this.getRenderObject().dispatchEvent(loadStartEvent);
            });
            fileReader.addEventListener("progress", (event) => {
                let progressEvent : IProgressEvent = new ProgressEvent(ProgressEvent.PROGRESS);
                progressEvent.setTarget(this.getRenderObject());
                progressEvent.setCurrentTarget(this.getRenderObject());
                progressEvent.setBytesLoaded((<number>((<ProgressEvent>event).loaded)|0));
                progressEvent.setBytesTotal((<number>((<ProgressEvent>event).total)|0));
                this.getRenderObject().dispatchEvent(progressEvent);
            });
            fileReader.addEventListener("error", ((fileReader) => {
                return (event) => {
                    let ioErrorEvent : IIOErrorEvent = new IOErrorEvent(IOErrorEvent.IO_ERROR);
                    ioErrorEvent.setTarget(this.getRenderObject());
                    ioErrorEvent.setCurrentTarget(this.getRenderObject());
                    ioErrorEvent.setText(fileReader.error.name);
                    this.getRenderObject().dispatchEvent(ioErrorEvent);
                }
            })(fileReader));
            fileReader.addEventListener("load", ((fileReader) => {
                return (event) => {
                    let byteArray : IByteArray = new ByteArray();
                    (<IByteArrayRenderer><any>byteArray.getRenderer()).setDataView(new DataView(<ArrayBuffer>fileReader.result));
                    (<IFileReference><any>this.getRenderObject()).setData(byteArray);
                    this.getRenderObject().dispatchEvent(new Event(Event.COMPLETE, this.getRenderObject(), this.getRenderObject()));
                }
            })(fileReader));
            fileReader.readAsArrayBuffer(this.selectedFile);
        }
    }
}
FileReferenceRenderer["__class"] = "splashjs.render.net.FileReferenceRenderer";
FileReferenceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.net.iface.IFileReferenceRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




