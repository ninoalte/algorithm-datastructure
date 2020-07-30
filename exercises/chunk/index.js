// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

chunked=[];
counter=0;


  for(i=0;i<(array.length/size);i++){
       arr2= array.filter((curr, ind, arr)=>{
         return ind>=counter && ind<size+counter
       })
        chunked.push(arr2)
        counter +=size;
      }
   return chunked;
}

module.exports = chunk;

// function chunk(array,size){
//   let chunk = [];
//   while (array.length > 0) {
//     chunk.push(array.splice(0, size));
//   }
//   return chunk;
// }
