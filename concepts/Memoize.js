// simple memoize function implementation

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}
const clumpsyProduct = (num1, num2) => {
    for (let i = 0; i < 10000000; i++) {
        return num1 * num2;
    }
}

const memoizedClumpsProduct = memoize(clumpsyProduct);

console.time('first Call')
console.log(memoizedClumpsProduct(9745, 9756))
console.timeEnd('first Call')

console.time('second Call')
console.log(memoizedClumpsProduct(8657, 9756))
console.timeEnd('second Call')