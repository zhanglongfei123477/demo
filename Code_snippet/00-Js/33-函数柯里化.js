// 输入var fn= function (a,b,c){return a+b+c};curryIt(fn)(1)(2)(3);
// 输出 6；


function curryIt(fn) {
    let res = [];
    var result = function (args) {
        res.push(args);
        if (res.length < fn.length) {
            return result;
        } else {
            return fn.apply(null, res)
        }
    };
    return result;
}
var fn = function (a, b, c) { return a + b + c }
var q = curryIt(fn)(1)(2)(3);
console.log(q);



/* add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    const args = [...arguments];
    function fn() {
        args.push(...arguments);
        return fn;
    }
    fn.valueOf = function () {
        return args.reduce((left, right) => left + right)
    }
    return fn
} */
//利用的是调用toString和ValueOf隐式调用
