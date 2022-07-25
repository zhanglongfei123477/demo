// 面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。
// 它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。

// 每一个对象都是功能中心，具有明确分工，可以完成接受信息、处理数据、发出信息等任务。
// 对象可以复用，通过继承机制还可以定制。因此，面向对象编程具有灵活、代码可复用、高度模块化等特点，
// 容易维护和开发，比起由一系列函数或指令组成的传统的过程式编程（procedural programming），
// 更适合多人合作的大型软件项目。

// （1）对象是单个实物的抽象。
// 一本书、一辆汽车、一个人都可以是对象，一个数据库、一张网页、一个远程服务器连接也可以是对象。
// 当实物被抽象成对象，实物之间的关系就变成了对象之间的关系，从而就可以模拟现实情况，针对对象进行编程。

// （2）对象是一个容器，封装了属性（property）和方法（method）。
// 属性是对象的状态，方法是对象的行为（完成某种任务）。
// 比如，我们可以把动物抽象为animal对象，使用“属性”记录具体是哪一种动物，
// 使用“方法”表示动物的某种行为（奔跑、捕猎、休息等等）。

// JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

// JavaScript 语言使用构造函数（constructor）作为对象的模板。
// 所谓”构造函数”，就是专门用来生成实例对象的函数。
// 它就是对象的模板，描述实例对象的基本结构。
// 一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。

// 构造函数就是一个普通的函数，但具有自己的特征和用法。

// 构造函数的特点有两个。

// 1.函数体内部使用了this关键字，代表了所要生成的对象实例。
// 3.生成对象的时候，必须使用new命令。

//////////////////////////////////////////////////////////////////////////
// new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。
// 如果忘了使用new命令，直接调用构造函数会发生什么事？

// 这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因，
// this这时代表全局对象，将造成一些意想不到的结果。

// 为了保证构造函数必须与new命令一起使用，一个解决办法是，
// 构造函数内部使用严格模式，即第一行加上use strict。
// 这样的话，一旦忘了使用new命令，直接调用构造函数就会报错。

/* function Fubar(foo, bar) {
    'use strict';
    this._foo = foo;
    this._bar = bar;
}

Fubar() */
// TypeError: Cannot set property '_foo' of undefined
// 另一个解决办法，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。
/* function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}

Fubar(1, 2)._foo // 1
(new Fubar(1, 2))._foo // 1 */

/////////////////////////////////////////////////////////
// 使用new命令时，它后面的函数依次执行下面的步骤。

// 1.创建一个空对象，作为将要返回的对象实例。
// 2.将这个空对象的原型，指向构造函数的prototype属性。
// 3.将这个空对象赋值给函数内部的this关键字。
// 4.开始执行构造函数内部的代码。
// 也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，
// 都会发生在这个空对象上。构造函数之所以叫“构造函数”，
// 就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。


// 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；
// 否则，就会不管return语句，返回this对象。

var Vehicle = function () {
    this.price = 1000;
    return { price: 2000 };
};

console.log((new Vehicle()).price);
// 2000

function getMessage() {
    return 'this is a message';
}

var msg = new getMessage();
console.log(msg);// {}
console.log(typeof msg);// "object"


function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);

//******************************************************

function myNew(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

function Person(name, age) {
    this.name = name
    console.log(this);
    this.age = age
    console.log(this);
    this.say = function () {
        console.log(this);

        console.log(this.name, this.age)
    }
    console.log(this);
    return { zz: 'zlf' }
}

const p = myNew(Person, 'zlf', 23)
console.log(p);
console.log('---');
/* p.say() */




