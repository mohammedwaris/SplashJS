/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IURLRequest } from './IURLRequest';

export interface IFileReference extends IEventDispatcher {
    getCreationDate() : Date;

    getCreator() : string;

    getData() : number[];

    getExtension() : string;

    getModificationDate() : Date;

    getName() : string;

    getPermissionStatus() : string;

    getSize() : number;

    getType() : string;

    browse(typeFilter : string[]) : boolean;

    cancel();

    download(urlRequest : IURLRequest, defaultFileName : string);

    load();

    requestPermission();

    save(data : any, defaultFileName : string);

    upload(urlRequest : IURLRequest, uploadDataFieldName : string, testUpload : boolean);

    uploadUnencoded(urlRequest : IURLRequest);
}


