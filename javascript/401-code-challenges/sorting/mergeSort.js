'use strict';

function mergeSort(arr) {
    if (arr.length <= 1) 
    return arr;

     let mid = Math.floor(arr.length / 2),
         left = mergeSort(arr.slice(0, mid)),
         right = mergeSort(arr.slice(mid));
   
     return merge(left, right);
   };


function merge (arr1, arr2) {
    let sorted = [];
   
     while (arr1.length && arr2.length) {
       if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
       else sorted.push(arr2.shift());
     };
   
     return sorted.concat(arr1.slice().concat(arr2.slice()));
   };
   


   let array = [8,4,23,42,16,15]

   console.log(mergeSort(array));

   module.exports = { mergeSort };