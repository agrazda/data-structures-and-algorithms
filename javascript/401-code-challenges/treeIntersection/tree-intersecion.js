"use strict";

let HashTable = require("../hashTable/hashTable");

function tree_insertion(treeOne, treeTwo) {
  let hashTable = new HashTable();
  let sameValues = [];

  function commonValue(value) {
    hashTable.add(value.toString(), value);
  }

  treeOne.preOrder(treeOne.root, commonValue);

  function commonValueTwo(value) {
    if (hashTable.contains(value.toString())) {
      sameValues.push(value);
    }
  }

  treeTwo.preOrder(treeTwo.root, commonValueTwo);

  return sameValues;
}

