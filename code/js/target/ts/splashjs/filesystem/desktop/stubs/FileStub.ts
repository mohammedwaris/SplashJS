/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class FileStub {
    public static newInstance() : FileStub {
        return new FileStub();
    }

    public constructor(path? : any) {
        if(((typeof path === 'string') || path === null)) {
            let __args = arguments;
        } else if(path === undefined) {
            let __args = arguments;
        } else throw new Error('invalid overload');
    }

    public browseForDirectory$java_lang_String(title : string) {
    }

    public browseForDirectory$java_lang_Object(stage : any) {
    }

    public browseForDirectory$() {
    }

    public browseForDirectory$java_lang_String$java_lang_Object(title : string, stage : any) {
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
FileStub["__class"] = "splashjs.filesystem.desktop.stubs.FileStub";



