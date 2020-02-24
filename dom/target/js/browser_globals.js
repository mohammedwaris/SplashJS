var EventTarget = com.silverbrain.browser.dom.EventTarget;
var Window = com.silverbrain.browser.dom.Window;
var Document = com.silverbrain.browser.dom.Document;
var Navigator = com.silverbrain.browser.dom.Navigator;
var HTMLAudioElement = com.silverbrain.browser.dom.HTMLAudioElement;
var HTMLImageElement = com.silverbrain.browser.dom.HTMLImageElement;


var window = new Window();
var document = new Document();
var navigator = new Navigator();
var Audio = HTMLAudioElement;
var Image = HTMLImageElement;

var console = {};
console.log = print;
console.info = print;
var trace = print;

window.document = document;
window.navigator = navigator;
window.Audio = Audio;
window.Image = Image;