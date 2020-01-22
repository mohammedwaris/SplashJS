/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export abstract class TimerTask {
    static VIRGIN : number = 0;

    static SCHEDULED : number = 1;

    static EXECUTED : number = 2;

    static CANCELLED : number = 3;

    state : number = TimerTask.VIRGIN;

    nextExecutionTime : number;

    period : number = 0;

    handle : number;

    constructor() {
        if(this.nextExecutionTime===undefined) this.nextExecutionTime = 0;
        if(this.handle===undefined) this.handle = 0;
    }

    public abstract run();

    public cancel() : boolean {
        let success : boolean = this.state === TimerTask.SCHEDULED;
        this.state = TimerTask.CANCELLED;
        this.nextExecutionTime = 0;
        this.period = 0;
        return success;
    }

    public scheduledExecutionTime() : number {
        return this.period < 0?this.nextExecutionTime + this.period:this.nextExecutionTime - this.period;
    }
}
TimerTask["__class"] = "java.util.TimerTask";
TimerTask["__interfaces"] = ["java.lang.Runnable"];




