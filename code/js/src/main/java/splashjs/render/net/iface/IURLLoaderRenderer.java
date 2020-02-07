package splashjs.render.net.iface;


public interface IURLLoaderRenderer {

	public void load();
	public int getBytesTotal();
	public int getBytesLoaded();
	public Object getData();
	public void close();
}