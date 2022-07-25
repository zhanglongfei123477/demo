
let tar = [1, 2, 3, 4, [3, 5, 9]];

// function shallowCopy(obj) {
//     if (typeof obj !== 'object') return
//     let newObj = obj instanceof Array ? [] : {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = obj[key]
//         }
//     };
//     return newObj
// }

// console.log(shallowCopy(tar));


function deepCopy(obj) {
    if (typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    };
    return newObj
}
console.log(deepCopy(tar));


function deepclone(obj) {
    let res = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = typeof obj[key] === 'object' ? deepclone(obj[key]) : obj[key];
        }
    }
    return res
}