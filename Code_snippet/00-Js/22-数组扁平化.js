//ES6原始属性

//先变字符串再split，map(Number);

//遍历递归
//不断解构
//reduce


let target = [1, [2], [3, [4, 5]]];
// 第一种：ES6
let res = target.flat(Infinity);
console.log(res);

/**第二种方式：join + split*/
let res2 = target.join(',').split(',').map(Number);
console.log(res2);

/**第三种方式： toString + split*/
let res3 = target.toString().split(',').map(Number);
console.log(res3);

//第四种：遍历递归
function flatten(arr) {
    let result = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
            //result.push(...flatten(arr[i]))
        } else {
            result.push(arr[i]);
        }
    };
    return result;
}

// 第五种：concat
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
/* console.log(flatten(target)); */


// 第六种：reduce()
function flatArr3(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? flatArr3(b) : b)
    }, [])
}



