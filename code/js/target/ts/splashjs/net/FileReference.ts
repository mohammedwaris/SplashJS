/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IFileReference } from './iface/IFileReference';
import { IStage } from '../display/iface/IStage';
import { IFileReferenceRenderer } from '../render/net/iface/IFileReferenceRenderer';
import { IURLRequest } from './iface/IURLRequest';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class FileReference extends EventDispatcher implements IFileReference {
    /*private*/ creationDate : Date;

    /*private*/ creator : string;

    /*private*/ data : number[];

    /*private*/ extension : string;

    /*private*/ modificationDate : Date;

    /*private*/ name : string;

    /*private*/ permissionStatus : string;

    /*private*/ size : number;

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
        if(this.size===undefined) this.size = 0;
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

    public getData() : number[] {
        return this.data;
    }

    public getExtension() : string {
        return this.extension;
    }

    public getModificationDate() : Date {
        return this.modificationDate;
    }

    public getName() : string {
        return this.name;
    }

    public getPermissionStatus() : string {
        return this.permissionStatus;
    }

    public getSize() : number {
        return this.size;
    }

    public getType() : string {
        return this.type;
    }

    public browse$() : boolean {
        let value : boolean = false;
        (<IFileReferenceRenderer><any>super.getRenderer()).browse();
        return value;
    }

    public browse$java_lang_String_A(typeFilter : string[]) : boolean {
        let value : boolean = false;
        (<IFileReferenceRenderer><any>super.getRenderer()).browse();
        return value;
    }

    public browse(typeFilter? : any) : any {
        if(((typeFilter != null && typeFilter instanceof <any>Array && (typeFilter.length==0 || typeFilter[0] == null ||(typeof typeFilter[0] === 'string'))) || typeFilter === null)) {
            return <any>this.browse$java_lang_String_A(typeFilter);
        } else if(typeFilter === undefined) {
            return <any>this.browse$();
        } else throw new Error('invalid overload');
    }

    public cancel() {
    }

    public download(urlRequest : IURLRequest, defaultFileName : string) {
        (<IFileReferenceRenderer><any>super.getRenderer()).download(urlRequest, defaultFileName);
    }

    public load() {
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




