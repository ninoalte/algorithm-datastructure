// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fib(n) {
  const hash = {};

  return (function slaveFib(n) {
    if (n in hash) {
      return hash[n];
    } else {
      if (n < 2) {
        return (hash[n] = n);
      }
      return (hash[n] = slaveFib(n - 1) + slaveFib(n - 2));
    }
  })(n);
}

// function slowfib(n) {
//
//    if(n<2){
//      return n;
//    }
//
//    return fib(n-1) + fib(n-2);
// }
//
// function memoize(fn){
//   console.log('hell')
// cache={}
// return function(...args){
//   if (!cache[args]){
//   return cache[args] = fn.apply(this, args)
//   } else {
//     return cache[args];
//   }
// }
// }
// const fib = memoize(slowfib)
//
// console.log(fib(50))

// const cache = {}
// function fib (n) {
//   if (n < 2) {
//     return n
//   }
//
//   if (cache[n]) {
//     return cache[n]
//   } else {
//      return cache[n] = fib(n - 1) + fib(n - 2)
//   }
// }

//
// function fib(n) {
//
//    if(n<2){
//      return n;
//    }
//
//    return fib(n-1) + fib(n-2);
// }

module.exports = fib;

// function fib(n) {
//   previous=0;
//   result=1;
//     for(i=1;i<n;i++){
//
//     result = previous + result;
//     previous = result-previous;
//
//   }
// return result;
// }
