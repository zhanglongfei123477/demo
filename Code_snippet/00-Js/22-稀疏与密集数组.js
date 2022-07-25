//稀疏数组
//创建一个指定长度的稀疏数组,当你遍历它时，你会发现，它并没有元素，JavaScript会跳过这些缝隙。
var arr = Array(3);
arr.forEach(item => console.log(item))
console.log(arr[0]);
console.log(arr.length);//3
console.log(Object.getOwnPropertyNames(arr));//['length']

//密集数组
//创建密集数组的技巧：
var a = Array.apply(null, Array(3));
console.log(a);//[undefined, undefined, undefined]
//上面的语句其实等同于:Array(undefined, undefined, undefined)
// 你现在可以看到数组里面有真实元素了，虽然元素的值是undefined，
// 但是你可以遍历到这些数组元素了，还可以为每个元素重新赋值：

//实际上，JavaScript并没有常规的数组，所有的数组其实就是个对象，
//只不过会自动管理一些"数字"属性和length属性罢了。

let c = Array.apply(null, Array(3)).map(function (x, i) { return i });
console.log(c);//[0,1,2]

//可以用Array(100).join("a")来创建密集数据
let d = Array(100).join("a").split('')//来创建密集数据
console.log(d.length);

//或者fill
let e = Array(100).fill('a');
console.log(e);