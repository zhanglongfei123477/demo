//下面是一个用Promise对象实现的 Ajax 操作的例子。
const getJSON = function (url) {
    return new Promise(function (resolve, reject) {
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        client.send()
    })
}

/* getJSON("/posts.json").then(function (json) {
    console.log('Contents: ' + json);
}, function (error) {
    console.error('出错了', error);
});
 */




// Promise.prototype.finally()
// 不管promise最后的状态，在执行完then或catch指定的回调函数以后，
// 都会执行finally方法指定的回调函数。



//////--------------------------------/* then函数的传值问题 */
//////--------------------------------/* then函数的传值问题 */
//////--------------------------------/* then函数的传值问题 */
/////---------------------------------/* then函数的传值问题 */
/* new Promise((res) => { }).then(console.log("我是then"))
console.log("我是同步的")
console.log('--------'); */
// 输出：
// "我是then"
// "我是同步的"
// 思考：调用then的promise是pending状态，为什么"我是then"还是会打印？

/* new Promise((res) => { res(1) }).then(console.log("我是then"))
console.log("我是同步的")
console.log('--------'); */
// 输出：
// "我是then"
// "我是同步的"
// 思考：？？？？为什么还是会打印👇


// then方法接受两个参数（onFulfilled, onRejected）
//     If onFulfilled is not a function, it must be ignored.
//     If onRejected is not a function, it must be ignored.
// ​    文档——https://promisesaplus.com/
/* 上面说的很清楚，如果接受的参数不是一个函数，那么必须被忽略（不管他）所以会有值穿透的情况 */

/* new Promise((res) => { res(1) })
    .then(console.log("我是then"))
    .then(res => { console.log("promise的结果：" + res) })
console.log("我是同步的")
console.log('--------'); */

// 输出：
// "我是then"
// "我是同步的"
// "promise的结果：1"


// 不信再来：
/* new Promise(() => { })
    .then((function () { console.log(2) })())//中间这个then传入一个立即执行的函数效果和上面一样
    .then(res => { console.log(res) })
console.log("我是同步的") */
// 输出：
// 2
// "我是同步的"

let func = function () {
    return new Promise((resolve, reject) => {
        resolve('我是老大new Promise');
    });
};

let cb = function () {
    return '我是回调函数的返回值';
}

// 1.
/* func().then(function () {
    return cb();//这一句等同于 return '我是回调函数的返回值'
}).then(resp => {
    console.warn(resp);  // 输出 '我是回调函数的返回值'
    console.warn('1 =========<');
}); */
//我是回调函数的返回值
//1 =========<

// 2.
/* func().then(function () {
    cb();//在这个函数里面只是执行了一下cb函数，但是没有返回任何东西：所以默认返回undefined
    return undefined
}).then(resp => {
    console.warn(resp);// 输出： undefined
    console.warn('2 =========<');
}); */
//undefined
//2 =========<

// 3.
/* func()
    .then(cb())// 这个then里面传入的相当于是cb函数的返回值 '我是回调函数的返回值'，所以发生值穿透
    .then(resp => {
        console.warn(resp); // 值穿透 ——>  输出：'我是老大new Promise'
        console.warn('3 =========<');
    }); */
//我是老大new Promise
//3 =========<

// 4. 
func().then(cb)// 这里的then里面传入的是一个函数，而不是一个值，所以内部会对这个函数进行一个封装，返回'我是回调函数的返回值'
    .then(resp => {
        console.warn(resp); //输出：'我是回调函数的返回值'
        console.warn('4 =========<');
    });
//我是回调函数的返回值
//4 =========<







