
/* class Scheduler {
    constructor(max) {
        // 最大可并发任务数
        this.max = max;
        // 当前并发任务数
        this.count = 0;
        // 阻塞的任务队列
        this.queue = [];
    }

    async add(fn) {
        if (this.count >= this.max) {
            // 若当前正在执行的任务，达到最大容量max
            // 阻塞在此处，等待前面的任务执行完毕后将resolve弹出并执行
            await new Promise(resolve => this.queue.push(resolve));
        }
        // 当前并发任务数++
        this.count++;
        // 使用await执行此函数
        const res = await fn();
        // 执行完毕，当前并发任务数--
        this.count--;
        // 若队列中有值，将其resolve弹出，并执行
        // 以便阻塞的任务，可以正常执行
        this.queue.length && this.queue.shift()();
        // 返回函数执行的结果
        return res;
    }
}


// 延迟函数
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// 同时进行的任务最多2个
const scheduler = new Scheduler(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = function (time, val) {
    scheduler.add(() => {
        return sleep(time).then(() => console.log(val));
    });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4 */




class Scheduler {
    constructor(limit) {
        this.count = 0;
        this.limit = limit;
        this.queue = [];
    }
    async add(fn) {
        if (this.count >= this.limit) {
            await new Promise((resolve) => {
                this.queue.push(resolve)
            })
        }
        this.count++;
        await fn();
        this.count--;
        if (this.queue.length) {
            this.queue.shift()()
        }
    }

}

let scheduler = new Scheduler(2);
const sleep = (time, val) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, time)
    })
}

const addTask = function (time, val) {
    scheduler.add(() => {
        return sleep(time, val).then(console.log)
    })
}

addTask(1000, '1');
addTask(3000, '2');
addTask(2000, '3');
addTask(2000, '4');
// 1
// 2
// 3
// 4
