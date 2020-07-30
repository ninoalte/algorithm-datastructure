// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n,row=0,string='') {

  if(n === row) return;


  if(string.length === (2*n)-1){
    console.log(string);
    pyramid(n,row+1);
    return;
  }


  if(string.length <  Math.floor((2*n-1)/2) - row || string.length >  Math.floor((2*n-1)/2) + row){
    string += ' ';
  } else {
    string += '#';
  }
  pyramid(n,row,string)
}




  //
  // anzSpa=(2*n)-1;
  // for(r = 0; r<n; r++){
  //   row='';
  //   for(c=0; c<anzSpa;c++){
  //     midpoint = Math.floor(anzSpa/2)
  //     if(c <  midpoint - r || c >  midpoint + r){
  //       row += ' ';
  //     } else {
  //       row += '#';
  //     }
  //   }
  // console.log(row);
  // }
  //



module.exports = pyramid;
