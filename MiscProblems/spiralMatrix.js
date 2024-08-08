// Program To print the matrix in spiral structure

let arr = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
]

let rows = arr.length;
let col = arr[0].length;
let top = 0
let bottom = rows - 1
let left = 0
let right = col - 1

console.log(rows, col)

let array = []
// right
for (let i = left; i <= right; i++) {
  array.push(arr[left][i])

}
// to move top
top++
console.log(array)

//bottom
for (let j = top; j <= bottom; j++) {
  array.push(arr[j][right])
}
console.log(array)

// to left one index
right--;

//  left

for (let k = right; k >= left; k--) {
  array.push(arr[bottom][k])

}

console.log(array)

bottom--;

// up

for (let l = bottom; l >= top; l--) {
  array.push(arr[l][left])
}

console.log(array)
left++;

// right
for (let m = left; m <= right; m++) {
  array.push(arr[top][m])
}

console.log(array)

top++;

// bottom
for (let n = top; n <= bottom; n++) {
  array.push(arr[n][right])
}

console.log(array)

right--;

for (let o = right; o >= left; o--) {
  array.push(arr[bottom][o])
}

console.log(array)
bottom--;

for (let p = bottom; p >= top; p--) {
  array.push(arr[p][left])
}

console.log(array)
left++;

for (let q = left; q <= right; q++) {
  array.push(arr[top][q]);
}

console.log(array)
