// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {}


// constructor(){
//   this.list = {}
//   this.end= 0
//   this.start = 0
// }
// add(item){
//   this.list[this.end++] = item
// }
//
// remove(){
//   if(this.start != this.end){
//     const item = this.list[this.start]
//     delete this.list[this.start]
//     this.start++
//     return item
//   }
//
// }
// }



// class Queue {
//   constructor() {
//     this.queue = {};
//     this.start = null;
//     this.end = null;
//   }
//
//   add(valueToAdd) {
//     const { end, start, queue } = this;
//     // just to have something here, since js have no pointers in memory
//     let newEnd = end ? end + 'q' : 'end';
//
//     queue[newEnd] = {
//       value: valueToAdd,
//       next: null,
//       prev: end,
//     };
//
//     // adding a pointer on this new element to the previous one
//     if (end) queue[end].next = newEnd;
//     // if this is a first element in queue, so need to write it to start as well
//     if (!start) this.start = newEnd;
//
//     // and now this element is a new end
//     this.end = newEnd;
//   }
//
//   remove() {
//     const { start, end, queue } = this;
//
//     // we are removing the start element, so if it's not exists, returning
//     if (!start) return start;
//
//     const { next, value } = queue[start];
//
//     // deleting start element
//     delete queue[start];
//
//     // if removed element had a pointer to the next one, will update this next element
//     if (next) {
//       // this next element have no reference to prev element, since we just removed it
//       queue[next].prev = null;
//       // and it also became a new start element
//       this.start = next;
//     } else {
//       // if there is no following item, removing a pointer to start item, since there are no items in queue
//       delete this.start;
//     }
//
//     // returning a value to pass the tests
//     return value;
//   }
// }
//


// const Queue = {
// data: [],
// addRecord: function(record){
//     this.data.unshift(record)
// },
// deleteRecord: function(){
//   this.data.pop();
// }
//
// }
// const que = Object.create(Queue)
// que.addRecord('d');
// que.addRecord('e');
// console.log(que.data)
// que.deleteRecord();
// console.log(que.data)
module.exports = Queue;
