'use strict';


class Node {
    constructor(value, k = 0) {
        this.value = value;
        this.children = new Array(k);
    }
}

class KaryTree {
    constructor(k) {
      this.k = k;  
      this.root = null;
    }
  }

  function breadthFirst(root) {
    // have a place to store current children
    const queue = [];
    let array = [];

  
    let current = root;
    queue.unshift(root);
    while(queue.length) {
      // take a node off the queue
      current = queue.pop();
      array.push(current.value);
  
      // read it's value
      // console.log(current.value);
  
      // push all children into queue.
      for (let node of current.children) {
        queue.unshift(node);
      }
    }
      return array;
  }


    function fizzBuzz(kary) {
      let result = [];
      let i;
      console.log('***************', kary);
      for(i=0; i < kary.length; i++) {
        if((kary[i]%15)==0)
          result.push('FizzBuzz');
         else if ((kary[i]%3)==0)
          result.push('Fizz');
         else if ((kary[i]%5)==0)
          result.push('Buzz');
         else
          result.push(kary[i].toString());   
      }
      return result
    }
  let kary = new KaryTree(2);
  
  kary.root = new Node(1);
  kary.root.children.push(new Node(2), new Node(6));
  kary.root.children[0].children.push(new Node(3), new Node(5));
  kary.root.children[0].children[0].children.push(new Node(4));
  kary.root.children[1].children.push(new Node(7));
  kary.root.children[1].children[0].children.push(new Node(8), new Node(9));
  
  
  console.log(breadthFirst(kary.root));
  //Breadth Fisrt Output: 1, 2, 6, 3, 5, 7, 4, 8, 9
  console.log(fizzBuzz(breadthFirst(kary.root)));
  // fizzBuss Output: 1, 2, Fizz, Fizz, Buzz, 7, 4, 8, Fizz 

  

//         1
//        / \
//       2   6
//      / \   \
//     3   5   7
//    /       / \
//   4       8   9

