/*
What is Sliding Window?
Imagine a window that moves step-by-step over an array.
Instead of checking every possible group from scratch, you:
Add the new element entering the window
Remove the element leaving the window
Update your result



Find the maximum sum of 3 consecutive numbers in this array:
[2, 1, 5, 1, 3, 2]

Brute Force (Slow Way)
Check every group of 3:
2 + 1 + 5 = 8
1 + 5 + 1 = 7
5 + 1 + 3 = 9
1 + 3 + 2 = 6

Sliding Window (Smart Way):

First window (first 3 numbers) -->[2, 1, 5] = 8

Slide Again
Second Window: --->[1,5,1]
Slide the window → move 1 step right
Remove 2, add 1
Old sum = 8
New sum = 8 - 2 + 1 = 7

Slide Again
Thrid Window: ----> [5,1,3]
Remove 1, add 3
New sum = 7 - 1 + 3 = 9

Slide Again
Fourth Window: ----> [1,3,2]
Remove 5, add 2
New sum = 9 - 5 + 2 = 6


Note :-----> [new_sum = old_sum - outgoing + incoming]
*/

function maxSumSubArray(arr, k) {
    if (arr.length < k) return null;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(windowSum, maxSum)
    }
    return maxSum
}
console.log(maxSumSubArray([2, 1, 5, 1, 3, 2], 3));

/*
You are given an array of integers nums, there is a sliding window of size k
 which is moving from the very left of the array to the very right. 
 You can only see the k numbers in the window. Each time the sliding 
 window moves right by one position.

Return the max sliding window

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

// brute force approach

function maxSlidingWindow(arr, k) {
    let result = [];
    const n = arr.length;
    for (let i = 0; i <= n - k; i++) {
        let max = arr[i];
        for (let j = 1; j < k; j++) {
            if (arr[i + j] > max) {
                max = arr[i + j]
            }
        }
        result.push(max)
    }
    return result;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))