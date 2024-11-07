// Big-O = O(n)
function fibo(num) {
    let fib = [0, 1]
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;

}
console.log(fibo(10))

//recursive fibnacci
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}


// dynamic programming in fibonacci

function fib(n, dp) {
  if (n == 1) return 0
  if (n == 2) return 1
  let key = n.toString()
  if (dp[key] != undefined) return dp[key]
  let op = fib(n - 1, dp) + fib(n - 2, dp)
  dp[key] = op
  return op
}

console.log(fib(100, {}))






