var a = {
    value: 0,
    valueOf: function () {
        this.value++;
        return this.value;
    }
}


console.log(a == 1 && a == 2);

/* let value = {
    createValue: 1,
    get a() {
        return this.createValue++
    }
}
console.log(value.a == 1 && value.a == 2 && value.a == 3) //ture */



/*
let val = 1
Object.defineProperty(global, 'a', {
    get: function () {
        return val++
    }
})

console.log(a == 1 && a == 2 && a == 3)  //ture */


// 如果一个属性的enumerable为false，下面三个操作不会取到该属性
//for...in
//Object.keys()
//JSON.stringify




/*
var obj = Object.defineProperty({}, 'p', {
    get: function () {
        return 'getter';
    },
    set: function (value) {
        console.log('setter: ' + value);
    }
});

obj.p // "getter"
obj.p = 123 // "setter: 123"

//存取其的另一种写法
// 写法二
var obj = {
    get p() {
        return 'getter';
    },
    set p(value) {
        console.log('setter: ' + value);
    }
}; */
// 上面两种写法，虽然属性p的读取和赋值行为是一样的，但是有一些细微的区别。
// 第一种写法，属性p的configurable和enumerable都为false，
// 从而导致属性p是不可遍历的；
// 第二种写法，属性p的configurable和enumerable都为true，因此属性p是可遍历的。
// 实际开发中，写法二更常用。

// 注意，取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值）。



//存取器往往用于，属性的值依赖对象内部数据的场合。

/* var obj = {
    $n: 5,
    get next() { return this.$n++ },
    set next(n) {
        if (n >= this.$n) this.$n = n;
        else throw new Error('新的值必须大于当前值');
    }
};

obj.next // 5

obj.next = 10;
obj.next // 10

obj.next = 5; */
  // Uncaught Error: 新的值必须大于当前值