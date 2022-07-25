let arr1 = [1, 2];
let arr2 = [3, 4];

let res1 = arr1.concat(arr2);
console.log(res1);


let rse2 = [...arr1, ...arr2];


function concat(arr, ...args) {
    // 待合并的数组
    const result = [...arr];
    // 循环 传入的参数数组
    for (let i = 0; i < args.length; i++) {
        // 如果该项是数组则展开推入result数组
        if (Array.isArray(args[i])) {
            result.push(...args[i]);
        } else {
            // 否则直接推入
            result.push(args[i]);
        }
    }
    // 返回
    return result;
}

// 测试
const newArr = concat(arr1, 3, [4, 5], [6, 7], 8);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]


