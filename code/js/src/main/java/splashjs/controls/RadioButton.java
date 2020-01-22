package splashjs.controls;

import splashjs.Global;
import splashjs.lang.iface.ISplashObject;
import splashjs.controls.iface.IRadioButton;
import splashjs.controls.iface.ILabel;
import splashjs.controls.iface.IRadioButtonGroup;
import splashjs.render.controls.iface.IRadioButtonRenderer;

public class RadioButton extends Control implements IRadioButton {

	private ILabel label;
	private IRadioButtonGroup group;
	private boolean selected = false;
	private ISplashObject value;
	
	public RadioButton() {
		super("radioButton");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(RadioButton.class, this));
	}
	
	public void setValue(ISplashObject value) {
		this.value = value;
	}
	
	public ISplashObject getValue() {
		return this.value;
	}
	
	public void setSelected(boolean selected) {
		if(this.selected != selected) {
			this.selected = selected;
			if(super.getRenderer() != null)
				((IRadioButtonRenderer)super.getRenderer()).setSelected();
		}
	}
	
	public boolean getSelected() {
		return this.selected;
	}
	
	public boolean isSelected() {
		return this.getSelected();
	}
	
	public void setGroup(IRadioButtonGroup group) {
		this.group = group;
		if(super.getRenderer() != null)
			((IRadioButtonRenderer)super.getRenderer()).setGroup();
	}
	
	public IRadioButtonGroup getGroup() {
		return this.group;
	}
	
	public void setLabel(ILabel label) {
		this.label = label;
	}
	
	public ILabel getLabel() {
		return this.label;
	}
	
	
	
	public void render() {
		super.render();
		((IRadioButtonRenderer)super.getRenderer()).setGroup();
		((IRadioButtonRenderer)super.getRenderer()).setSelected();
	}
	
}