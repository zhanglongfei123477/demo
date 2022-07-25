let arr = [
    { id: 1, name: 'aa' },
    { id: 2, name: 'cc' },
    { id: 3, name: '前端开发' },
    { id: 1, name: 'web前端' }
];

let cc = arr.map(item => [item['id'], item])
const mp_1 = new Map(cc);

let item1 = [...mp_1.keys()];
let item2 = [...mp_1.values()];
let item3 = [...mp_1.entries()];
/* console.log([...mp_1.keys()]);
console.log([...mp_1.values()]);
console.log([...mp_1.entries()]);
 */

/* const unique = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()];
}
console.log(unique(arr, 'id'));

const mp_2 = new Map(arr.map(item => {
    return [item['id'], item]
}))
console.log([...mp_2.values()]) */