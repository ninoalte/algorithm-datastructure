// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  debugger;
  return str.split('').reduce((rev,char) => char+rev,'');
}


reverse('asfd');

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
//
// }

// function reverse(str) {
// newstr='';
//   for(let char of str){
//     newstr = char + newstr;
//   }
//
//   return newstr;
// }
