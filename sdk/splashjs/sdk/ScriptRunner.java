package splashjs.sdk;

import javax.script.*;
import java.io.*;

public class ScriptRunner {

	ScriptEngineManager manager;
	ScriptEngine engine;
	
	public ScriptRunner() {
		manager = new ScriptEngineManager();
        engine = manager.getEngineByName("nashorn");
	}
	
	public void exposeObject(String name, Object object) {
		engine.put(name, object);
	}
	
	public Object runJS(String jsCode) throws ScriptException {
		Object o = engine.eval(jsCode);
		return o;
	}
	
	public void runJSFile(String path) throws FileNotFoundException, ScriptException {
		engine.eval(new FileReader(path));
	}
	


}