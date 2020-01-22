/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFileFilter } from './iface/IFileFilter';

export class FileFilter implements IFileFilter {
    /*private*/ description : string = "";

    /*private*/ extension : string = "";

    public constructor(description : string, extension : string) {
        this.description = description;
        this.extension = extension;
    }

    public getDescription() : string {
        return this.description;
    }

    public getExtension() : string {
        return this.extension;
    }
}
FileFilter["__class"] = "splashjs.net.FileFilter";
FileFilter["__interfaces"] = ["splashjs.net.iface.IFileFilter"];




