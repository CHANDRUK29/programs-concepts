//String Programs

// 1) Reverse a string
function reverseStr(string) {
    let str = ''
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i]
    }
    return str;
}
console.log(reverseStr("hello"))

// 2) check palindrome or not
function palindrome(string) {
    string = string.toLowerCase();
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] != string[right]) {
            return false
        }
        return true;
    }
}
console.log(palindrome('Level'))
console.log(palindrome('Racecar'))

// 3) Count occurrence of each character in a string
function countOccurence(string) {

    let obj = {}
    for (let i = 0; i < string.length - 1; i++) {
        if (!obj[string[i]]) {
            obj[string[i]] = 1
        } else {
            obj[string[i]] += 1
        }
    }
    return obj
}

console.log(countOccurence('abcabbcdbaef'))

// 4) Find the longest word in a string
function findLargestWord(string) {
    let words = string.split(" ");
    let maxWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxWord.length) {
            maxWord = words[i]
        }
    }
    return maxWord
}
console.log(findLargestWord("Hi this is Chandru"))

//5) Count vowels and consonants in a string

function vowelsAndConsonants(string) {
    let vowels = 0;
    let consonants = 0;
    let vowel = 'aeiouAEIOU'
    for (let i = 0; i < string.length; i++) {
        if (vowel.includes(string[i])) {
            vowels++
        } else {
            consonants++
        }
    }
    return { vowels, consonants }
}
console.log(vowelsAndConsonants("iuiwibefibwwi"))

// 6) Reverse words in a sentence
function reverseWords(string) {
    return string.split(" ").reverse().join(" ");
}
console.log(reverseWords("Hi this is my chandru"))

// 7) Check whether two strings are anagrams
function twoStringAnagrams(string1, string2) {
    let str1 = string1.toLowerCase().split("").sort().join("");
    let str2 = string2.toLowerCase().split("").sort().join("");
    return str1 === str2;
}
console.log(twoStringAnagrams("listen", "silent"))
console.log(twoStringAnagrams("hello", "world"))


// 8) Convert string to title case
function stringToTitleCase(string) {
    let stringSpt = string.split(" ");
    for (let i = 0; i < stringSpt.length; i++) {
        stringSpt[i] = stringSpt[i].substring(0, 1).toUpperCase() + stringSpt[i].slice(1)
    }
    return stringSpt.join(' ');
}
console.log(stringToTitleCase("hello world from javascript"))

// 9) Remove duplicate characters from a string
function removeDuplicateFromString(string) {
    let obj = {};
    let arr = []
    let splitStr = string.split("");
    for (let i = 0; i < splitStr.length; i++) {
        if (!obj[splitStr[i]]) {
            obj[splitStr[i]] = 1;
            arr.push(splitStr[i])
        }
    }
    return arr.join('')
}
console.log(removeDuplicateFromString("abcbbdceadc"))

//10) String compression (example: aaabb → a3b2)
function stringCompression(string) {
    let obj = {}
    let sptStr = string.split("")
    for (let i = 0; i < sptStr.length; i++) {
        if (!obj[sptStr[i]]) {
            obj[sptStr[i]] = 1
        } else {
            obj[sptStr[i]] += 1
        }
    }
    let str = ''
    for (const key in obj) {
        str += key + obj[key]
    }
    return str
}
console.log(stringCompression("aaabb"))


//Array programs
// 1) Find Largest Number in an array;
function findLargestNumber(array) {
    // return Math.max(...array)
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}
console.log(findLargestNumber([1, 442, 23, 4, 5]))

// 2) find smallest number in an array
function findSmallestNumber(array) {
    // return Math.min(...array)
    let min = Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;

}
console.log(findSmallestNumber([21, 42, 23, 4, 5]))


// 3) find second largest number in an array
function secondLargestNumberInAnArray(array) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            second = largest;
            largest = array[i]
        }
    }
    return second;
}
console.log(secondLargestNumberInAnArray([11, 21, 31, 4, 5]))

// 4) Remove duplicate elements from an array
function removeDuplicateFromArray(array) {
    let obj = {};
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
            arr.push(array[i])
        }
    }
    return arr
}
console.log(removeDuplicateFromArray([1, 2, 6, 3, 1, 2, 6, 7]))

