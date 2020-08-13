// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){


    if(!this.head){
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous;
    let node = this.head;

      while(node.next){
        previous = node;
        node = node.next;
      }
      previous.next = null;
  }

  insertLast(data){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    const last = this.getLast();

    last.next = new Node(data);

  }

  getAt(index){

    let counter = 0;
    let node = this.head;
    while (node) {

     //fehler im
      if (counter === index) {
        return node;

      }
        node = node.next;
      counter++;

    }
    return null;


  }

  removeAt(index){

  //zuerst im Falle von Index== 0 löschen

  if(!this.head){
    return;
  }

    if (index==0){this.removeFirst(); return;};

    let previous;

    previous = this.getAt(index-1);
    const nodeToDelete = previous.next;
  //dann im Falle von Index gibt einen Node zwischen 2
  // anderen Nodes zurück (Optimalfall)
      if(nodeToDelete && nodeToDelete.next){
        previous.next = nodeToDelete.next;
      } else {
        //dann im Falle von Index entspricht letzen Node
        this.removeLast();
      }
      return;

  }

}



//---- mein code der nicht mehr funktioniert---
//
// class Node {
//   constructor(data, next = null){
//     this.data = data;
//     this.next = next;
//   }
// }
//
// class LinkedList {
//   constructor(){
//     this.head = null;
//   }
//
//   insertFirst(data){
//         this.head = new Node(data, this.head)
//   }
//   size(){
//         let counter = 0;
//         while (this.head) {
//         counter ++;
//         this.head = this.head.next
//        }
//         return counter;
//   }
//
//   getFirst(){
//     return this.head;
//   }
//
//   getLast(){
//     while(this.head){
//       if(!this.head.next){
//         return this.head
//       }
//       this.head = this.head.next
//     }
//
//   }
//
//   clear(){
//     return this.head = null;
//   }
//
//   removeFirst(){
//     if(this.head){
//       this.head = this.head.next;
//     }
//
//   }
//
// }
//
//
//




module.exports = { Node, LinkedList };
