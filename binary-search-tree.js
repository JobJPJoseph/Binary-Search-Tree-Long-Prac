// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        // Your code here
        this.root = null;
    }

    insert(val, currentNode=this.root) {
        // Your code here
        if (this.root === null) {
            this.root = new TreeNode(val);
            return this.root;
        }

        if (currentNode === null) return new TreeNode(val);

        if (val < currentNode.val) {
            currentNode.left = this.insert(val, currentNode.left);
        } else {
            currentNode.right = this.insert(val, currentNode.right);
        }

        return currentNode;
    }

    search(val) {
        // Your code here
        // Do this iteratively
        // Don't use useless pointers
        let node = this.root;

        while (node !== null) {
            if (node.val === val) return true;

            if (val < node.val) {
                node = node.left;
            } else {
                node = node.right;
            }

        }

        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        // Your code here
        // Both currentNode and this.root are pointing to the object
        // The makes this.root the main and currentNode local to this function
        if (currentNode === null ) return;

        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);

    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null ) return;

        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);

    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null ) return;

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);

    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
        let numbers = [this.root]; // Queue

        while (numbers.length) {
            let node = numbers.shift();
            console.log(node.val);

            if (node.left) numbers.push(node.left);
            if (node.right) numbers.push(node.right);

        }

    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
        // We still need the original pointer pointing to the parent object
        // We are using a stack here not a queue
        let numbers = [this.root];

        while (numbers.length) {
            let node = numbers.pop();

            console.log(node.val);
            if (node.left) numbers.push(node.left);
            if (node.right) numbers.push(node.right);
        }

    }
}

module.exports = {
    BinarySearchTree,
    TreeNode
}
