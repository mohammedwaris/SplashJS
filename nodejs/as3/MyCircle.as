class MyCircle {

	private var radius:Number;
	
	public MyCircle(r:Number) {
		this.radius = r;
	}
	
	public function print():void {
		trace("Circle's radius:" + this.radius);
	}
	
}