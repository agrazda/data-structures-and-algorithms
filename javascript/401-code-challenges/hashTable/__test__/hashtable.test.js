const { describe, expect, test } = require("@jest/globals")
const HashTable = require("../hashTable.js")
const leftJoin = require("../leftJoin.js")

describe("Left Join hash table", () => {
  test("Should left join two hash tables", () => {
    let table = new HashTable(300)
    table.add("fond", "enamored")
    table.add("wrath", "anger")
    table.add("diligent", "employed")
    table.add("outfil", "garb")
    table.add("guide", "usher")

    let table2 = new HashTable(300)
    table2.add("fond", "averse")
    table2.add("wrath", "delight")
    table2.add("diligent", "idle")
    table2.add("guide", "follow")
    table2.add("flow", "jam")

    expect(leftJoin(table, table2)).toMatchObject([
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["guide", "usher", "follow"],
      ["fond", "enamored", "averse"],
      ["outfil", "garb", null],
    ])
  })


//Adding a key/value to your hashtable results in the value being in the data structure

//Retrieving based on a key returns the value stored

//Successfully returns null for a key that does not exist in the hashtable

//Successfully handle a collision within the hashtable

//Successfully retrieve a value from a bucket within the hashtable that has a collision

//Successfully hash a key to an in-range value