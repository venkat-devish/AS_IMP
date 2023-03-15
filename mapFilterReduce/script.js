const nums = [1, 2, 3, 4]
console.log(nums.map((el) => el * 3))

Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this))
    }
    return newArr
}


nums.myMap((num, i, arr) => console.log(num, i, arr))

Array.prototype.myFilter = function (cb) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const res = nums.myFilter((num, i, arr) => num > 2)
console.log(res)

// const sum = nums.reduce((acc, curr) => { return acc + curr }, 0)
// console.log(sum)

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator
}

const sum = nums.myReduce((acc, curr) => { return acc + curr }, 0)
console.log(sum)




