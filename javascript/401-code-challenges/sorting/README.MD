# Code Challenge 26  

## Stepping through Pseudocode  
   - We start with a method called ```isertionSort()```  
   - With this method we are essentially making 2 arrays by splitting the given array at the index  
   - The loop will check to see if the trailing number is less then the current number, if so, the values will swap, if not, it will remain in its place.
   - the loop will continue to do this until all of the values are in order from lowest to highest

![UML](./UML/CodeChallenge26.png)  


Ref: [Insertion Sort](https://www.geeksforgeeks.org/insertion-sort/)  
Ref: [Selection Sort](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-26/solutions/BLOG)  

Colaboration w/ Tray Chea, and Joe Ivans  

# Code Challenge 27    

![mergeSort](./UML/mergeSort.png)  

# Code Challenge 28  

![quickSort]()  

```ALGORITHM QuickSort(arr, left, right)
 if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)
```

```ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1
```     

```ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```    