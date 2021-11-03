"use strict";

const Queue = require("../Stacks and Queues/stacksQueues");

class Animal {
  constructor(type) {
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dog.enqueue(animal);
      return this.dog;
    } else if (animal.type === "cat") {
      this.cat.enqueue(animal);
      return this.cat;
    } else {
      console.error ("We dont like your kind here!");
    }
  }

  dequeue(pref) {
    if (pref.type === "dog") {
      this.dog.dequeue(perf);
      return this.dog;
    } else if (pref.type === "cat") {
      this.cat.dequeue(perf);
      return this.cat;
    } else {
      return null;
    }
  }
}

const animal = new animalShelter

animal.enqueue({type:"dog"});
animal.enqueue({type:"dog"});
animal.enqueue({type:"dog"});
animal.enqueue({type:"cat"});
animal.enqueue({type:"cat"});
animal.enqueue({type:"cat"});
animal.dequeue({type:"dog"});
animal.dequeue({type:"dog"});
animal.dequeue({type:"dog"});
animal.dequeue({type:"cat"});
animal.dequeue({type:"cat"});
animal.dequeue({type:"cat"});

console.log(animal)

module.exports(Animal, AnimalShelter);
