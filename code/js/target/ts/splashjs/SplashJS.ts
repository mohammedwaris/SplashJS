/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IDisplayObject } from './display/iface/IDisplayObject';
import { IStage } from './display/iface/IStage';
import { IScene } from './display/iface/IScene';
import { Stage } from './display/Stage';
import { SplashJSRenderer } from './render/SplashJSRenderer';
import { IURLRequest } from './net/iface/IURLRequest';

export class SplashJS {
    public static render(AppClass : any, containerName : string, stageWidth : number, stageHeight : number) {
        let stage : IStage = new Stage(containerName, stageWidth, stageHeight);
        try {
            stage.addChild(<IDisplayObject><any>/* newInstance */new (AppClass)());
        } catch(e) {
            console.error(e.message, e);
        };
    }

    public static navigateToURL(urlRequest : IURLRequest) {
        SplashJSRenderer.navigateToURL(urlRequest);
    }
}
SplashJS["__class"] = "splashjs.SplashJS";



