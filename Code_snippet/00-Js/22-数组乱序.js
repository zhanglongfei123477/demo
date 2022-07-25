Array.prototype.sort = function () {
    var arr = this;
    var len = arr.length;
    var i;
    while (len) {
        i = Math.floor(Math.random() * len);
        len--;
        [arr[len], arr[i]] = [arr[i], arr[len]]
    }
    return arr
}

console.log([1, 3, 6, 8, 4, 9].sort());

//v8引擎源码中在处理sort方法时，当目标数组长度小于10时，使用插入排序，反之，使用快排；