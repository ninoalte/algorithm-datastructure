// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  toBeFilled=str[0].toUpperCase();
  console.log(toBeFilled)

  for(i=1;i<str.length;i++){
    toBeFilled += str[i-1] === " " ? str[i].toUpperCase() : str[i]
   }
  return toBeFilled


// const words=[];
//
//
//   for(s of str.split(' ')){
//     words.push(s[0].toUpperCase() + s.slice(1));
//   }
// return words.join(' ');
}


//   hello = str.split(' ')
// toBeFilled=[];
//   for(h of hello){
//
//
//      h.split('').shift()
//      firstUp = h.split('').shift('a').toUpperCase()
//      //console.log(firstUp)
//      nuw = h.split('').slice(1)
//      nuw.unshift(firstUp);
//      nuw = nuw.join('')
//      toBeFilled.push(nuw)
//      //console.log(nuw)
//   }
// return toBeFilled.join(' ')
// }
module.exports = capitalize;
