"use strict";

const HashTable = require('..hashTable/hashTable.js');

function leftJoin(hashMap1, hashMap2) {
  let arr = [];

  hashMap1.map.forEach((value) => {
    Object.getOwnPropertyNames(value.head.value).forEach((prop) => {
      arr.push([prop, hashMap1.get(prop), hashMap2.get(prop)]);
    });
  });

  return arr;
}
module.exports = leftJoin;
