//recursion Problems

// fibonacci using recursion & dp
function fibonacci(n, dp) {
  if (n == 1)
    return 0
  if (n == 2)
    return 1
  let key = n.toString()
  if (dp[key] != undefined)
    return dp[key]
  let op = fibonacci(n - 1, dp) + fibonacci(n - 2, dp)
  dp[key] = op
  return op
}
let s = Date.now()
console.log(fibonacci(100, {}))
let e = Date.now()
console.log(e - s)



function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

console.log(factorial(8))



function sumOfArray(arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1))
}

console.log(sumOfArray([1, 2, 3, 4, 5]))

