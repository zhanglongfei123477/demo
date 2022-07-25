// /////////////////////////////////////set
// //添加元素----add
// //长度--------size
// //删除某个值---delete
// //判断是否有某值----has


// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

// for (let i of s) {
//     console.log(i);
// }
// // 2 3 5 4

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// console.log(items.size); // 5


// const set_1 = new Set([1, 2, 3, 4, 4]);
// console.log([...set_1]);


// //Array.from方法可以将 Set 结构转为数组。

// const items_1 = new Set([1, 2, 3, 4, 5]);
// const array = Array.from(items);


// /* 遍历 */
// let set = new Set(['red', 'green', 'blue']);

// for (let item of set) {
//     console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.keys()) {
//     console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.values()) {
//     console.log(item);
// }
// // red
// // green
// // blue

// for (let item of set.entries()) {
//     console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]

// /////////////////////////////////////Map
// //添加元素----set
// //得到键的值---get
// //长度--------size
// //删除某个值---delete
// //判断是否有某值----has



let map = new Map();
map.set('z', 1);
map.set('z', 2);
console.log(map);
