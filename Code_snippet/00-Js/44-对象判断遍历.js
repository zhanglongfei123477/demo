//Object.keys()与Object.getOwnpropertyNames()、


//Object.prototype.hasOwnProperty()--不会遍历原型链、


//in与for...in—前者通吃后者获取自身和继承的可遍历属性，
//for...in和hasOwnProperty搭配可获得自身可遍历属性；


//Object.create


//Object.assign


//使用`Object.freeze(obj)` 冻结obj,就能使其内的属性不可变,但它有局限，
//就是obj对象中要是有属性是对象，
//该对象内属性还能改变，要全不可变，就需要使用递归等方式一层一层全部冻结。


//for与forEach、for...in、for...of的区别
//forEach无法中途跳出循环、break和return不能用；