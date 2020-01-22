/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Package {
    static clazz : any = null;

    static packageData : Array<Package.PackageData>; public static packageData_$LI$() : Array<Package.PackageData> { if(Package.packageData == null) Package.packageData = <any>([]); return Package.packageData; };

    public static define(clazzInfo : Object) {
        let imports : Object = <any>(clazzInfo["imports"]);
        let clazz : Object = <any>(clazzInfo["clazz"]);
        let clazzName : string = <any>(clazz["name"]);
        let importedClazzNames : Array<any> = Object.getOwnPropertyNames(imports);
        let importedClazzName : string = "";
        let importedAbsoluteClazzName : string = "";
        let importJSText : string = "";
        for(let i : number = 0; i < importedClazzNames.length; i++) {{
            importedClazzName = <string>importedClazzNames[i];
            importedAbsoluteClazzName = <any>(imports[importedClazzName]);
            importJSText += "var " + importedClazzName + " = " + importedAbsoluteClazzName + ";\r\n";
        };}
        let packageID : string = <any>(clazzInfo["packaze"]);
        let js : string = "";
        let str : string = "";
        if(/* isEmpty */(packageID.length === 0)) {
            js = "window." + clazzName + " = " + clazz;
            console.info(js);
            js += importJSText;
            eval(js);
        } else {
            let words : string[] = packageID.split(".");
            for(let i : number = 0; i < words.length; i++) {{
                if(i === 0) {
                    str = "window." + words[i];
                    js = str + " = " + str + " || {};";
                } else if(i > 0) {
                    str += "." + words[i];
                    js = str + " = " + str + " || {};";
                }
                console.info(js);
                eval(js);
            };}
            js = importJSText + ";";
            js += "var clazz = " + clazz + ";";
            js += "var clazzName = clazz.name;";
            js += "eval(\"" + str + ".\" + clazzName + \" = \"" + clazz + "\");";
            console.info(js);
            eval(js);
        }
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
