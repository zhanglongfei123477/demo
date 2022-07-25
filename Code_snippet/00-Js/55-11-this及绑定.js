// 总结一下，JavaScript 语言之中，一切皆对象，运行环境也是对象，
// 所以函数都是在某个对象之中运行，this就是函数运行时所在的对象（环境）。
// 这本来并不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，
// 也就是说，this的指向是动态的，没有办法事先确定到底指向哪个对象，
// 这才是最让初学者感到困惑的地方

/* var obj = { foo: 5 };
{
    foo: {
        [[value]]: 5
        [[writable]]: true
        [[enumerable]]: true
        [[configurable]]: true
    }
} */
// 上面的代码将一个对象赋值给变量obj。JavaScript 引擎会先在内存里面，生成一个对象{ foo: 5 }，
// 然后把这个对象的内存地址赋值给变量obj。也就是说，变量obj是一个地址（reference）。
// 后面如果要读取obj.foo，引擎先从obj拿到内存地址，然后再从该地址读出原始的对象，返回它的foo属性。
// 原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。
// 举例来说，上面例子的foo属性，实际上是以下面的形式保存的。


/* var obj = { foo: function () { } };
{
    foo: {
        [[value]]: 函数的地址
      ...
    }
} */
//这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。

var obj = {
    na: 'zlf',
    foo: function () {
        console.log(this);
    }
};

obj.foo();// obj

//但是，下面这几种用法，都会改变this的指向。
// 情况一
(obj.foo = obj.foo)(); // window
// 情况二
(false || obj.foo)(); // window
// 情况三
(1, obj.foo)(); // window

// 可以这样理解，JavaScript 引擎内部，obj和obj.foo储存在两个内存地址，称为地址一和地址二。
// obj.foo()这样调用时，是从地址一调用地址二，因此地址二的运行环境是地址一，this指向obj。
// 但是，上面三种情况，都是直接取出地址二进行调用，
// 这样的话，运行环境就是全局环境，因此this指向全局环境。



/* 避免多层使用this */
//由于this的指向是不确定的，所以切勿在函数中包含多层的this
var o = {
    f1: function () {
        console.log(this);
        var f2 = function () {
            console.log(this);
        }();
    }
}

o.f1()
// Object
// Window

//因为实际执行的是下面的代码。

var temp = function () {
    console.log(this);
};

var o = {
    f1: function () {
        console.log(this);
        var f2 = temp();
    }
}
//一个解决方法是在第二层改用一个指向外层this的变量。

var o = {
    f1: function () {
        console.log(this);
        var that = this;
        var f2 = function () {
            console.log(that);
        }();
    }
}

o.f1()
// Object
// Object

/* 避免数组处理方法中的 this */
//数组的map和foreach方法，允许提供一个函数作为参数。这个函数内部不应该使用this。
var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        });
    }
}

o.f()
// undefined a1
// undefined a2


//   上面代码中，foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值。
//   原因跟上一段的多层this是一样的，就是内层的this不指向外部，而指向顶层对象。
//   解决这个问题的一种方法，就是前面提到的，使用中间变量固定this。


var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        var that = this;
        this.p.forEach(function (item) {
            console.log(that.v + ' ' + item);
        });
    }
}

o.f()
// hello a1
// hello a2
//另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。

var o = {
    v: 'hello',
    p: ['a1', 'a2'],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        }, this);
    }
}

o.f()
// hello a1
// hello a2


/* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 */
/* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 */
/* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 */
/* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 *//* 绑定 this 的方法 */
var obj = {
    value: 1
}

function fn(name, age) {
    var value = 5
    return {
        value: this.value,
        name: name,
        age: age
    }
}

// call接收多个参数，第一个为函数上下文也就是this，后边参数为函数本身的参数
// tips: a)this 参数可以传 null，当为 null 的时候，视为指向 window
//       b)函数是可以有返回值的
Function.prototype.Mycall = function (context, ...args) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

Function.prototype.Myapply = function (context, args) {
    context = context || window;
    const zlf = Symbol();
    context[zlf] = this;
    const res = context[zlf](...args);
    delete context[zlf]
    return res
}

//bind接收多个参数，第一个是bind返回值，是函数上下文的this，不会立即执行
Function.prototype.Mybind = function (context, ...args) {
    return (...newArgs) => {
        return this.call(context, ...args, ...newArgs);
    }
}

console.log(fn.Mycall(obj, 1, 2));
console.log(fn.Myapply(obj, [1, 2]));

var f = fn.Mybind(obj, 1);
console.log(f(2));

//其他应用场景

let arr = [1, 3, 6, 8, 9, 7, 5, 1, 10];
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);

console.log(max, min);


//call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。
//call方法的一个应用是调用对象的原生方法。

/* var obj = {};
obj.hasOwnProperty('toString') // false
// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true
Object.prototype.hasOwnProperty.call(obj, 'toString') // false */


//apply方法的应用
// （1）找出数组最大元素
// JavaScript 不提供找出数组最大元素的函数。结合使用apply方法和Math.max方法，就可以返回数组的最大元素。

var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) // 15

// （2）将数组的空元素变为undefined
// 通过apply方法，利用Array构造函数将数组的空元素变成undefined。

Array.apply(null, ['a', ,'b'])
// [ 'a', undefined, 'b' ]
// 空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined。
// 因此，遍历内部元素的时候，会得到不同的结果。

// 3）转换类似数组的对象
// 另外，利用数组对象的slice方法，可以将一个类似数组的对象（比如arguments对象）转为真正的数组。

Array.prototype.slice.apply({0: 1, length: 1}) // [1]
Array.prototype.slice.apply({0: 1}) // []
Array.prototype.slice.apply({0: 1, length: 2}) // [1, undefined]
Array.prototype.slice.apply({length: 1}) // [undefined]
// 上面代码的apply方法的参数都是对象，但是返回结果都是数组，这就起到了将对象转成数组的目的。
// 从上面代码可以看到，这个方法起作用的前提是，被处理的对象必须有length属性，以及相对应的数字键。






