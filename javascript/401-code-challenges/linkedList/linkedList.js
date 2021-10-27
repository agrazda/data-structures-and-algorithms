"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let array = [];
    let string = "";

    if (!current) {
      return "list is empty";
    }

    while (current) {
      array.push(current.value);
      current.next;
    }

    array.forEach((index) => {
      string = string.concat("{${index}} ->");
      console.log("STRING CONCAT", string);
    });
    string = "${string}NULL";
    return string;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return head;
  }

  insertBefore(value, newValue) {
    if (!this.includes(value)) {
      return "Value not in Linked List";
    } else {
      let previousNode = null;
      let current = this.head;

      while (current.value != value) {
        previousNode = current;
        current = current.next;
      }

      let newNode = new Node(newValue);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      console.log(newNode);
      return newNode;
    }
  }

  insertAfter(value, newValue) {
    if (!this.includes(value)) {
      return "Value not in Linked List";
    } else {
      let current = this.head;
      let previousNode = this.head;

      while (current.value != value) {
        previousNode = current;
        current = current.next;
      }

      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      previousNode.next = newNode;

      console.log(newNode);
      return newNode;
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let position = 0;
    let array = [];

    while (current) {
      array.push(current.value);
      position++;
      current = current.next;
    }

    if (k >= position) {
      return "number is too high";
    }

    if (k < 0) {
      return "use a higher number";
    }

    let lastIndexPosition = position - k - 1;
    console.log(array);
    console.log("position", position);
    return array[lastIndexPosition];
  }
}
const list = new LinkedList();

list.head = new Node(10);
list.head.next = new Node(25);
list.head.next.next = new Node(2);
list.head.next.next.next = new Node(13);

console.log(list.kthFromEnd(0));

module.exports = { Node, LinkedList };
