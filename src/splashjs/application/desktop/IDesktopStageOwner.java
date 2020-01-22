package flashjs.application.desktop;

import flashjs.application.*;

public interface IDesktopStageOwner extends IStageOwner {
	
	public javafx.stage.Stage getNativeWindow();

}