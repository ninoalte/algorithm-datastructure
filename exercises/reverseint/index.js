// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//

function reverseInt(n){
  var reverse = 0;
  while (n != 0) {
    reverse = (reverse * 10) + (n % 10);
    n = parseInt(n / 10); //without parseInt, JS will result this division as float.
  }
  return reverse;
}

// function reverseInt(n) {
//
//
//    //console.log(sign)
//
//    reversedString= n.toString().split('').reduce((start, next)=> next + start);
//    //console.log(typeof(nan))
//    num = parseInt(reversedString)
//
//
//    return num * Math.sign(n);
//     //console.log(num)
//
// }
//
// module.exports = reverseInt;
