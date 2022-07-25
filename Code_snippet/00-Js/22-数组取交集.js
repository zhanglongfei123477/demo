function diff(arr1, arr2) {
    return arr1.filter((item) => {
        return arr2.includes(item)
    })
}

console.log(diff([1, 2, 3, 5], [2, 3, 5, 6]));