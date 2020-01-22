package flashjs.render.display.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.render.display.*;
import flashjs.render.desktop.*;
import flashjs.render.display.dataprovider.*;

public class DesktopSimpleButtonRenderer extends DesktopInteractiveObjectRenderer implements ISimpleButtonRenderer {
	
	private ISimpleButtonRendererDataProvider buttonRendererDataProvider;

	public DesktopSimpleButtonRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		super.setDataProvider(new SimpleButtonRendererDataProvider(renderObject));
		
		js = "var " + super.getRenderObjectID() + " = document.createElement(\"span\");";
		js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		webEngine.executeScript(js);
		js = super.getRenderObjectID();
		super.setRenderElement(new DesktopRenderElement((HTMLElement)webEngine.executeScript(js)));
		
		buttonRendererDataProvider = (ISimpleButtonRendererDataProvider)super.getDataProvider();
		buttonRendererDataProvider.getContainer().setRendererFromStage( ((ISimpleButton)super.getRenderObject()).getStage() );
	}

	public void create() {
		appendChild(buttonRendererDataProvider.getContainer().getRenderer());
		buttonRendererDataProvider.setDownState();
		buttonRendererDataProvider.setOverState();
		buttonRendererDataProvider.setUpState();
		buttonRendererDataProvider.setDisabledState();
	}
	
	public void setUpState() {
		buttonRendererDataProvider.setUpState();
	}
	
	public void setDownState() {
		buttonRendererDataProvider.setDownState();
	}
	
	public void setOverState() {
		buttonRendererDataProvider.setOverState();
	}
	
	public void setDisabledState() {
		buttonRendererDataProvider.setDisabledState();
	}
	
	public void setEnabled() {
		buttonRendererDataProvider.setEnabled();
	}
	
	


}//end of class