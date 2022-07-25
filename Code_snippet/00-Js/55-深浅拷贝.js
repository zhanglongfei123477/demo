//1.Object.assign(target,...sources),ES6用来拷贝对象的方法
//2.slice()
//3.concat()
//4.var cloneObj = {...obj};---浅拷贝


//乞丐版JSON方法
function deepClone1(target) {
    return JSON.parse(JSON.stringify(target));
}
const obj = {
    a: 1,
    b: { m: 2 },
    c: [1, 2, 3],
    // 不能克隆方法
    d() { },
};
//首层浅拷贝，for…in可以遍历自身和继承的可遍历属性，结合has使用
const shallowClone = (target) => {
    if (typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}
//深拷贝
const deepClone = (target) => {
    if (target == null || typeof target != 'object') return target
    const result = Array.isArray(target) ? [] : {};
    for (let item in target) {
        if (target.hasOwnProperty(item)) {
            result[item] = deepClone(target[item])
        }
    }
    return result
}
