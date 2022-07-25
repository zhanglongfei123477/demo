// 只要部署该接口就可以完成遍历操作，接口主要供for...of消费。


// 具备接口的有Array、Map、Set、String、arguments对象、Nodelist对象。


// 默认调用接口的有对数组和Set结构解构赋值、扩展运算符、yield*、
// 还有其他任何接受数组作为参数的场合
// （for...of、Array.from()、Map()、Set()、Promise.all、Promise.race），


// 一个数据结构只要部署了Symbol.iterator属性，就视为具有Iterator接口，
//就可以用for...of遍历。


// Set、Map该如何遍历以及数据的entries、keys、values该怎么用。