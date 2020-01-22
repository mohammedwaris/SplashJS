package splashjs.render.controls;

import java.util.ArrayList;

import def.dom.HTMLSelectElement;
import def.dom.HTMLOptionElement;
import def.dom.HTMLOptGroupElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;


import splashjs.controls.iface.IItem;
import splashjs.controls.iface.IList;
import splashjs.controls.iface.IBaseItem;
import splashjs.controls.iface.IItemGroup;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.IListRenderer;

public class ListRenderer extends BaseListRenderer implements IListRenderer {

	private HTMLSelectElement htmlSelectElement;
	
	public ListRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlSelectElement = (HTMLSelectElement)document.createElement("select");
		super.setRenderElement (new RenderElement(htmlSelectElement));
		
	}
	
	public void create() {
		
	}
	
	public void addItem(IItem item) {
		HTMLOptionElement option = (HTMLOptionElement) document.createElement("option");
		option.text = item.getText();
		htmlSelectElement.add(option);
	}
	
	public void addItemGroup(IItemGroup itemGroup) {
		HTMLOptGroupElement optGroup = (HTMLOptGroupElement) document.createElement("optgroup");
		optGroup.label = itemGroup.getTitle();
		ArrayList<IItem> items = itemGroup.getAllItems();
		HTMLOptionElement option = null;
		IItem item = null;
		for(int i=0;i<items.size();i++) {
			item = items.get(i);
			option = (HTMLOptionElement) document.createElement("option");
			option.text = item.getText();
			optGroup.appendChild(option);
		}
		htmlSelectElement.add(optGroup);
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