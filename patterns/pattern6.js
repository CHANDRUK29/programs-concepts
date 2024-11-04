/* print the following pattern


* * * * 1
* * * 2 1
* * 3 2 1
* 4 3 2 1
5 4 3 2 1


*/


function printPattern() {
  for (let i = 1; i <= 5; i++) {
    let str = ''
    for (let j = 5; j >= 1; j--) {
      if (j <= i) {
        str = str + " " + j

      }else{
        str = str + " " + "*"
      }
    }
    console.log(str)
  }
}

printPattern()

