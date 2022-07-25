var c = function () {
    this.foo = 'bar';
    this.baz = 'bim';
}
c.prototype.bob = 'bip';


// function iterate(obj) {
//     let result = [];
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result.push(key + ':' + obj[key])
//         }
//     }
//     return result;
// }



// function iterate(obj) {
//     return Object.getOwnPropertyNames(obj).map((key) => {
//         return key + ':' + obj[key]
//     })
// }

function iterate(obj) {
    return Object.keys(obj).map((key) => {
        return key + ':' + obj[key]
    })
}
console.log(iterate(new c()));