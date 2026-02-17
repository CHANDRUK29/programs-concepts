// Two pinters 

/*
Use it when:
✅ Array is sorted
✅ You need pairs
✅ You need to compare elements from both ends
✅ You want O(n) instead of O(n²)

✅remember this rule:
If condition too big → move right
If condition too small → move left

🧠 Structure:]

let left = 0;
let right = arr.length - 1;

while (left < right) {
    // 1. Do something with arr[left] and arr[right]

    if (condition) {
        left++;
    } else {
        right--;
    }
}

*/

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return null;
}

console.log(twoSum([1, 2, 3, 4, 6], 6)); 
