// ---reverse an array without in build methods

const array = [4, 5, 62, 2, 3, 9, 0]
function revereseArr(arr) {
  let left = 0;
  let right = arr.length - 1
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
  }
  return arr;
}
console.log(revereseArr(array))

//  reverse string

function revereseStr(str) {
  let string = ''
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i]
  }
  return string
}
console.log(revereseStr("hello world"))


//  Remove duplicates in an array
function removeDuplicatesFromArray(array) {
  // return [...new Set(array)];
  let obj = {};
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
      result.push(array[i]);
    }
  }
  return result;
}
console.log(removeDuplicatesFromArray([1, 3, 4, 4, 5, 5, 6]));


// ---find duplicates of an array;
const dupArr = [1, 4, 5, 1, 5, 9, 7, 6, 1]
function findDuplicates(array) {
  let obj = {};
  let arr = []
  // for (let i = 0; i < array.length; i++) {
  //   if (obj[array[i]]) {
  //     arr.push(array[i])
  //   } else {
  //     obj[array[i]] = true
  //   }

  // }
  // return [...new Set(arr)]

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++
    } else {
      obj[array[i]] = 1
    }
  }
  for (const key in obj) {
    if (obj[key] >= 2) {
      arr.push(JSON.parse(key))
    }
  }
  return arr
}
console.log(findDuplicates(dupArr))



//--- Flatten nested Array
let flatArray = [1, 3, [12, 4, [20, 5, 7, [0, 0], 7], 5], 0, 9]
function makeArrayFlat(array) {
  // return array.flat(Infinity)
  const result = []
  array.forEach(val => {
    if (Array.isArray(val)) {
      result.push(...makeArrayFlat(val))
    } else {
      result.push(val)
    }
  });
  return result;
}

console.log(makeArrayFlat(flatArray))



//----count Vowels in a given string

function countVowels(str) {
  let vowels = "aeiouAEIOU"
  let count = 0;
  for (const val of str) {
    if (vowels.includes(val)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("He is a gentle man"))



// Anagram checker
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }
  let string1 = str1.toLowerCase();
  let string2 = str2.toLowerCase();

  let sortedStr1 = string1.split('').sort().join('')
  let sortedStr2 = string2.split('').sort().join('')
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram('Listen', 'silent'));
console.log(isAnagram('hello', 'world'));
console.log(isAnagram('Dormitory', 'Dirty room'))


// remove whitespaces in a string
function removeWhitespace(str) {

  // return str.split(' ').join('');

  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n') {
      result += str[i];
    }
  }
  return result;
}

console.log(removeWhitespace(' Hello     World! ')); // Output: 'HelloWorld!'
console.log(removeWhitespace('  JavaScript is awesome!  ')); // Output: 'JavaScriptisawesome!'



// longest substring
function longestSubString(str) {
  let maxLength = 0;
  let subString = '';
  for (let i = 0; i < str.length; i++) {
    let currSubString = '';
    for (let j = i; j < str.length; j++) {
      let char = str[j];
      if (currSubString.includes(char)) {
        break;
      }
      currSubString += char;
      maxLength = Math.max(maxLength, currSubString.length);
      if (currSubString.length > subString.length) {
        subString = currSubString;
      }
    }
  }
  return { maxLength, subString };
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring(""));


// Merge TwoArrays into single Sorted Array

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

// Example usage
const array1 = [1, 3, 5, 10];
const array2 = [2, 4, 6];
const merged = mergeSortedArrays(array1, array2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]


//Unique Characters in string

function isStringUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      return false
    } else {
      obj[str[i]] = true
    }
  }
  return true
}

console.log(isStringUnique("hello"))


//reverse a number
function reverseNumber(num) {
  let char = '';
  while (num > 0) {
    let modulo = num % 10
    num = Math.floor(num / 10)
    char += modulo
  }

  console.log(char)
}


console.log(reverseNumber(895421258562))


function maxNumInArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}

console.log(maxNumInArray([1, 50, 7, 99, 22, 55, 8]))



function isPalindrome(string) {
  let left = 0
  let right = string.length - 1;
  while (left < right) {
    if (string[left] != string[right]) {
      return false
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('madam'))
