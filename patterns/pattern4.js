/*
Input: CROSS
Output:

C       S
  R   S
    O
  R   S
C       S

*/
function printPattern(text) {
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (i == j || (i + j) == text.length-1) {
        process.stdout.write(`${text[i]} `)
      } else {
        process.stdout.write(`  `)
      }
    }
    console.log("")
  }

}

printPattern("12345")
