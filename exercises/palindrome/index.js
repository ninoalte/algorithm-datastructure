// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//solution for the course

function palindrome(str) {

  function recursive(str){
//    console.log('hello') just a test to show on playcode.io if it is called
  if(str.length<2) return true;

  let subset = str.slice(1,-1);


  if(str.charAt(0) === str.charAt(str.length-1)){
     return recursive(subset)
  } else {
        return false;

  };
};
return recursive(str)
};





// function palindrome(str) {
//   return str.split('').every((char,i,str)=>str[i] === str[str.length-i-1]);
//
// };


// function palindrome(str) {
//
// //arr= arr.replace(/[^a-z]|\s+/g, '');
// brr= str.split('').reduce((rev,char)=>char + rev,'');
//
// return str===brr ? true : false;
//
// }

module.exports = palindrome;

// for arr='A man, a plan, a canal Panama'; solution for The daily bits
// arr= arr.toLowerCase().replace(/[^a-z]|\s+/g, '');
// brr= arr.split('').reduce((rev,char)=>char + rev,'')
//
// return arr===brr ? true : false;
//
// }
