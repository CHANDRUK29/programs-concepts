//Two Pointers Logics

//Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.
// base condition 'l' should be always less than 'r'

function twoPointers(array, target) {
  let l = 0;
  let r = array.length - 1
  while (l < r) {
    let total = array[l] + array[r]
    if (target == total) {
      return [l, r]
    } else if (total < target) {
      l++;
    } else if (total > target) {
      r--;
    }
  }
}

console.log(twoPointers([1, 2, 3, 4, 5, 6], 7))
