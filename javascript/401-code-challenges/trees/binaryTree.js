'use strict';


class Node {
    constructer(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree {
    constructor() {
      this.root = null;
    }
  }
  
  function PreOrder(current) {
    // console.log(current.value);
    
    if (current.left) {
      PreOrder(current.left);
    }
    if (current.right) {
      PreOrder(current.right);
    }
  }
  
  function InOrder(current) {  
    if (current.left) {
      InOrder(current.left);
    }
  
    // console.log(current.value);
    
    if (current.right) {
      InOrder(current.right);
    }
  }
  
  function PostOrder(current) {  
    if (current.left) {
      PostOrder(current.left);
    }
    
    if (current.right) {
      PostOrder(current.right);
    }
    // console.log(current.value);
  }

//   let tree = new BinaryTree();

// tree.root = new Node('1');
// tree.root.left = new Node('2');
// tree.root.left.left = new Node('3');
// tree.root.left.left.left = new Node('4');
// tree.root.left.right = new Node('5');
// tree.root.right = new Node('6');
// tree.root.right.right = new Node('7');
// tree.root.right.right.left = new Node('8');
// tree.root.right.right.right = new Node('9');

// onsole.log('PreOrder');
// PreOrder(tree.root);
// console.log('----------')
// console.log('InOrder');
// InOrder(tree.root);
// console.log('----------')
// console.log('PostOrder');
// PostOrder(tree.root);

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

module.exports(Node, BinaryTree, BinarySearchTree)