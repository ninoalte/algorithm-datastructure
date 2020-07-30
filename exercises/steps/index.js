// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n, row = 0, stair='') {

  if (n === row) return;

  if (n === stair.length){
    console.log(stair);
    steps(n, row+1);
    return;
  }


const add = stair.length <= row ? '#':' ';

  steps(n, row, stair+add);

  }


// function steps(n) {
//
//
//
//   for(r=0;r<n;r++){
//     string='';
//     for(c=0;c<n;c++){
//       if(r < c){
//         string +=' ';
//       } else {
//         string += '#';
//       }
//
//     }
//     console.log(string)
//   }
//   }






// function steps(n, e = 0) {
//   if (!n) return;
//
//   steps(n-1,e += 1);
//
//   console.log('#'.repeat(n)+' '.repeat(e-1))
//
//
//
// }
module.exports = steps;
