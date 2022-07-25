// async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，
// 但这时会自动转成立即 resolved 的 Promise 对象）。

/* const pp = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('zz')
        }, 2000)
    })
}

async function cc() {
    const a = await pp();
    const b = await pp();
    return b
}

console.log(cc());
cc().then(console.log) */
// Promise { <state>: "fulfilled", <value>: undefined }
// <state>: "fulfilled"
// <value>: undefined
// <prototype>: Promise.prototype { … }

// undefined




//async 函数有多种使用形式

/* 函数声明
async function foo() { }
函数表达式
const foo = async function () { };
对象的方法
let obj = { async foo() { } };
obj.foo().then()
Class 的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }
    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
}
const storage = new Storage();
storage.getAvatar('jake').then();
箭头函数
const foo = async () => { };

async function f() {
    return 'hello world';
}
f().then(v => console.log(v))
"hello world" */



///////////////////////////////////////////////////////async错误机制处理
///////////////////////////////////////////////////////async错误机制处理
///////////////////////////////////////////////////////async错误机制处理
///////////////////////////////////////////////////////async错误机制处理
// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。
// 抛出的错误对象会被catch方法回调函数接收到。

/* async function f() {
    throw new Error('出错了');
}
f().then(
    v => console.log('resolve', v),
    e => console.log('reject', e)
) */
//reject Error: 出错了



// async函数返回的 Promise 对象，必须等到内部所有await命令后面的
// Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。
// 也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。


/* async function f() {
    await Promise.reject('出错了');
    return await Promise.resolve('hello world'); // 不会执行
}

f().then(console.log).catch(console.log) */
//出错了


// 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
// 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。
// 这时可以将第一个await放在try...catch结构里面，
// 这样不管这个异步操作是否成功，第二个await都会执行。

/* async function f() {
    try {
        await Promise.reject('出错了');
    } catch (e) {
    }
    return await Promise.resolve('hello world');
}

f().then(v => console.log(v)) */
// hello world

// 另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
/* async function f() {
    await Promise.reject('出错了')
        .catch(e => console.log(e));
    return await Promise.resolve('hello world');
}

f().then(v => console.log(v)) */
// 出错了
// hello world


// const p1 = function () {
//     return new Promise((resolve, reject) => {
//         throw new Error('出错了1')
//     })
// }
// const p2 = function () {
//     return new Promise((resolve, reject) => {
//         throw new Error('出错了2')
//     })
// }
// const p3 = function () {
//     return new Promise((resolve, reject) => {
//         throw new Error('出错了3')
//     })
// }
// async function main() {
//     try {
//         const val1 = await p1();
//         console.log('zd');
//         const val2 = await p2();
//         const val3 = await p3();
//         console.log('Final: ', val3);
//     } catch (e) {
//         /*  console.log(e); */
//     }
//     return Promise.resolve('hello world');
// }

/* main().then(console.log) */
//hello world
//只要有一个错误就执行return了
//没有return就undefined





//async 函数可以保留运行堆栈。
/* const a = () => {
    b().then(() => c());
}; */
// 上面代码中，函数a内部运行了一个异步任务b()。
// 当b()运行的时候，函数a()不会中断，而是继续执行。
// 等到b()运行结束，可能a()早就运行结束了，b()所在的上下文环境已经消失了。
// 如果b()或c()报错，错误堆栈将不包括a()。

// 现在将这个例子改成async函数。

/* const a = async () => {
    await b();
    c();
}; */
//上面代码中，b()运行的时候，a()是暂停执行，上下文环境都保存着。
//一旦b()或c()报错，错误堆栈将包括a()。




