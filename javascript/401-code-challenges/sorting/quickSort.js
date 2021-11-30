'use strict';

function position(array, left, right ) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;

}

function 