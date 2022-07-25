// 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
/* let foo = await getFoo();
let bar = await getBar(); */
// 上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），
// 被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));

    let results = await Promise.all(promises);
    console.log(results);
}

// 或者使用下面的写法
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let promises = docs.map((doc) => db.post(doc));

    let results = [];
    for (let promise of promises) {
        results.push(await promise);
    }
    console.log(results);
}



async function logInOrder(urls) {
    for (const url of urls) {
        const response = await fetch(url);
        console.log(await response.text());
    }
}
// 上面代码确实大大简化，问题是所有远程操作都是继发。
// 只有前一个 URL 返回结果，才会去读取下一个 URL，这样做效率很差，非常浪费时间。
// 我们需要的是并发发出远程请求。

async function logInOrder(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    // 按次序输出
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }

    // Promise.all(textPromises).then(console.log)
}
//logInOrder(['http://127.0.0.1/user01', 'http://127.0.0.1/user02', 'http://127.0.0.1/user03', 'http://127.0.0.1/user04'])
// 上面代码中，虽然map方法的参数是async函数，
// 但它是并发执行的，因为只有async函数内部是继发执行，
// 外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出。

