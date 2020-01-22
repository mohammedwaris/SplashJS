package splashjs.render.controls;

import def.dom.HTMLSpanElement;
import static def.dom.Globals.document;
import static def.js.Globals.undefined;

import splashjs.controls.iface.ITree;
import splashjs.display.iface.ISprite;
import splashjs.display.Sprite;
import splashjs.controls.iface.ILabel;
import splashjs.controls.Label;
import splashjs.render.RenderElement;
import splashjs.render.controls.iface.ITreeRenderer;
import splashjs.events.iface.IEventDispatcher;

public class TreeRenderer extends ControlRenderer implements ITreeRenderer {

	private ISprite container;
	private HTMLSpanElement htmlSpanElement;
	int px =0, py = 0;
	
	public TreeRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlSpanElement = (HTMLSpanElement)document.createElement("span");
		super.setRenderElement(new RenderElement(htmlSpanElement));
		create();
	}
	
	public void create() {
		
		def.js.Object jsRootObject = (def.js.Object)((ITree)super.getRenderObject()).getTreeData();
		if(jsRootObject != null) {
			
			container = new Sprite();
			
		}
		
	}
	
	

}