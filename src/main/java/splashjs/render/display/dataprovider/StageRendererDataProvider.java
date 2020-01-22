package splashjs.render.display.dataprovider;

import java.util.ArrayList;

import splashjs.display.*;
import splashjs.utils.*;

import splashjs.utils.iface.*;
import splashjs.display.iface.*;
import splashjs.events.iface.*;


public class StageRendererDataProvider extends DisplayObjectContainerRendererDataProvider implements IStageRendererDataProvider {
	
	public StageRendererDataProvider(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}
	

}