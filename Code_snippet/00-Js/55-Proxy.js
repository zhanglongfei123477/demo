let data = {
    test: 'hello world'
}

const obj = new Proxy(data, {
    get(target, p, receiver) {
        return target[p]
    },
    set(target, p, value, receiver) {
        target[p] = value
    }
})

console.log(obj.test);
obj.test = 123;
console.log(obj.test);