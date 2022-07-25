function once(fn) {
    let done = false;
    return function (...args) {
        if (!done) {
            done = true;
            console.log(this);//window
            fn.call(this, ...args)
        }
    }
}
let pay = once(function (money) {
    console.log(money);
})
pay(100);//100
pay(100);
pay(100);