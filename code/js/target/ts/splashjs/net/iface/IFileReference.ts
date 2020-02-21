/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFileFilter } from './IFileFilter';
import { IByteArray } from '../../utils/iface/IByteArray';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IURLRequest } from './IURLRequest';

export interface IFileReference extends IEventDispatcher {
    getCreationDate() : Date;

    getCreator() : string;

    setData(data : IByteArray);

    getData() : IByteArray;

    setExtension(extension : string);

    getExtension() : string;

    setModificationDate(modificationDate : Date);

    getModificationDate() : Date;

    getName() : string;

    setName(name : string);

    getPermissionStatus() : string;

    setSize(size : number);

    getSize() : number;

    setType(type : string);

    getType() : string;

    browse(typeFilters : IFileFilter[]) : boolean;

    cancel();

    download(urlRequest : IURLRequest, defaultFileName : string);

    load();

    requestPermission();

    save(data : any, defaultFileName : string);

    upload(urlRequest : IURLRequest, uploadDataFieldName : string, testUpload : boolean);

    uploadUnencoded(urlRequest : IURLRequest);
}


