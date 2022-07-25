let sum = [1, 2, 2, 3, 3];
// let res = [];

/* sum.forEach((item) => {
    // 第一种 includes
    if (!res.includes(item)) {
        res.push(item)
    }
    // 第二种 indexOf
    if (res.indexOf(item) === -1) {
        res.push(item)
    }
}) */



// 第三种 巧用Set
// let res = [...new Set(sum)];
/* let res =Array.from(new Set(sum))*/


// 第四种 filter + indexOf
let res = sum.filter((item, index) => {
    return sum.indexOf(item) === index
});
console.log(res);
// 第五种 使用reduce()
//  let res = arr.reduce((left,right)=>{
//      return left.includes(right) ? left:[...left,right]
//  },[])

