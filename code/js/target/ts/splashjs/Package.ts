/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Package {
    static clazz : any = null;

    static packageData : Array<Package.PackageData>; public static packageData_$LI$() : Array<Package.PackageData> { if(Package.packageData == null) Package.packageData = <any>([]); return Package.packageData; };

    public static define(packageID : string, imports : Array<any>, classInFunc : Function) {
        let numImports : number = <any>(imports["length"]);
        let importJSText : string = "";
        for(let i : number = 0; i < numImports; i++) {{
            let fullClazzName : string = <string>imports[i];
            let onlyClazzName : string = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
            importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
        };}
        let userClass : Object = <any>(classInFunc());
        let userClassName : string = <any>(userClass["name"]);
        if(packageID == null || /* isEmpty */(packageID.length === 0)) {
            window[userClassName] = userClass;
        } else {
            let words : string[] = packageID.split(".");
            let js : string = "";
            let str : string = "";
            for(let i : number = 0; i < words.length; i++) {{
                if(i === 0) {
                    window[words[i]] = <Object>new Object();
                    js = words[0] + " = " + words[0] + " || {};";
                    eval(js);
                    str = words[0];
                    console.info(js);
                } else if(i > 0) {
                    str += "." + words[i];
                    js = str + " = " + str + " || {};";
                    eval(js);
                    console.info(js);
                }
            };}
            str += "." + userClassName;
            js = str + " = " + userClass + ";";
            console.info(importJSText);
            eval(importJSText + js);
            console.info(js);
        }
        /* add */(Package.packageData_$LI$().push(new Package.PackageData(packageID, Package.clazz))>0);
    }
}
Package["__class"] = "splashjs.Package";


export namespace Package {

    export class PackageData {
        packageID : any;

        clazz : any;

        constructor(packageID : string, clazz : any) {
            if(this.packageID===undefined) this.packageID = null;
            if(this.clazz===undefined) this.clazz = null;
            this.packageID = packageID;
            this.clazz = clazz;
        }
    }
    PackageData["__class"] = "splashjs.Package.PackageData";

}




Package.packageData_$LI$();
