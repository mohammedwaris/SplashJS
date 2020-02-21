/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IFileReference } from './iface/IFileReference';
import { IFileFilter } from './iface/IFileFilter';
import { IByteArray } from '../utils/iface/IByteArray';
import { IStage } from '../display/iface/IStage';
import { IFileReferenceRenderer } from '../render/net/iface/IFileReferenceRenderer';
import { IURLRequest } from './iface/IURLRequest';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class FileReference extends EventDispatcher implements IFileReference {
    /*private*/ creationDate : Date;

    /*private*/ creator : string;

    /*private*/ data : IByteArray;

    /*private*/ extension : string;

    /*private*/ modificationDate : Date;

    /*private*/ name : string;

    /*private*/ permissionStatus : string;

    /*private*/ size : number = -1;

    /*private*/ type : string;

    public constructor(stage : IStage) {
        super("fileReference");
        if(this.creationDate===undefined) this.creationDate = null;
        if(this.creator===undefined) this.creator = null;
        if(this.data===undefined) this.data = null;
        if(this.extension===undefined) this.extension = null;
        if(this.modificationDate===undefined) this.modificationDate = null;
        if(this.name===undefined) this.name = null;
        if(this.permissionStatus===undefined) this.permissionStatus = null;
        if(this.type===undefined) this.type = null;
        this.stage = stage;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(FileReference, this));
    }

    public getCreationDate() : Date {
        return this.creationDate;
    }

    public getCreator() : string {
        return this.creator;
    }

    public setData(data : IByteArray) {
        this.data = data;
    }

    public getData() : IByteArray {
        return this.data;
    }

    public setExtension(extension : string) {
        this.extension = extension;
    }

    public getExtension() : string {
        return this.extension;
    }

    public setModificationDate(modificationDate : Date) {
        this.modificationDate = modificationDate;
    }

    public getModificationDate() : Date {
        return this.modificationDate;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getPermissionStatus() : string {
        return this.permissionStatus;
    }

    public setSize(size : number) {
        this.size = size;
    }

    public getSize() : number {
        return this.size;
    }

    public setType(type : string) {
        this.type = type;
    }

    public getType() : string {
        return this.type;
    }

    public browse$() : boolean {
        let value : boolean = false;
        value = (<IFileReferenceRenderer><any>super.getRenderer()).browse();
        return value;
    }

    public browse$splashjs_net_iface_IFileFilter_A(typeFilters : IFileFilter[]) : boolean {
        let value : boolean = false;
        value = (<IFileReferenceRenderer><any>super.getRenderer())['browse$splashjs_net_iface_IFileFilter_A'](typeFilters);
        return value;
    }

    public browse(typeFilters? : any) : any {
        if(((typeFilters != null && typeFilters instanceof <any>Array && (typeFilters.length==0 || typeFilters[0] == null ||(typeFilters[0] != null && (typeFilters[0]["__interfaces"] != null && typeFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || typeFilters[0].constructor != null && typeFilters[0].constructor["__interfaces"] != null && typeFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || typeFilters === null)) {
            return <any>this.browse$splashjs_net_iface_IFileFilter_A(typeFilters);
        } else if(typeFilters === undefined) {
            return <any>this.browse$();
        } else throw new Error('invalid overload');
    }

    public cancel() {
    }

    public download(urlRequest : IURLRequest, defaultFileName : string) {
        (<IFileReferenceRenderer><any>super.getRenderer()).download(urlRequest, defaultFileName);
    }

    public load() {
        (<IFileReferenceRenderer><any>super.getRenderer()).load();
    }

    public requestPermission() {
    }

    public save(data : any, defaultFileName : string) {
    }

    public upload(urlRequest : IURLRequest, uploadDataFieldName : string, testUpload : boolean) {
    }

    public uploadUnencoded(urlRequest : IURLRequest) {
    }
}
FileReference["__class"] = "splashjs.net.FileReference";
FileReference["__interfaces"] = ["splashjs.net.iface.IFileReference","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




