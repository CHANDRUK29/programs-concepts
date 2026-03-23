Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Arguments must be an array'))
        }

        const errors = [];
        let rejectedCount = 0;

        if (promises.length === 0) {
            return reject(new AggregateError([], 'All Promise were rejected'))
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(resolve)
                .catch((err) => {
                    errors[index] = err;
                    rejectedCount++;

                    if (rejectedCount === promises.length) {
                        return new AggregateError(errors, "All promises were rejected")
                    }
                })
        })
    })
}


const p1 = Promise.reject("Error 1");
const p2 = Promise.reject("Error 2");
const p3 = new Promise((res) => setTimeout(() => res("Success"), 100));

Promise.myAny([p1, p2, p3])
  .then(console.log) // "Success"
  .catch(console.error);