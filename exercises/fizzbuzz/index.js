// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz



function fizzBuzz(n) {



    // if(!n) return;
    // fizzBuzz(n-1);
    // var s = ((n%3) ? '':'fizz')+((n%5) ? '':'buzz');
    // console.log(s || n);


  for(i=1;i<n;i++){
   fizz = !(i%3) ? "fizz" : '';
   fizz += !(i%5) ? "buzz" : '';
   console.log(fizz || i)
  }

}


module.exports = fizzBuzz;
