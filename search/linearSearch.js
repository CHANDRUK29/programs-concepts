// logics of linear search

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1, 2, 45, 6, 8, 10], 10))
