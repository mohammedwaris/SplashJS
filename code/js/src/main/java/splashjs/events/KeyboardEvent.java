package splashjs.events;

import splashjs.events.iface.IKeyboardEvent;

public class KeyboardEvent extends Event implements IKeyboardEvent {
	
	public static final String KEY_UP = "key_up";
	public static final String KEY_DOWN = "key_down";
	public static final String KEY_PRESS = "key_press";

	private Boolean altKey;
	private Integer charCode;
	private String code;
	private Boolean ctrlKey;
	private String key;
	private Integer keyCode;
	private String location;
	private Boolean metaKey;
	private Boolean repeat;
	private Boolean shiftKey;
	private Integer which;
	
	//public KeyboardEvent(String name) {
		//super(name);
	//}
	
	public KeyboardEvent(String name, Boolean altKey, Integer charCode, String code, Boolean ctrlKey, 
						 String key, Integer keyCode, String location, Boolean metaKey, Boolean repeat, 
						 Boolean shiftKey, Integer which) {
		super(name);
		
		this.altKey = altKey;
		this.charCode = charCode;
		this.code = code;
		this.ctrlKey = ctrlKey;
		this.key = key;
		this.keyCode = keyCode;
		this.location = location;
		this.metaKey = metaKey;
		this.repeat = repeat;
		this.shiftKey = shiftKey;
		this.which = which;
	}
	
	public Boolean getAltKey() {
		return this.altKey;
	}
	
	public Integer getCharCode() {
		return this.charCode;
	}
	
	public String getCode() {
		return this.code;
	}
	
	public Boolean getCtrlKey() {
		return this.ctrlKey;
	}
	
	public String getKey() {
		return this.key;
	}
	
	public Integer getKeyCode() {
		return this.keyCode;
	}
	
	public String getLocation() {
		return this.location;
	}
	
	public Boolean getMetaKey() {
		return this.metaKey;
	}
	
	public Boolean getRepeat() {
		return this.repeat;
	}
	
	public Boolean getShiftKey() {
		return this.shiftKey;
	}
	
	public Integer getWhich() {
		return this.which;
	}
	
	public String toString() {
		String properties = "";
		properties +=	"name=" + getType() + ", " +
						"altKey=" + altKey + ", " + 
							"charCode=" + charCode + ", " +
							"code=" + code + ", " +
							"ctrlKey=" + ctrlKey + ", " +
							"key=" + key + ", " +
							"keyCode=" + keyCode +  ", " +
							"location=" + location + ", " + 
							"metaKey=" + metaKey + ", " +
							"repeat=" + repeat + ", " +
							"shifKey=" + shiftKey + ", " +
							"which=" + which;
		return "KeyboardEvent[" + properties + "]";
	}
	
}