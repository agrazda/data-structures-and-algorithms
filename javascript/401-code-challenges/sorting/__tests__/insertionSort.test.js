'use strict';

const { insertionSort } = require ('../insertionSort');

describe(' insertionSort ', () => {
    it('works', () => {
        expect(true).toBeTruthy();
    });

    it('Can sort in order from lowest to hightest', () => {
        const arr = [8,4,23,42,16,15]
        const newArray = [4,8,15,16,23,42]
        expect(insertionSort(newArray)).toBe(insertionSort(arr))
    });  
});    
    