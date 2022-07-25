/* var name = 'World!';
var zz = 'zlf';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})(); */
//Goodbye Jack

//所以，上面的代码与下面这段代码是等价的：
/* var name = 'World!';
(function () {
    var name;
    if (typeof name === 'undefined') {
        name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})(); */
//Goodbye Jack

/* var name = 'Jack';
function zhixing() {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }

}

zhixing() */
//Goodbye Jack





/*
function func(arg = 10) {
    console.log(this.p);
    console.log(arg);
};
func.p = 20;
const zz = func.bind({
    p: 30
})
zz() */

//30 10

/* const obj = {
    '117': 117,
    [Symbol('935')]: 935
};
const num = 17;
const other1 = {};
const other2 = {};
obj[num] = 711;
obj[Symbol('935')] = 539;
obj[other1] = 10;
obj[other2] = 10;

console.log(obj); */

try {
    var flag = true;
    /* let flag = true; */
} catch { };

var state = false;
function func() {
    var flag;
    if (typeof flag === 'undefined') {
        console.log(1);
    }
    if (typeof state === 'undefined') {
        /*   state = 20; */
        var state = 20;
        console.log(2);
    }
}
func()


/* const obj = {
    zz() { }
};
(function func(arg = function () { }) {
    console.log(obj.zz.name);
    console.log(arg.name);

})()
 */
