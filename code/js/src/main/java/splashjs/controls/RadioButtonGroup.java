package splashjs.controls;

import java.util.ArrayList;
import java.util.function.Consumer;

import splashjs.events.MouseEvent;
import splashjs.controls.iface.IRadioButton;
import splashjs.controls.iface.IRadioButtonGroup;
import splashjs.lang.iface.ISplashObject;
import splashjs.events.iface.IEvent;

public class RadioButtonGroup implements IRadioButtonGroup {


	private String name;
	private ArrayList<IRadioButton> radioButtons = new ArrayList<IRadioButton>();
	private ArrayList<Consumer<IEvent>> eventHandlers = new ArrayList<Consumer<IEvent>>();
	
	public RadioButtonGroup(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	
	public int getNumRadioButtons() {
		return this.radioButtons.size();
	}
	
	public ISplashObject getSelectedData() {
		return this.getSelection().getValue();
	}
	
	public void setSelection(IRadioButton selection) {
		IRadioButton radioButton = null;
		for(int i=0;i<radioButtons.size();i++){
			radioButton = radioButtons.get(i);
			if(radioButton == selection) {
				setAllSelected(false);
				radioButton.setSelected(true);
				break;
			}
		}
	}
	
	public IRadioButton getSelection() {
		IRadioButton selectedRadioButton = null;
		IRadioButton radioButton = null;
		for(int i=0;i<radioButtons.size();i++){
			radioButton = radioButtons.get(i);
			if(radioButton.getSelected() == true) {
				selectedRadioButton = radioButton;
				break;
			}
		}
		return selectedRadioButton;
	}
	
	public void addRadioButton(IRadioButton radioButton) {
		Consumer<IEvent> eventHandler = (event) -> {
			setAllSelected(false);
			((IRadioButton)event.getCurrentTarget()).setSelected(true);
		};
		
		radioButton.addEventListener(MouseEvent.CLICK, eventHandler);
		radioButton.setGroup(this);
		radioButtons.add(radioButton);
		eventHandlers.add(eventHandler);
		
	}
	
	public void removeRadioButton(IRadioButton radioButton) {
		int pos = -1;
		for(int i=0;i<radioButtons.size();i++){
			if(radioButton == radioButtons.get(i)) {
				pos = i;
				break;
			}
		}
		if(pos >= 0) {
			radioButtons.get(pos).setGroup(null);
			radioButtons.get(pos).removeEventListener(MouseEvent.CLICK, eventHandlers.get(pos));
			radioButtons.remove(pos);
			eventHandlers.remove(pos);
		}
		
		
	}
	
	private void setAllSelected(boolean selected) {
		for(int i=0;i<radioButtons.size();i++){
			radioButtons.get(i).setSelected(selected);
		}
	}
	
	
}