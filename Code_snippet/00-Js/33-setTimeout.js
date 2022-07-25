//setTimeout实现setInterval

function like() {
    console.log('zlf');
}
newInterval(like, 1000);

function newInterval(func, delay) {
    function inside() {
        func();
        setTimeout(inside, delay)
    }
    setTimeout(inside, delay)
}





//setInterval的一个常见用途是实现轮询。下面是一个轮询 URL 的 Hash 值是否发生变化的例子。

var hash = window.location.hash;
var hashWatcher = setInterval(function () {
    if (window.location.hash != hash) {
        updatePage();
    }
}, 1000);

/* setInterval指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的时间。
因此实际上，两次执行之间的间隔会小于指定的时间。比如，setInterval指定每 100ms 执行一次，
每次执行需要 5ms，那么第一次执行结束后95毫秒，第二次执行就会开始。
如果某次执行耗时特别长，比如需要105毫秒，那么它结束后，下一次执行就会立即开始。

为了确保两次执行之间有固定的间隔，可以不用setInterval，而是每次执行结束后，
使用setTimeout指定下一次执行的具体时间。 */
var i = 1;
var timer = setTimeout(function f() {
    // ...
    timer = setTimeout(f, 2000);
}, 2000);

//上面代码可以确保，下一次执行总是在本次执行结束之后的2000毫秒开始。


/* setTimeout和setInterval函数，都返回一个整数值，表示计数器编号。
将该整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器。 */
// setTimeout和setInterval返回的整数值是连续的，
// 也就是说，第二个setTimeout方法返回的整数值，将比第一个的整数值大1。

function f() { }
setTimeout(f, 1000) // 10
setTimeout(f, 1000) // 11
setTimeout(f, 1000) // 12


// 利用这一点，可以写一个函数，取消当前所有的setTimeout定时器。

(function () {
    // 每轮事件循环检查一次
    var gid = setInterval(clearAllTimeouts, 0);

    function clearAllTimeouts() {
        var id = setTimeout(function () { }, 0);
        while (id > 0) {
            if (id !== gid) {
                clearTimeout(id);
            }
            id--;
        }
    }
})();
//上面代码中，先调用setTimeout，得到一个计算器编号，然后把编号比它小的计数器全部取消。