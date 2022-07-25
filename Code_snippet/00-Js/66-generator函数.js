
/* function* f() {
    console.log('执行了！')
}

var generator = f();

setTimeout(function () {
    generator.next()
}, 2000); */

/* var ticking = true;
var clock = function () {
    if (ticking)
        console.log('Tick!');
    else
        console.log('Tock!');
    ticking = !ticking;
}
clock();
clock();
clock();
clock(); */

var clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};

let get = clock();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();
get.next();