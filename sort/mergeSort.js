// merge sort logics


//need to fix

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2)
    const leftArr = array.slice(0, mid)
    const rightArr = array.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))

    function merge(leftArray, rightArray) {
        const sortedArr = []
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) {
                sortedArr.push(leftArr.shift())
            } else {
                sortedArr.push(rightArr.shift())
            }
        }
        return [...sortedArr, ...leftArr, ...rightArr]
    }
}

console.log(mergeSort([55, 30, 8, 1, -5, 22, 17, 12]))