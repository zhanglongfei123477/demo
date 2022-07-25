function key(o, level) {
    // 创建空数组用于存储每个层次的键值
    let arr = []
    // 封装一个内部函数用于递归调用
    function from(ob, l) {
        // 遍历对象ob的第 l+1 层次的所有键值
        Object.keys(ob).forEach(key => {
            // 将key值添加到 arr 中存储
            if (arr[l]) arr[l].push(key);
            else {
                arr[l] = [key]
            }
            // 这里做了一些优化，即不需要将原对象每一层都遍历出来
            if (l !== level - 1) {
                // 继续深入遍历下一层所有键名
                from(ob[key], l + 1)
            }
        })
    }
    // 从原对象的第一层开始遍历
    from(o, 0)
    // 最后直接返回我们要的那一层的键值就可以啦
    return arr[level - 1]
}