"use strict";

function insertionSort(arr) {
  let i, temp, j;
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
}

let arr = [8,4,23,42,16,15];
insertionSort(arr)
console.log(arr);

module.exports = {insertionSort};