// 5) Find duplicate elements in an array
function findDuplicatesInArray(array) {
    let obj = {};
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            arr.push(array[i])
        } else {
            obj[array[i]] = 1;

        }
    }
    return arr
}
console.log(findDuplicatesInArray([1, 2, 6, 3, 1, 2, 6, 7]))

// 6) Find the sum of all elements in an array
function sumOfAllNos(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}
console.log(sumOfAllNos([1, 2, 3, 4, 5]))

// 7) Reverse an array
function reverseArray(array) {
    // return array.reverse()
    let revArr = []
    for (let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i])
    }
    return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]))


//&) Sort an array in ascending and descending order
function sortASC(array) {
    // return array.sort((a,b)=>a-b)
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}
console.log(sortASC([1, 15, 6, 2, 10, 7]))
function sortDSC(array) {
    // return array.sort((a,b)=>a-b)
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}
console.log(sortDSC([1, 15, 6, 2, 10, 7]))


// 9)Merge two arrays and remove duplicates
function mergeAndRemoveDupe(array1, array2) {
    let array = [...array1, ...array2]
    let obj = {};
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
            arr.push(array[i])
        }
    }
    return arr
}
console.log(mergeAndRemoveDupe([1, 2, 6, 3], [1, 2, 6, 7]))

// Find the missing number in an array
function findMissingNoInArr(array, n) {
    const set = new Set(array);
    const missing = [];
    for (let i = 0; i <= n; i++) {
        if (!set.has(i)) {
            missing.push(i)
        }
    }
    return missing;
}
console.log(findMissingNoInArr([1, 2, 4, 6], 6))

// Rotate an array left or right
function rotateLeft(arr, index) {
    index = index % arr.length;
    return [...arr.slice(index), ...arr.slice(0, index)]
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2));

function rotateRight(arr, index) {
    index = index % arr.length;
    return [...arr.slice(-index), ...arr.slice(0, -index)]
}
console.log(rotateRight([1, 2, 3, 4, 5], 2));


//Number Program
// 1) check whether the number is prime
function isPrimeOrNot(number) {
    if (number <= 1) return false
    if (number == 2) return true
    if (number % 2 == 0) {
        return false
    }
    return true
}
console.log(isPrimeOrNot(2))

// 2) Generate Fibonacci series
function fibonacci(n) {
    // if (n <= 1) return n;
    // return fibonacci(n - 1) + fibonacci(n - 2)
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}
console.log(fibonacci(6))

//3) Find the Factorial of the Number
function factorial(num) {
    if (num < 0) return 'Invalid Input'
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1)
}
console.log(factorial(5))

//4) Check whether a number is even or odd
function evenOrOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd"
    // if (num % 2 == 0) {
    //     return `${num} is even`
    // } else {
    //     return `${num} is odd`
    // }
}
console.log(evenOrOdd(5))

// 5) Reverse a number
function reverseNumber(num) {
    let char = ''
    while (num > 0) {
        let modulo = num % 10;
        num = Math.floor(num / 10)
        char = char + modulo
    }
    return char
}
console.log(reverseNumber(12356))

// 6) Check palindrome number
function palindromeNum(num) {
    let char = ""
    let orginal = num;
    while (num > 0) {
        let modulo = num % 10
        num = Math.floor(num / 10)
        char = char + modulo
    }
    return orginal == char
}
console.log(palindromeNum(1221))

//7) Swap two numbers without using a third variable
function swapTwoNos(num1, num2) {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return { num1, num2 }
}
console.log(swapTwoNos(5, 10))

// 8) Find sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + num % 10;
        num = Math.floor(num / 10)
    }
    return sum
}
console.log(sumOfDigits(1234))


// pattern Programming

/* Square Pattern
*****
*****
*****
*****
*****
*/
function squarePattern(n) {
    for (let i = 0; i <= n; i++) {
        console.log("*".repeat(n))
    }
}
squarePattern(5)



/* Right triangle 
*
**
***
****
*****
*/
function rightTriangle(n) {
    for (let i = 0; i <= n; i++) {
        console.log("*".repeat(i))
    }
}
rightTriangle(5)

/*
*****
****
***
**
*
*/
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log('* '.repeat(i));
  }
}

invertedTriangle(5);

/*
pattern
Input:
  Rows: 5
Output:

       *

     * * *

    * * * * *

  * * * * * * *

* * * * * * * * *

*/
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

pyramid(5);

