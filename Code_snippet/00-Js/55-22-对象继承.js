function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('喵喵');
    };
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');

console.log(cat1.meow === cat2.meow);// false

// 上面代码中，cat1和cat2是同一个构造函数的两个实例，它们都具有meow方法。
// 由于meow方法是生成在每个实例对象上面，所以两个实例就生成了两次。
// 也就是说，每新建一个实例，就会新建一个meow方法。
// 这既没有必要，又浪费系统资源，因为所有meow方法都是同样的行为，完全应该共享。
// 这个问题的解决方法，就是 JavaScript 的原型对象（prototype）。


/* JavaScript 继承机制的设计思想
就是，原型对象的所有属性和方法，都能被实例对象共享。
也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享，
不仅节省了内存，还体现了实例对象之间的联系。 */

// 读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，
// 如果还是找不到，就到原型的原型去找。如果直到最顶层的Object.prototype还是找不到，则返回undefined。
// 如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

// 注意，一级级向上，在整个原型链上寻找某个属性，对性能是有影响的。
// 所寻找的属性在越上层的原型对象，对性能的影响越大。
// 如果寻找某个不存在的属性，将会遍历整个原型链。


/* prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。 */

function P() { }
P.prototype.constructor === P // true

//由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。
var p = new P();
p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false
//constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的


/* 另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例。 */

function Constr() { }
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true

/* instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。 */
v instanceof Vehicle
// 等同于
Vehicle.prototype.isPrototypeOf(v)
//isPrototypeOf()方法是 JavaScript 提供的原生方法，用于检查某个对象是否为另一个对象的原型


//由于任意对象（除了null）都是Object的实例，所以instanceof运算符可以判断一个值是否为非null的对象。

var obj = { foo: 123 };
obj instanceof Object // true
null instanceof Object // false
// instanceof的原理是检查右边构造函数的prototype属性，是否在左边对象的原型链上。
// 有一种特殊情况，就是左边对象的原型链上，只有null对象。这时，instanceof判断会失真。

var obj = Object.create(null);
typeof obj // "object"
obj instanceof Object // false
// 上面代码中，Object.create(null)返回一个新对象obj，它的原型是null（Object.create()的详细介绍见后文）。
// 右边的构造函数Object的prototype属性，不在左边的原型链上，因此instanceof就认为obj不是Object的实例。
// 这是唯一的instanceof运算符判断会失真的情况（一个对象的原型是null）。


// 注意，instanceof运算符只能用于对象，不适用原始类型的值。
var s = 'hello';
s instanceof String // false
undefined instanceof Object // false
null instanceof Object // false

//利用instanceof运算符，还可以巧妙地解决，调用构造函数时，忘了加new命令的问题。
function Fubar(foo, bar) {
    if (this instanceof Fubar) {
        this._foo = foo;
        this._bar = bar;
    } else {
        return new Fubar(foo, bar);
    }
}

/* 让一个构造函数继承另一个构造函数，是非常常见的需求。
这可以分成两步实现。第一步是在子类的构造函数中，调用父类的构造函数。 */

function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};
// 第一步，子类继承父类的实例
function Rectangle() {
    Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
    this.base = Shape;
    this.base();
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle  // true
rect instanceof Shape  // true


//上面代码中，子类是整体继承父类。有时只需要单个方法的继承，这时可以采用下面的写法。

ClassB.prototype.print = function () {
    ClassA.prototype.print.call(this);
    // some code
}
//上面代码中，子类B的print方法先调用父类A的print方法，再部署自己的代码。这就等于继承了父类A的print方法。


/* 多重继承 *//* 多重继承 *//* 多重继承 *//* 多重继承 *//* 多重继承 */
//JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。

function M1() {
    this.hello = 'hello';
}

function M2() {
    this.world = 'world';
}

function S() {
    M1.call(this);
    M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
//上面代码中，子类S同时继承了父类M1和M2。这种模式又称为 Mixin（混入）。

