
/*
print the pattern

*****
*****
*****
*****
*****

*/

function printPattern(rows) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      process.stdout.write(`*`)
    }
    console.log("")

  }
}

printPattern(5)
console.log("<===============================================================>")
