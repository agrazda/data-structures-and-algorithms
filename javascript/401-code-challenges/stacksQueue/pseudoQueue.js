"use strict";
const { Stack } = require("./Stacks and Queues/stacksQueues.js");

class PseudoQueue {
  stack1;
  stack2;

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue(value) {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error("Empty Queue");
    }

    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.top.value);
        this.stack1.pop();
      }
    }

    let stack2Top = this.stack2.top.value;
    this.stack2.pop();
    return stack2Top;
  }

  getstack1() {
    return this.stack1.top;
  }

  getstack2() {
    return this.stack2.top;
  }
}

let pseudoQueue = new PseudoQueue();

    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(4);
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    console.log(pseudoQueue);


