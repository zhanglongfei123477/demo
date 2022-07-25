//promise是异步编程解决方案，
/* function send() {
    new Promise(ajaxA).then(ajaxB);
}

function ajaxA(resolve, reject) {
    console.log("ajaxA开始");
    setTimeout(function () {
        console.log("ajaxA完成");
        resolve("请求成功")
    }, 3000)
}
function ajaxB() {
    console.log("ajaxB开始");
    setTimeout(function () {
        console.log("ajaxB完成");
    }, 3000)
}
send() */


//////////////////////////////////////////////////
/* function send() {
    new Promise(ajaxA).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}
function ajaxA(resolve, reject) {
    console.log("ajaxA开始");
    setTimeout(function () {
        console.log("ajaxA完成");
        reject("请求成功")
    }, 3000)
}
send() */


///////////////////////////////////////////////////////////
/* function ajaxA(resolve, reject) {
    console.log("ajaxA开始");
    setTimeout(function () {
        console.log("ajaxA完成");
        resolve("请求成功");
        console.log("A还能执行吗");
    }, 3000)
}
function ajaxB(resolve, reject) {
    console.log("ajaxB开始");
    setTimeout(function () {
        console.log("ajaxB完成");
        resolve("请求成功")
    }, 3000)
}
function ajaxC(resolve, reject) {
    console.log("ajaxC开始");
    setTimeout(function () {
        console.log("ajaxC完成");
        resolve("请求成功")
    }, 3000)
}
new Promise(ajaxA).then(ajaxB).then((data) => {
    console.log(data);
    console.log("执行任务C");
}) */


//then方法默认返回一个新的promise对象，而且默认状态为成功,
//所以上诉方法并不能使得任务C最后执行，所以我们return一个新的promise对象
//如下所示
//方案一
/* let p1 = new Promise(ajaxA);
let p2 = p1.then(() => {
    return new Promise(ajaxB);
});
p2.then(() => {
    console.log("开始执行任务C");
}) */
//方案二
/* new Promise(ajaxA).then(() => {
    return new Promise(ajaxB);
}).then(() => {
    return new Promise(ajaxB)
}).then(() => {
    console.log("执行任务C");
}) */
/////////////////////////////////////////////////
//是否执行下一个任务不是依靠resolve，而是依靠那个状态
//下列执行过程中如果p2中不返回一个新的promise的话，b和
//c的顺序就不得而知了
/* let p1 = new Promise((resolve) => {
    console.log("a");
    resolve();
})
let p2 = p1.then(() => {
    return new Promise((resolve) => {
        console.log("b");
        resolve()
    })
})
p2.then(() => {
    console.log("c");
}) */
///////////////////////////////////////////////
/* function ajaxA(resolve, reject) {
    console.log("ajaxA开始");
    setTimeout(function () {
        console.log("ajaxA完成");
        resolve("请求成功")
    }, 3000)
}

function ajaxB(resolve, reject) {
    console.log("ajaxB开始");
    setTimeout(function () {
        console.log("ajaxB完成");
        resolve("请求成功")
    }, 3000)
}
function ajaxC(resolve, reject) {
    console.log("ajaxC开始");
    setTimeout(function () {
        console.log("ajaxC完成");
        resolve("请求成功")
    }, 3000)
}

function D() {
    console.log("D完成");
    console.log("D结束");
} */
//all方法即是三个异步方法全部结束的时候才执行D方法
/* let p1 = new Promise(ajaxA);
let p2 = new Promise(ajaxB);
let p3 = new Promise(ajaxC);
Promise.all([p1, p2, p3]).then(D) */
//race方法是三个方法有一个执行完就执行D方法
/* let p1 = new Promise(ajaxA);
let p2 = new Promise(ajaxB);
let p3 = new Promise(ajaxC);
Promise.race([p1, p2, p3]).then(D) */
////////////////////////////////////////////////////////////
function ajaxA() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("ajaxA");
            resolve("AAAAAAAAAAAAAAA")
        }, 3000)
    })
}
function ajaxB() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("ajaxB");
            resolve("BBBBBBBBBBBBBBBBBB")
        }, 3000)
    })
}
function ajaxC() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("ajaxC");
            resolve("CCCCCCCCCCCCCC")
        }, 3000)
    })
}
//ABC用async、await将异步代码同步化
async function test() {
    let res1 = await ajaxA();//res1拿到的就是resolve的值
    let res2 = await ajaxB();
    let res3 = await ajaxC();
    /* console.log(res1);
    console.log(res2);
    console.log(res3); */
    return res1
}
test().then(console.log)
