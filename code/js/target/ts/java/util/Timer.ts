/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { TimerTask } from './TimerTask';

export class Timer {
    static nextSerialNumber : number = 0;

    /*private*/ name : string;

    timeouts : Array<TimerTask> = <any>(new Array<any>());

    intervals : Array<TimerTask> = <any>(new Array<any>());

    public constructor(name? : any, daemon? : any) {
        if(((typeof name === 'string') || name === null) && ((typeof daemon === 'boolean') || daemon === null)) {
            let __args = arguments;
            if(this.name===undefined) this.name = null;
            this.timeouts = <any>(new Array<any>());
            this.intervals = <any>(new Array<any>());
            if(this.name===undefined) this.name = null;
            (() => {
                this.name = name;
            })();
        } else if(((typeof name === 'string') || name === null) && daemon === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let daemon : any = true;
                if(this.name===undefined) this.name = null;
                this.timeouts = <any>(new Array<any>());
                this.intervals = <any>(new Array<any>());
                if(this.name===undefined) this.name = null;
                (() => {
                    this.name = name;
                })();
            }
        } else if(((typeof name === 'boolean') || name === null) && daemon === undefined) {
            let __args = arguments;
            let daemon : any = __args[0];
            {
                let __args = arguments;
                {
                    let __args = arguments;
                    let name : any = "Timer-" + ++Timer.nextSerialNumber;
                    let daemon : any = true;
                    if(this.name===undefined) this.name = null;
                    this.timeouts = <any>(new Array<any>());
                    this.intervals = <any>(new Array<any>());
                    if(this.name===undefined) this.name = null;
                    (() => {
                        this.name = name;
                    })();
                }
            }
        } else if(name === undefined && daemon === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let name : any = "Timer-" + ++Timer.nextSerialNumber;
                let daemon : any = true;
                if(this.name===undefined) this.name = null;
                this.timeouts = <any>(new Array<any>());
                this.intervals = <any>(new Array<any>());
                if(this.name===undefined) this.name = null;
                (() => {
                    this.name = name;
                })();
            }
        } else throw new Error('invalid overload');
    }

    public schedule$java_util_TimerTask$long(task : TimerTask, delay : number) {
        if(delay < 0) {
            throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        } else {
            this.schedule$java_util_TimerTask$java_util_Date(task, new Date(/* currentTimeMillis */Date.now() + delay));
        }
    }

    public schedule$java_util_TimerTask$java_util_Date(task : TimerTask, time : Date) {
        task.nextExecutionTime = time.getTime();
        task.handle = (<number>window.setTimeout((() => {
            if(task.state !== TimerTask.CANCELLED) {
                task.run();
                task.state = TimerTask.EXECUTED;
            }
            this.timeouts.splice(this.timeouts.indexOf(task), 1);
        }), time.getTime() - /* currentTimeMillis */Date.now())|0);
        this.timeouts.push(task);
        task.state = TimerTask.SCHEDULED;
    }

    public schedule$java_util_TimerTask$long$long(task : TimerTask, delay : number, period : number) {
        if(delay < 0) {
            throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        } else {
            this.schedule$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */Date.now() + delay), period);
        }
    }

    public schedule$java_util_TimerTask$java_util_Date$long(task : TimerTask, time : Date, period : number) {
        if(period <= 0) {
            throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        } else {
            task.period = period;
            task.nextExecutionTime = time.getTime();
            task.handle = (<number>window.setTimeout((() => {
                if(task.state !== TimerTask.CANCELLED) {
                    task.run();
                    this.schedule$java_util_TimerTask$long$long(task, period, period);
                } else {
                    this.timeouts.splice(this.timeouts.indexOf(task), 1);
                }
            }), time.getTime() - /* currentTimeMillis */Date.now())|0);
            this.timeouts.push(task);
            task.state = TimerTask.SCHEDULED;
        }
    }

    public schedule(task? : any, time? : any, period? : any) : any {
        if(((task != null && task instanceof <any>TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && ((typeof period === 'number') || period === null)) {
            return <any>this.schedule$java_util_TimerTask$java_util_Date$long(task, time, period);
        } else if(((task != null && task instanceof <any>TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
            return <any>this.schedule$java_util_TimerTask$long$long(task, time, period);
        } else if(((task != null && task instanceof <any>TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && period === undefined) {
            return <any>this.schedule$java_util_TimerTask$java_util_Date(task, time);
        } else if(((task != null && task instanceof <any>TimerTask) || task === null) && ((typeof time === 'number') || time === null) && period === undefined) {
            return <any>this.schedule$java_util_TimerTask$long(task, time);
        } else throw new Error('invalid overload');
    }

    public scheduleAtFixedRate$java_util_TimerTask$long$long(task : TimerTask, delay : number, period : number) {
        if(delay < 0) {
            throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        } else {
            this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */Date.now() + delay), period);
        }
    }

    public scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task : TimerTask, time : Date, period : number) {
        if(period <= 0) {
            throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        } else {
            task.period = period;
            task.nextExecutionTime = time.getTime();
            let start : TimerTask = new Timer.Timer$0(this, task);
            this.schedule$java_util_TimerTask$java_util_Date(start, time);
            task.handle = start.handle;
        }
    }

    public scheduleAtFixedRate(task? : any, time? : any, period? : any) : any {
        if(((task != null && task instanceof <any>TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && ((typeof period === 'number') || period === null)) {
            return <any>this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, time, period);
        } else if(((task != null && task instanceof <any>TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
            return <any>this.scheduleAtFixedRate$java_util_TimerTask$long$long(task, time, period);
        } else throw new Error('invalid overload');
    }

    public cancel() {
        for(let index130=0; index130 < this.timeouts.length; index130++) {
            let task = this.timeouts[index130];
            {
                clearTimeout(task.handle);
            }
        }
        for(let index131=0; index131 < this.intervals.length; index131++) {
            let task = this.intervals[index131];
            {
                clearInterval(task.handle);
            }
        }
        this.intervals = <any>(new Array<any>());
        this.timeouts = <any>(new Array<any>());
    }

    public purge() : number {
        let newTimeouts : Array<TimerTask> = this.timeouts.filter((timerTask) => timerTask.handle !== TimerTask.EXECUTED && timerTask.handle !== TimerTask.CANCELLED);
        let newIntervals : Array<TimerTask> = this.intervals.filter((timerTask) => timerTask.handle !== TimerTask.EXECUTED && timerTask.handle !== TimerTask.CANCELLED);
        let purged : number = this.timeouts.length - newTimeouts.length + this.intervals.length - newIntervals.length;
        this.timeouts = newTimeouts;
        this.intervals = newIntervals;
        return purged;
    }
}
Timer["__class"] = "java.util.Timer";


export namespace Timer {

    export class Timer$0 extends TimerTask {
        public __parent: any;
        /**
         * 
         */
        public run() {
            if(this.task.state !== TimerTask.CANCELLED) {
                this.task.nextExecutionTime = /* currentTimeMillis */Date.now() + this.task.period;
                this.task.handle = (<number>window.setInterval((() => {
                    if(this.task.state !== TimerTask.CANCELLED) {
                        this.task.nextExecutionTime = /* currentTimeMillis */Date.now() + this.task.period;
                        this.task.run();
                    } else {
                        clearInterval(this.task.handle);
                        this.__parent.intervals.splice(this.__parent.intervals.indexOf(this.task), 1);
                    }
                }), this.task.period)|0);
                this.__parent.intervals.push(this.task);
                this.task.run();
            }
        }

        constructor(__parent: any, private task: any) {
            super();
            this.__parent = __parent;
        }
    }
    Timer$0["__interfaces"] = ["java.lang.Runnable"];


}



