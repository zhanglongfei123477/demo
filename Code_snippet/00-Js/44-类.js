/* function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};
//等同于
var p = new Point(1, 2); */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

console.log(Point.prototype);


/* class Point {
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}

// 等同于

Point.prototype = {
    constructor() { },
    toString() { },
    toValue() { },
}; */

//类的内部所有定义的方法，都是不可枚举的（non-enumerable）
//constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
//constructor()方法默认返回实例对象（即this）



class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'


// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
// 而是直接通过类来调用，这就称为“静态方法”。