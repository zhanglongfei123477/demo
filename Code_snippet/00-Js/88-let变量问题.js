fn.apply(null, { length: 3 });
function fn() {
    console.log(this);   // window
    console.log(Array.prototype.slice.apply(arguments));
    // [undefined,undefined,undefined] 伪数组
}



/* console.log(name);
const name = zhangsan; */
//Cannot access 'name' before initialization


const p1 = { name: 'zhangsan' };
const p2 = { name: 'lisi' };
const p3 = 'll';
const obj = {};
obj[p1] = 'xxx';
obj[p2] = 'yyy';
obj[p3] = 'zzz';
console.log(obj);//{[object Object]: 'yyy'}
console.log(obj[p1]);//yyy
console.log(obj[p2]);//yyy
console.log(obj[p3]);//zzz



/* let fun = function () {
    console.log(this);
}

let obj = { fun: fun }
let fun1 = obj.fun;
fun1() */
// window



/* let fun = function () {
    console.log(this);
}
let obj = {}
obj.fun = fun;
obj.fun()  */
//fun

/* let obj = {
    fun() {
        console.log(this)
    }
}
let fun = obj.fun;
fun() */
//--> 打印出什么呢  window


for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

//5 5 5 5 5