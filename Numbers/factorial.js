// logic --> 
// 0+1 =1
// 1+1 =2
// 1+2 =3
// 2+3 =5


// Big-O = O(n)
function factorial(n) {
    let val = 1
    for (let i = n; i > 0; i--) {
        val = val * i
    }
    return val
}

console.log(factorial(5))

// recursive function for factorial

function factorial(n){
  if(n ==0){
    return 1
  }
  return n * factorial(n-1)
}
