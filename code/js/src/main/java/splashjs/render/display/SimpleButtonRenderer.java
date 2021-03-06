package splashjs.render.display;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLImageElement;
import static def.dom.Globals.document;

import splashjs.display.iface.ISprite;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.ISimpleButton;
import splashjs.display.Sprite;

import splashjs.events.iface.IEventDispatcher;
import splashjs.render.display.iface.ISimpleButtonRenderer;
import splashjs.render.RenderElement;

public class SimpleButtonRenderer extends InteractiveObjectRenderer implements ISimpleButtonRenderer {

	private ISprite container = new Sprite();
	private IDisplayObject upState;
	private IDisplayObject downState;
	private IDisplayObject overState;
	private IDisplayObject disabledState;
	
	public SimpleButtonRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setRenderElement (new RenderElement((HTMLImageElement)document.createElement("span")));
	}
	
	public void create() {
		appendChild(container.getRenderer());
		setDownState();
		setOverState();
		setUpState();
		setDisabledState();
	}
	
	public void setUpState() {
		boolean visible  = true;
		if(upState == null) {
			upState = ((ISimpleButton)super.getRenderObject()).getUpState();
		}else if(upState != null) {
			visible = upState.getVisible();
			upState.setRenderer(null);
			container.removeChild(upState);
		}
			
		if(upState != null) {
			container.addChild(upState);
			upState.setVisible(visible);
			
		}
	}
	
	public void setDownState() {
		boolean visible  = false;
		if(downState == null) {
			downState = ((ISimpleButton)super.getRenderObject()).getDownState();
		}else if(downState != null) {
			visible = downState.getVisible();
			downState.setRenderer(null);
			container.removeChild(downState);
		}
			
		if(downState != null) {
			container.addChild(downState);
			downState.setVisible(visible);
		}
	}
	
	public void setOverState() {
		boolean visible  = false;
		if(overState == null) {
			overState = ((ISimpleButton)super.getRenderObject()).getOverState();
		}else if(overState != null) {
			visible = overState.getVisible();
			overState.setRenderer(null);
			container.removeChild(overState);
		}
			
		if(overState != null) {
			container.addChild(overState);
			overState.setVisible(visible);
		}
	}
	
	public void setDisabledState() {
		boolean visible  = false;
		if(disabledState == null) {
			disabledState = ((ISimpleButton)super.getRenderObject()).getDisabledState();
		}else if(disabledState != null) {
			visible = disabledState.getVisible();
			disabledState.setRenderer(null);
			container.removeChild(disabledState);
		}
			
		if(disabledState != null) {
			container.addChild(disabledState);
			disabledState.setVisible(visible);
		}
	}
	
	public void setEnabled() {
		boolean enabled = ((ISimpleButton)super.getRenderObject()).isEnabled();
		if(disabledState == null) {
			if(enabled == true) {
				((IDisplayObject)super.getRenderObject()).setAlpha(1.0);
			}else if(enabled == false){
				if(downState != null)
					downState.setVisible(false);
				if(upState != null)
					upState.setVisible(true);
				if(overState != null)
					overState.setVisible(false);
				
				((IDisplayObject)super.getRenderObject()).setAlpha(0.5);
			}
		}else{
			if(enabled == false) {
				disabledState.setVisible(true);
				if(downState != null)
					downState.setVisible(false);
				if(upState != null)
					upState.setVisible(false);
				if(overState != null)
					overState.setVisible(false);
				
			}else{
				disabledState.setVisible(false);
				if(upState != null)
					upState.setVisible(true);
			}
		}
	}
		
	
	
	
	
	
	
	
	
}//end of class