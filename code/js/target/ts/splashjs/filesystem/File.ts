/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { FileStub } from './desktop/stubs/FileStub';

export class File {
    /*private*/ fileStub : FileStub;

    /*private*/ path : string;

    public constructor(path? : any) {
        if(((typeof path === 'string') || path === null)) {
            let __args = arguments;
            if(this.fileStub===undefined) this.fileStub = null;
            if(this.path===undefined) this.path = null;
            if(this.fileStub===undefined) this.fileStub = null;
            if(this.path===undefined) this.path = null;
            (() => {
                this.path = path;
                this.fileStub = FileStub.newInstance();
            })();
        } else if(path === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let path : any = null;
                if(this.fileStub===undefined) this.fileStub = null;
                if(this.path===undefined) this.path = null;
                if(this.fileStub===undefined) this.fileStub = null;
                if(this.path===undefined) this.path = null;
                (() => {
                    this.path = path;
                    this.fileStub = FileStub.newInstance();
                })();
            }
        } else throw new Error('invalid overload');
    }

    public browseForDirectory$java_lang_String(title : string) {
        this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, null);
    }

    public browseForDirectory$java_lang_Object(stage : any) {
        this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, stage);
    }

    public browseForDirectory$() {
        this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, null);
    }

    public browseForDirectory$java_lang_String$java_lang_Object(title : string, stage : any) {
        this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
    }

    public browseForDirectory(title? : any, stage? : any) : any {
        if(((typeof title === 'string') || title === null) && ((stage != null) || stage === null)) {
            return <any>this.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
        } else if(((typeof title === 'string') || title === null) && stage === undefined) {
            return <any>this.browseForDirectory$java_lang_String(title);
        } else if(((title != null) || title === null) && stage === undefined) {
            return <any>this.browseForDirectory$java_lang_Object(title);
        } else if(title === undefined && stage === undefined) {
            return <any>this.browseForDirectory$();
        } else throw new Error('invalid overload');
    }
}
File["__class"] = "splashjs.filesystem.File";



