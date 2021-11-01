'use strict';

class Node {
    constructor(value){
        this.value =value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
    // place element on top of stack
    push(value) {
        let previousTop = this.top;
        let nodeToAdd = new Node(value);
        nodeToAdd.next = previousTop;
        this.top = nodeToAdd;
      }
    // remove element from the top of the stack    
    pop() {
        let takeAway = this.top;
        this.top = takeAway.next;
        return takeAway.value;
      }
 
    // look at the top element in the stack
    peek(){
        let peak = this.top;
        return peak; 
    }
    // tell me if the stack is empty
    isEmpty(){
        if(this.top===null){
        return true;
        }else{
        return false;
        }
    }    
  }

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {

    }

    dequeue() {

    }

    peek(){

    }

    isEmpty(){
        if(this.front === null && this.back === null){
        return true;
        }else{
        return false;
        }    
    }

}
