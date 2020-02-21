/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class FontPath {
    /*private*/ normalFontPath : string;

    /*private*/ italicFontPath : string;

    /*private*/ boldFontPath : string;

    /*private*/ boldItalicFontPath : string;

    public constructor(normalFontPath? : any) {
        if(((typeof normalFontPath === 'string') || normalFontPath === null)) {
            let __args = arguments;
            if(this.normalFontPath===undefined) this.normalFontPath = null;
            if(this.italicFontPath===undefined) this.italicFontPath = null;
            if(this.boldFontPath===undefined) this.boldFontPath = null;
            if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
            if(this.normalFontPath===undefined) this.normalFontPath = null;
            if(this.italicFontPath===undefined) this.italicFontPath = null;
            if(this.boldFontPath===undefined) this.boldFontPath = null;
            if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
            (() => {
                this.normalFontPath = normalFontPath;
            })();
        } else if(normalFontPath === undefined) {
            let __args = arguments;
            if(this.normalFontPath===undefined) this.normalFontPath = null;
            if(this.italicFontPath===undefined) this.italicFontPath = null;
            if(this.boldFontPath===undefined) this.boldFontPath = null;
            if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
            if(this.normalFontPath===undefined) this.normalFontPath = null;
            if(this.italicFontPath===undefined) this.italicFontPath = null;
            if(this.boldFontPath===undefined) this.boldFontPath = null;
            if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
        } else throw new Error('invalid overload');
    }

    public setNormalFontPath(normalFontPath : string) : FontPath {
        this.normalFontPath = normalFontPath;
        return this;
    }

    public setBoldFontPath(boldFontPath : string) : FontPath {
        this.boldFontPath = boldFontPath;
        return this;
    }

    public setItalicFontPath(italicFontPath : string) : FontPath {
        this.italicFontPath = italicFontPath;
        return this;
    }

    public setBoldItalicFontPath(boldItalicFontPath : string) : FontPath {
        this.boldItalicFontPath = boldItalicFontPath;
        return this;
    }

    public getNormalFontPath() : string {
        return this.normalFontPath;
    }

    public getBoldFontPath() : string {
        return this.boldFontPath;
    }

    public getItalicFontPath() : string {
        return this.italicFontPath;
    }

    public getBoldItalicFontPath() : string {
        return this.boldItalicFontPath;
    }
}
FontPath["__class"] = "splashjs.text.FontPath";



