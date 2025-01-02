const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  // In order to find the min, we need go left and only left
  // If we go right in the left branch, we get closer to the parent node

  // rootNode is the second pointer that points to the object that is stored in memory.
  while (rootNode.left) {
    rootNode = rootNode.left;
  }

  return rootNode.val;
}

function findMaxBST (rootNode) {
  // Your code here

  while (rootNode.right) {
    rootNode = rootNode.right;
  }

  return rootNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  // This is a Binary Tree not a Binary Search Tree!
  // We need to do a queue
  // We need to keep record of the lowest because the tree not sorted
  let number = [rootNode];
  let min = null || rootNode.val;
  while (number.length) { // O(n)
    let node = number.shift(); // O(n)

    if (node.val < min) min = node.val;

    if (node.left) number.push(node.left);
    if (node.right) number.push(node.right);

  }

  return min;
} // => O(n^2)

function findMaxBT (rootNode) {
  // Your code here
  let number = [rootNode];
  let min = null || rootNode.val;

  while (number.length) { // O(n)
    let node = number.pop(); // O(1)

    if (node.val > min) min = node.val;

    if (node.left) number.push(node.left);
    if (node.right) number.push(node.right);

  }

  return min;
} // => O(n)

function getHeight (rootNode) {
  // Your code here
  // if null : -1
  // if length of 1: 0
  // if length of 2: 1

  if (rootNode === null) return -1;
  let parent = [rootNode];
  let children = [];
  let height = 0;

  // We need to fill numbers. We then need to shift or push until it is empty.
  // Once empty we need to push all the children into a new array.
    // We not concerned about the values in the array only the pointers
    // Why pointers, bc we switch them to satisfy the test case

  while (parent.length) {

    while(parent.length) {
      let node = parent.pop();
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }

    let temp = parent;
    parent = children;
    children = temp;

    if (parent.length > 0) height++; // This comfirms that their is another lvl
  }

  return height;
}

function balancedTree (rootNode) {
  // Your code here
  // We can call getHeight for this.
  // We will use breadth-first traversal to traverse down the tree bc it is not a BST
  // The values themselves do not matter
  // We will use two array to keep track of the parent node and children
    // Withing the loop we will get the node and reference left and right to getHeight
      // We must account for null this time
    // It will return a number
      // If the differnce is more than 1, than return false;
      // Otherwise continue.
  // We will switch the pointers

  let parent = [rootNode];
  let children = [];

  while (parent.length) {

    while (parent.length) {
      let node = parent.pop();

      // Does not matter if valid or not
      let height1 = getHeight(node.left);
      let height2 = getHeight(node.right);

      // -1 > x < 1
      // if ((height1 - height2) > 1) return false; // be aware of negative result
      // We aren't doing this right
      if (((height1 - height2) < -1) || ((height1 - height2) > 1)) return false;
      // Does matter if valid
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }

    let temp = parent;
    parent = children;
    children = temp;
  }

  return true;
}

function countNodes (rootNode) {
  // Your code here
  // This is Binary tree not a BST
  if (rootNode === null) return 0;

  let num1 = countNodes(rootNode.left);
  let num2 = countNodes(rootNode.right);


  return (num1 + num2) + 1;
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
