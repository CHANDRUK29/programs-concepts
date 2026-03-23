Array.prototype.myReduce = function (callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Empty Array with no initial value')
    }
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this)
        }
    }
    return accumulator;
}

const num = [1, 2, 3, 4]
const sum = num.myReduce((acc, curval) => acc + curval, 0);
const product = num.myReduce((acc, curval) => acc * curval, 1);
console.log(sum)
console.log(product)