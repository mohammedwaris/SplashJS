package splashjs.utils;

import java.util.ArrayList;

import splashjs.utils.iface.IGradient;
import splashjs.utils.iface.IColor;

public abstract class Gradient implements IGradient {

	private ArrayList<IColor> colors = new ArrayList<IColor>();
	private boolean repeat = false;
	
	public void addColor(IColor color) {
		this.colors.add(color);
	}
	
	public void addColors(IColor... colors) {
		for(IColor color:colors) {
			this.colors.add(color);
		}
	}
	
	public ArrayList<IColor> getColors() {
		return this.colors;
	}
	
	public void setRepeat(boolean repeat) {
		this.repeat = repeat;
	}
	
	public boolean getRepeat() {
		return this.repeat;
	}
}