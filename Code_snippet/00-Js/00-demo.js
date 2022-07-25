var n = 5;
var str = 'rbrbb';

const sum = (str) => {
    let red = 0;
    let blue = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'r') {
            red++;
        } else {
            blue++
        }
    }
    return Math.min(red, blue)
}

let res = str.length;

for (let i = 0; i < str.length; i++) {
    let left = sum(str.slice(0, i));
    let right = sum(str.slice(i));
    res = Math.min(res, left + right)
}
console.log(res);