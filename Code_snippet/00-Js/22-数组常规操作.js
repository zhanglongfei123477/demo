// - [ ] 数组判断----
A instanceof Array
Object.prototype.toString.call
Array.isArray
判断是否存在push等方法

// - [ ] 去重----
forEach + includes / indexOf
Set
filter + indexOf
reduce + includes

// - [ ] 合并----
concat
解构运算//[...]
遍历

// - [x] 展开----
arr.flat
arr.join().split(',').map(Number)
arr.toString().split(',').map(Number)
递归push
递归concat

// - [ ] 分块

// - [ ] 取差异

// - [ ] 创建----
Array()
Array.of()
Array.from()

// - [ ] 改变（8）----
splice//表示删除的长度
sort - reverse
pop - shift - push - unshift
copyWith
fill//数值，起始位置，长度

// - [ ] 不改变（8）

slice//浅拷贝，不包含末尾下标）
join//变成字符串，引号代表什么也没有）
tostring//有逗号，不建议使用）
concat//浅拷贝），建议用扩展运算符
indexOf
lastIndexOf
includes

// - [ ] 遍历数组（12）---

/* 
forEach、every、some、
filter、map————返回一个新数组
reduce、reduceright
find、findIndex（一个是值一个是下标，都是返回的是找到的第一个）
keys - values - entries 
*/

// - [ ] forEach与map区别-----while才是遍历中的性能霸主；

//1. 本质上——for是个关键字，属于特殊语法，forEach是个函数，两者就不是一个东西，
//如果我要“Array.prototype.forEach=console.log”也可以啊，forEach只是一个包装出来的工具 ；

//2. 语法上（常规功能使用上）——都可用于遍历，“Array.prototype.forEach”本质上就是遍历的包装
//（注意，只是Array），因为“Array.prototype.forEach”是ES5的产物，迭代器“iterator”是ES6的产物，
//很明显，前期版本forEach跟迭代器没啥关系；Map和Set的forEach它们倒是跟迭代器相关；

//3. 性能上—— 性能对比方面我们加入一个 `map` 迭代器，它与 `filter` 一样都是生成新数组。 
//for>forEach>map;

// for：for循环没有额外的函数调用栈和上下文，所以它的实现最为简单。
// forEach：对于forEach来说，它的函数签名中包含了参数和上下文，所以性能会低于 fo 循环。
// map：map 最慢的原因是因为 map 会返回一个新的数组，数组的创建和赋值会导致分配内存空间，
// 因此会带来较大的性能开销。如果将`map`嵌套在一个循环中，便会带来更多不必要的内存消耗。
// 当大家使用迭代器遍历一个数组时，如果不需要返回一个新数组却使用 map 是违背设计初衷的。
// 在我前端合作开发时见过很多人只是为了遍历数组而用 `map` 的：

// 又一题外话：“for in”是键值的遍历，属于特殊语法，“for of”是ES6的产物，它是迭代器的遍历方式，
// 也属于特殊语法，不同的是“for of”需要对遍历对象进行一次判定，即存不存在“Symbol.iterator”属性，
// 所以遍历空对象会报错，而“for in”不会；别看它们很像，它们原理可不一样