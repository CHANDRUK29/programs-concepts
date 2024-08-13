// climbing staircase solution

function climb(n) {
  let noOfWays = [1, 2]

  for (let i = 2; i < n; i++) {
    noOfWays[i] = climb(n - 1) + climb(n - 2)
  }
  return noOfWays[n-1]
}

console.log(climb(4))
