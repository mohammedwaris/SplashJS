package splashjs.display;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.MouseEvent;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.ISimpleButton;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.render.display.iface.ISimpleButtonRenderer;

public class SimpleButton extends InteractiveObject implements ISimpleButton {
	
	private IDisplayObject upState = null;
	private IDisplayObject downState = null;
	private IDisplayObject overState = null;
	private IDisplayObject disabledState = null;
	private boolean enabled = true;

	public SimpleButton() {
		super("button");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(SimpleButton.class, this));
		
	}
	
	@Override
	public boolean dispatchEvent(IEvent event) {
		
		if(event.getType().equalsIgnoreCase(Event.ADDED)) {
			super.parent = (IDisplayObjectContainer) event.getTarget();
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED)) {
			super.parent = null;
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_OVER)) {
			
			if(enabled == true && overState != null) {
				if(upState != null)
					upState.setVisible(false);
				if(downState != null)
					downState.setVisible(false);
				overState.setVisible(true);
			}
			
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_DOWN)) {
			
			if(enabled == true && downState != null) {
				if(upState != null)
					upState.setVisible(false);
				if(overState != null)
					overState.setVisible(false);
				downState.setVisible(true);
			}
			
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_UP)) {
			if(enabled == true && overState != null) {
				if(upState != null)
					upState.setVisible(false);
				if(downState != null)
					downState.setVisible(false);
				overState.setVisible(true);
			}
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_OUT)) {
			if(enabled == true &&  upState != null) {
				if(overState != null)
					overState.setVisible(false);
				if(downState != null)
					downState.setVisible(false);
				upState.setVisible(true);
			}
		}
		
		return super.dispatchEvent(event);
	}
	
	public void setUpState(IDisplayObject upState) {
		this.upState = upState;
		if(super.getRenderer() != null) {
			((ISimpleButtonRenderer)super.getRenderer()).setUpState();
		}
	}
	public IDisplayObject getUpState() {
		return this.upState;
	}
	
	public void setDownState(IDisplayObject downState) {
		this.downState = downState;
		if(super.getRenderer() != null) {
			((ISimpleButtonRenderer)super.getRenderer()).setDownState();
		}
	}
	public IDisplayObject getDownState() {
		return this.downState;
	}
	
	public void setOverState(IDisplayObject overState) {
		this.overState = overState;
		if(super.getRenderer() != null) {
			((ISimpleButtonRenderer)super.getRenderer()).setOverState();
		}
	}
	public IDisplayObject getOverState() {
		return this.overState;
	}
	
	public void setDisabledState(IDisplayObject disabledState) {
		this.disabledState = disabledState;
		if(super.getRenderer() != null) {
			((ISimpleButtonRenderer)super.getRenderer()).setDisabledState();
		}
	}
	public IDisplayObject getDisabledState() {
		return this.disabledState;
	}
	
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
		if(super.getRenderer() != null) {
			((ISimpleButtonRenderer)super.getRenderer()).setEnabled();
		}
	}
	public boolean getEnabled() {
		return this.enabled;
	}
	public boolean isEnabled() {
		return this.enabled;
	}
	
	
	
	public void render() {
		super.render();
		
	}
}