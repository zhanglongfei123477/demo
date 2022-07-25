/*
     请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法
     add 函数已实现，模拟异步请求后端返回一个相加后的值
   */


function add(a, b) {
    return Promise.resolve(a + b);
}



/* function sum(arr) {
    if (arr.length === 1) return arr[0];
    return arr.reduce((x, y) => Promise.resolve(x).then((x) => add(x, y)));
}

sum([1, 2, 3, 4, 5]).then(console.log) */

/* async function sum(arr) {
    let s = arr[0];
    for (let i = 1; i < arr.length; i++) {
        s = await add(s, arr[i])
    }
    return s
} 

sum([1, 2, 3, 4, 5]).then(console.log)*/

function chunk(arr, size) {
    let result = [];
    let temp = []
    arr.forEach((item) => {
        // 当临时数组为空推入结果数组
        if (temp.length === 0) {
            result.push(temp);
        }
        temp.push(item);
        if (temp.length === size) {
            temp = [];
        }
    })
    // 返回
    return result;
}

function sum(arr) {
    if (arr.length === 1) return arr[0];
    const promises = chunk(arr, 2).map(async ([x, y]) => {
        // 注意此时单数的情况
        y === undefined ? x : await add(x, y);
        return y
    });
    return Promise.all(promises).then((list) => sum(list));
}

console.log(sum([1, 3, 5]).then(console.log));

