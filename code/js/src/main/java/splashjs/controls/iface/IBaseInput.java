package splashjs.controls.iface;

public interface IBaseInput extends IBaseText {

	public void setPlaceHolderText(String placeHolderText);
	public String getPlaceHolderText();
	
	public void setMaxChars(int maxChars);
	public int getMaxChars();
	
	public int getSelectionBeginIndex();
	public int getSelectionEndIndex();
	
	public void setSelection(int beginIndex, int endIndex);
	
	public void setEditable(boolean editable);
	public boolean getEditable();
	public boolean isEditable();
}