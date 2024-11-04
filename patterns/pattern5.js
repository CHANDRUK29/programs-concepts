/* print the following pattern

 1 2 3 4 5
 2 3 4 5 1
 3 4 5 1 2
 4 5 1 2 3
 5 1 2 3 4


*/


function printPattern(num) {
  for (let i = 0; i < num; i++) {
    let str = '';
    let c = 1;
    for (let j = 1; j <= num; j++) {
      if (i + j <= num) {
        str = str + ' ' + (i + j);
      } else {
        str = str + ' ' + c;
        c++;
      }
    }
    console.log(str);
  }
}

printPattern(5);






















