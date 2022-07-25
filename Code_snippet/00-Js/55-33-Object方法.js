Object.getPrototypeOf()
//Object.getPrototypeOf方法返回参数对象的原型。这是获取原型对象的标准方法。
/* var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true */
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true
// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true
// 函数的原型是 Function.prototype
function f() { }
Object.getPrototypeOf(f) === Function.prototype // true



Object.setPrototypeOf
// Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。
// 它接受两个参数，第一个是现有对象，第二个是原型对象。
var a = {};
var b = { x: 1 };
Object.setPrototypeOf(a, b);
Object.getPrototypeOf(a) === b // true
a.x // 1
// 上面代码中，Object.setPrototypeOf方法将对象a的原型，设置为对象b，因此a可以共享b的属性。
//new命令可以使用Object.setPrototypeOf方法模拟。
var F = function () {
    this.foo = 'bar';
};
var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
/* 上面代码中，new命令新建实例对象，其实可以分成两步。
第一步，将一个空对象的原型设为构造函数的prototype属性（上例是F.prototype）；
第二步，将构造函数内部的this绑定这个空对象，然后执行构造函数，
使得定义在this上面的方法和属性（上例是this.foo），都转移到这个空对象上。 */



Object.create()
/* 生成实例对象的常用方法是，使用new命令让构造函数返回一个实例。但是很多时候，
只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？
JavaScript 提供了Object.create()方法，用来满足这种需求。该方法接受一个对象作为参数，
然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。 */
// 原型对象
var A = {
    print: function () {
        console.log('hello');
    }
};
// 实例对象
var B = Object.create(A);
Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
// 上面代码中，Object.create()方法以A对象为原型，生成了B对象。B继承了A的所有属性和方法。
//实际上，Object.create()方法可以用下面的代码代替。
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() { }
        F.prototype = obj;
        return new F();
    };
}
/* 如果想要生成一个不继承任何属性（比如没有toString()和valueOf()方法）的对象，
可以将Object.create()的参数设为null。 */
var obj = Object.create(null);
obj.valueOf()
// TypeError: Object [object Object] has no method 'valueOf'
// 除了对象的原型，Object.create()方法还可以接受第二个参数。
// 该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。
var obj = Object.create({}, {
    p1: {
        value: 123,
        enumerable: true,
        configurable: true,
        writable: true,
    },
    p2: {
        value: 'abc',
        enumerable: true,
        configurable: true,
        writable: true,
    }
});
// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
/* Object.create()方法生成的对象，继承了它的原型对象的构造函数。 */
function A() { }
var a = new A();
var b = Object.create(a);
b.constructor === A // true
b instanceof A // true
/* 上面代码中，b对象的原型是a对象，因此继承了a对象的构造函数A。 */




Object.prototype.isPrototypeOf()
//实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型。

var obj = new Object();
obj.__proto__ === Object.prototype
// true
obj.__proto__ === obj.constructor.prototype
// true
//获取实例对象obj的原型对象，有三种方法。
obj.__proto__
obj.constructor.prototype
Object.getPrototypeOf(obj)
// 前两种都不是很可靠。__proto__属性只有浏览器才需要部署，其他环境可以不部署。
// 而obj.constructor.prototype在手动改变原型对象时，可能会失效。



Object.getOwnPropertyNames()
//返回一个数组，成员是参数对象本身的所有属性的键名，不包含继承的属性键名。
Object.keys()
//只获取那些可以遍历的属性，使用Object.keys方法。
Object.prototype.hasOwnProperty()
//对象实例的hasOwnProperty方法返回一个布尔值，用于判断某个属性定义在对象自身，还是定义在原型链上。
//hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。
/* in */
//in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。
/* for...in */
//获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。


//为了在for...in循环中获得对象自身的属性，可以采用hasOwnProperty方法判断一下。

for (var name in object) {
    if (object.hasOwnProperty(name)) {
        /* loop code */
    }
}

//获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。

function inheritedPropertyNames(obj) {
    var props = {};
    while (obj) {
        Object.getOwnPropertyNames(obj).forEach(function (p) {
            props[p] = true;
        });
        obj = Object.getPrototypeOf(obj);
    }
    return Object.getOwnPropertyNames(props);
}



/* 对象的拷贝
如果要拷贝一个对象，需要做到下面两件事情。

确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。
下面就是根据上面两点，实现的对象拷贝函数。 */

function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
}

function copyOwnPropertiesFrom(target, source) {
    Object
        .getOwnPropertyNames(source)
        .forEach(function (propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        });
    return target;
}
/* 另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。 */

function copyObject(orig) {
    return Object.create(
        Object.getPrototypeOf(orig),
        Object.getOwnPropertyDescriptors(orig)
    );
}