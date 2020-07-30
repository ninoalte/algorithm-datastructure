// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(n) {
order={};
  max = {};



  for(let char of n){
    max[char] =  max[char] +1 ||  1
  }

console.log(max);

highest = 0;
 for (one in max){

  if(max[one] > highest){
        highest=max[one];
        order={};
      //  order.push({[one]:max[one]}
      order[one] = max[one]
    }else if(max[one] == highest)
    {
    //  order.push({[one]:max[one]})
    order[one] = max[one]
     };
 };
  return Object.keys(order)[0]
};
module.exports = maxChar;
