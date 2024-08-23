//Dynamic approach

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = col - 1;
  let top = 0;
  let bottom = row - 1;
  let array = [];

  while (left <= right && top <= bottom) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      array.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
      array.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left along the bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        array.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top along the left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        array.push(matrix[i][left]);
      }
      left++;
    }
  }

  return array;
};

console.log(spiralOrder([[1, 2], [3, 4]]))
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
console.log(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
