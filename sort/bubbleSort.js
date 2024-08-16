const array = [-6, -2, 4, 20, 8]

function bubbleSort(array) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped);
  return array
}

console.log(bubbleSort(array))


function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) { 
      for (var j = 0; j < (arr.length - i - 1); j++) {
          if (arr[j] > arr[j + 1]) {
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          }
      }
  }
  console.log(arr);
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);
