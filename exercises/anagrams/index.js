// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var a = 'hello djijijij'.replace(/[\W]/g,'').toLowerCase().split('').sort();
  sortA= stringA.replace(/[\W]/).sort();
  sortB= stringB.sort();


}

// function anagrams(stringA, stringB) {
//   var mapA= charMap(stringA);
//   var mapB = charMap(stringB);
//
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false
//   }
//
//  for(char in mapA){
//
//    if (mapA[char] !== mapB[char]){
//      return false;
//    }
//
//  }
//    return true
//
//  }
//
//
//
//
//   //helper functions
//   function charMap(string){
//     var toBeFilled ={};
//     for(char of string){
//       toBeFilled[char] = toBeFilled[char] + 1 || 1
//     }
//     return toBeFilled;
//   }

module.exports = anagrams;
