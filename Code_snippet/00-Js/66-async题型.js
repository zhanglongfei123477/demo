// await 修饰的如果是Promise对象：
//可以获取Promise中返回的内容（resolve或reject的参数），且取到值后语句才会往下执行；

// 如果不是Promise对象：把这个非promise的东西当做await表达式的结果。

/* function log(time) {
    setTimeout(function () {
        console.log(time);
        return 1;
    }, time)
}
async function fun() {
    let a = await log(1000);
    let b = await log(3000);
    let c = log(2000);
    console.log(a);
    console.log(1)
}
fun(); */
// 立即输出 undefined 1
// 1秒后输出 1000
// 2秒后输出 2000
// 3秒后输出 3000




///async与promise的关系

let test = async () => {
    await new Promise((resolve, reject) => {
        resolve("success")
    });
    let result = "promise微任务执行2";
    console.log(result);
}

test().then(console.log);
console.log('000');

