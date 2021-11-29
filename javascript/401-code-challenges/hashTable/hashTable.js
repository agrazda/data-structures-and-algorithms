"use strict";

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  // assume key is a string
  hash(key) {
    let sum = 0;
    // loop through the string
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    console.log((sum * 599) % this.size);
    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);

    let bucket = this.map[index];
    let payload = {
      [key]: value,
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  contains(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if (bucket) {
      return true;
    } else {
      return false;
    }
  }

  find(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        }
        current = current.next;
        if (!current) {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
