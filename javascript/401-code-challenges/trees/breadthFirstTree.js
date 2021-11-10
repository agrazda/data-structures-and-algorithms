'use strict';

class Node {
    constructor(value, k = 0) {
        this.value = value;
        this.children = new Array(k); [undefined, undefined];
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
  
    let current = root;
    queue.unshift(root);
    while(queue.length) {
      // take a node off the queue
      current = queue.pop();
  
      // read it's value
      console.log(current.value);
  
      // push all children into queue.
      for (let node of current.children) {
        queue.unshift(node);
      }
    }
  }
  
  let kary = new KaryTree(2);
  
  kary.root = new Node(1);
  kary.root.children.push(new Node(2), new Node(6));
  kary.root.children[0].children.push(new Node(3), new Node(5));
  kary.root.children[0].children[0].children.push(new Node(4));
  kary.root.children[1].children.push(new Node(7));
  kary.root.children[1].children[0].children.push(new Node(8), new Node(9));
  
  
  breadthFirst(kary.root);

// Output: 1, 2, 6, 3, 5, 7, 4, 8, 9  

//         1
//        / \
//       2   6
//      / \   \
//     3   5   7
//    /       / \
//   4       8   9