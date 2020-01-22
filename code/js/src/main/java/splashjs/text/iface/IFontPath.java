package splashjs.text.iface;

public interface IFontPath {

	public IFontPath setNormalFontPath(String normalFontPath);
	public IFontPath setBoldFontPath(String boldFontPath);
	public IFontPath setItalicFontPath(String italicFontPath);
	public IFontPath setBoldItalicFontPath(String boldItalicFontPath);
	
	public String getNormalFontPath();
	public String getBoldFontPath();
	public String getItalicFontPath();
	public String getBoldItalicFontPath();
}