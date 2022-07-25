Promise.Myresolve = function (val) {
    return new Promise((resolve, reject) => {
        resolve(val)
    })
};

Promise.Myreject = function (val) {
    return new Promise((resolve, reject) => {
        reject(val)
    })
};

Promise.myFinally = function (cb) {//cb就是要共同执行的逻辑
    return this.then(//谁调用finally，this就是谁
        value => Promise.resolve(cb()),//不管调用finally的promise是什么状态都会执行这个cb
        error =>//不管调用finally的promise是什么状态都会执行这个cb
            Promise.resolve(cb())
    );
};
/* let pp = new Promise((resolve, reject) => resolve(2));
pp.finally(() => {
    console.log("finally");
})
pp.myFinally(() => {
    console.log("myFinally");
}) */


Promise.Myrace = function (promises) {
    let len = promises.length;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

Promise.Myall = function (promises) {
    let len = promises.length;
    let res = [];
    function processData(data, resolve) {
        res.push(data);
        if (res.length === len) {
            resolve(res)
        }
    };

    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            promises[i].then((data) => {
                processData(data, resolve);
            }, (err) => {
                reject(err)
            })
        }
    })
}
Promise.Myany = function (promises) {
    let len = promises.length;
    let res = [];
    function processData(data, re) {
        res.push(data);
        if (res.length === len) {
            re(res)
        }
    };

    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            promises[i].then((data) => {
                resolve(data);
            }, (err) => {
                processData(err, reject);
            })
        }
    })
}

Promise.myAllSettled = function (promises) {
    let len = promises.length;
    let res = [];
    function processData(data, re) {
        res.push(data)
        if (res.length === len) {
            re(res);
        }
    }

    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            promises[i].then((data) => {
                processData(data, resolve);
            }, (err) => {
                processData(err, reject);
            })
        }
    })
}






const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000))
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000))


const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')

/* const p12 = Promise.Myrace([p1, p2, p3])
    .then(console.log)
    .catch(console.log) */

/* const p11 = Promise.Myall([p1, p2, p3, p4, p5])
    .then(console.log)
    .catch(console.log) */

const p13 = Promise.Myany([p4, p5])
    .then(console.log)
    .catch(console.log)


/* const p14 = Promise.myAllSettled([p2, p3, p4, p5])
    .then(console.log)
    .catch(console.log) // err4 */