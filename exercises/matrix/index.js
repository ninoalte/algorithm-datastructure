// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  //function matrix(n){


counter=1;
startRow=0
startCol=0
endRow=n-1
endCol=n-1
outArr=[];


for(i=0;i<n;i++){
  outArr.push([]);
}

//startRow <= endRow && startCol <= endCol
while(startRow <= endRow && startCol <= endCol){
    //ich glaube es gibt 4 fälle, fall 1
      //ich glaube es gibt 4 fälle, fall 1
    for(i=startCol;i<=endCol;i++){
      outArr[startRow][i]=counter;
       counter++;
      }
      console.log(outArr)

      startRow++;

      for(i=startRow;i<=endRow;i++){
     outArr[i][endCol]=counter;
     counter++;
      }
       console.log(outArr)
      endCol--;

        for(i=endCol;i>=startCol;i--){
      outArr[endRow][i]=counter;
       counter++;
      }
       console.log(outArr)
       endRow--;

       for(i=endRow;i>=startRow;i--){
     outArr[i][startCol]=counter;
     counter++;
      }
       console.log(outArr)
       startCol++;



  }

//}
return outArr;
//matrix(3)

}

module.exports = matrix;
