package splashjs.utils.iface;

import java.util.ArrayList;

public interface IGradient {

	public void addColor(IColor color);
	public void addColors(IColor... colors);
	public ArrayList<IColor> getColors();
	public void setRepeat(boolean repeat);
	public boolean getRepeat();
}