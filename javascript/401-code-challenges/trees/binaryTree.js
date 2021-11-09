'use strict';

class Node {
  constructor(value) {
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
 
  console.log(current.value);
  
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
  console.log(current.value);

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
  console.log(current.value);
}

function FindMax(node) {
  if (node == null)
  return 

  let result = node.value;
  let leftResult = FindMax(node.left);
  let rightResult = FindMax(node.right);

  if(leftResult > result)
    result = leftResult;

  if(rightResult > result)
    result = rightResult;
    
  return result;
}

let tree = new BinaryTree();

tree.root = new Node('1');
tree.root.left = new Node('2');
tree.root.left.left = new Node('3');
tree.root.left.left.left = new Node('4');
tree.root.left.left.right = new Node('5');
tree.root.right = new Node('6');
tree.root.right.right = new Node('7');
tree.root.right.right.left = new Node('8');
tree.root.right.right.right = new Node('9');

console.log('Pre Order:');
PreOrder(tree.root);
console.log('**********');
console.log('In Order:');
InOrder(tree.root);
console.log('**********');
console.log('Post Order:');
PostOrder(tree.root);
console.log('**********');
console.log('Find Max:', FindMax(tree.root));


//         1
//        / \
//       2   6
//      /     \
//     3       7
//    / \     / \
//   4   5   8   9

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
// }

//     insert(value) 
//         let newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
    

