Array.prototype.myMap = function (callback, thisArg) {
    //check callback is function
    if (typeof callback !== 'function') {
        throw new Error(callback + 'is not a function')
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback.call(thisArg, this[i], i, this)
        }
    }
    return result;
}

const nums = [1, 2, 3];
const squared = nums.myMap((num, idx, arr) => {
    return num * num
})

console.log(squared)