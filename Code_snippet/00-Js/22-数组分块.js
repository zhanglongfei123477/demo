function chunk(arr, size) {
    let res = [];
    let temp = [];
    arr.forEach((item) => {
        if (temp.length === 0) {
            res.push(temp);
        }
        temp.push(item);
        if (temp.length === size) {
            temp = [];
        }
    })
    return res
}

let arr = [1, 2, 3, 5, 6, 3, 9];
console.log(chunk(arr, 3));