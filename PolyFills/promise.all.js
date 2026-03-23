Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"))
        }

        const results = []
        let completed = 0;

        if (promises.length === 0) {
            resolve([])
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((val) => {
                results[index] = val;
                completed++;

                if (completed === promises.length) {
                    resolve(results)
                }
            }).catch(reject)
        });
    })
}   


const p1 = Promise.resolve(1);
const p2 = new Promise((res) => setTimeout(() => res(2), 100));
const p3 = 3;

Promise.myAll([p1, p2, p3])
  .then(console.log) // [1, 2, 3]
  .catch(console.error);