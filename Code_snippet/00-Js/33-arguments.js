// 输入1,2,3,4
// 输出 10
function args() {
    console.log(arguments);
    let arr = [...arguments];
    let result = arr.reduce((pre, res) => {
        return pre + res
    })
    return result;
}
// console.log(args(1, 2, 3, 4));



function sidEffecting(ary) {
    ary[0] = ary[2];
}

function bar(a, b, c) {
    c = 10;
    sidEffecting(arguments);
    return a + b + c;
}
console.log(bar(1, 1, 1));

/* 实际上结果是 21。在JavaScript中，参数变量和 arguments 是双向绑定的。
改变参数变量，arguments 中的值会立即改变；
而改变 arguments 中的值，参数变量也会对应改变。 */