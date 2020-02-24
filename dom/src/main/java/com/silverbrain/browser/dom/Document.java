package com.silverbrain.browser.dom;

public class Document extends Node {
	
	public HTMLElement createElement(String tagName) {
		return new HTMLElement();
	}

	public Element createElementNS(String namespaceURI, String tagName) {
		return new HTMLElement();
	}

}