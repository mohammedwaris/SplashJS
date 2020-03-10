package splashjs.render.controls.iface;



public interface IBaseInputRenderer extends IBaseTextRenderer {

	public void setPlaceHolderText(String placeHolderText);
	public String getPlaceHolderText();
	public void setMaxChars(int maxChars);
	public int getMaxChars();
	public void setSelection();
	public void setEditable(boolean editable);
	public boolean getEditable();

	
}