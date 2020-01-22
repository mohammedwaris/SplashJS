package flashjs.render.controls.desktop;

import java.util.ArrayList;

import org.w3c.dom.html.*;

import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;
import flashjs.render.display.desktop.*;

public class DesktopListRenderer extends DesktopBaseListRenderer implements IListRenderer {

	private HTMLSelectElement htmlSelectElement;
	private String htmlSelectElementID;
	private int optionCounter = 0;
	
	public DesktopListRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlSelectElementID = super.getRenderObjectID();
		
		js = "var " + htmlSelectElementID + " = document.createElement(\"select\");";
		js += htmlSelectElementID + ".id = \"" + htmlSelectElementID + "\";"; 
		webEngine.executeScript(js);
		htmlSelectElement = (HTMLSelectElement)webEngine.executeScript(htmlSelectElementID);
		super.setRenderElement(new DesktopRenderElement(htmlSelectElement));
		
	}
	
	public void create() {
		
	}
	
	public void addItem(IItem item) {
		js = htmlSelectElementID + "option" + optionCounter + " = document.createElement(\"option\")";
		webEngine.executeScript(js);
		js = htmlSelectElementID + "option" + optionCounter;
		HTMLOptionElement option = (HTMLOptionElement) webEngine.executeScript(js);
		js = htmlSelectElementID + "option" + optionCounter + ".text = \"" + item.getText() + "\";";
		webEngine.executeScript(js);
		htmlSelectElement.add(option, null);
		optionCounter += 1;
	}
	
	public void addItemGroup(IItemGroup itemGroup) {
		js = "document.createElement(\"optgroup\")";
		HTMLOptGroupElement optGroup = (HTMLOptGroupElement) webEngine.executeScript(js);
		optGroup.setLabel(itemGroup.getTitle());
		ArrayList<IItem> items = itemGroup.getAllItems();
		HTMLOptionElement option = null;
		IItem item = null;
		for(int i=0;i<items.size();i++) {
			item = items.get(i);
			js = htmlSelectElementID + "option" + optionCounter + " = document.createElement(\"option\")";
			webEngine.executeScript(js);
			js = htmlSelectElementID + "option" + optionCounter;
			option = (HTMLOptionElement) webEngine.executeScript(js);
			js = htmlSelectElementID + "option" + optionCounter + ".text = \"" + item.getText() + "\";";
			webEngine.executeScript(js);
			optGroup.appendChild(option);
			optionCounter += 1;
		}
		htmlSelectElement.add(optGroup, null);
	}
	
	public void addAllItems() {
		ArrayList<IBaseItem> items = ((IList)super.getRenderObject()).getAllItems();
		IBaseItem baseItem = null;
		HTMLOptionElement option = null;
		System.out.println(items.size());
		for(int i=0;i<items.size();i++) {
			baseItem = items.get(i);
			if(baseItem instanceof IItem) {
				this.addItem((IItem)baseItem);
			}else if(baseItem instanceof IItemGroup) {
				this.addItemGroup((IItemGroup)baseItem);
			}
			
		}
	}
	
	
	
	
	
	
	
}