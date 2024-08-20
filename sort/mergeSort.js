// merge sort logics

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2)
  let leftArr = array.slice(0, mid);
  let rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArray, rightArray) {
  let sortedArray = []
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift())
    } else {
      sortedArray.push(rightArray.shift())
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray]
}
console.log(mergeSort([22, 18, -1, 0, -6, 4, 20, 8]))
console.log(mergeSort(["a", "n", "a", "g", "r", "a", "m"]))
