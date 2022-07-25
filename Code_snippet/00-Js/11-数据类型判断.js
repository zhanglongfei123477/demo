/* function leiXing(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1];
    return res.substr(0, res.length - 1).toLowerCase();
} */

function leiXing(obj) {
    let res = Object.prototype.toString.call(obj).split(' ')[1];
    return res.substr(0, res.length - 1).toLowerCase();
}

console.log(leiXing([]));
console.log(leiXing({}));
console.log(leiXing('zz'));


