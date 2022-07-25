const pipe = function (...fns) {
    return function (param) {
        return fns.reduce((left, right) => {
            return right(left)
        }, param)
    }
}

const take = v => v * 1
const add = v => v + 2
const reduct = v => v - 3
const res = pipe(take, add, reduct)
console.log(res(4)) //3 take(add(reduct(4)))