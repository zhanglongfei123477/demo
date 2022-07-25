let a = ["1", "2", "3"].map((parseInt));
console.log(a);

// 实际上返回的结果是 [1, NaN, NaN] ，
// 因为 parseInt 函数只需要两个参数 parseInt(value, radix) ，
// 而 map 的回调函数需要三个参数 callback(currentValue, index, array)。

// MDN文档中指明 parseInt 第二个参数是一个2到36之间的整数值，
// 用于指定转换中采用的基数。如果省略该参数或其值为0，则数字将以10为基础来解析。
// 如果该参数小于2或者大于36，则 parseInt 返回 NaN。
// 此外，转换失败也会返回 NaN。

// 现在来分析问题。parseInt("1", 0) 的结果是当作十进制来解析，
// 返回 1；parseInt("2", 1) 的第二个参数非法，返回 NaN；
// parseInt("3", 2) 在二进制中，"3" 是非法字符，转换失败，返回 NaN。