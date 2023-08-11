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
    this.root = null;
  }

  insert(val, currentNode=this.root) {


    if (!currentNode) {
      let nodeToInsert = new TreeNode(val);
      if (!this.root) this.root = nodeToInsert;
      return nodeToInsert;
    };

    if (val < currentNode.val) {
      if (currentNode.left) {
        this.insert(val, currentNode.left);
      } else {
        currentNode.left = this.insert(val, currentNode.left);
      }

    } else if (val > currentNode.val) {
      if (currentNode.right) {
        this.insert(val, currentNode.right);
      } else {
        currentNode.right = this.insert(val, currentNode.right);
      }

    }


  }

  search(val) {
    let currentNode = this.root

    while (currentNode) {
      if (currentNode.val === val) return true;

      if (val < currentNode.val) {
        currentNode = currentNode.left;
        continue;
      }

      currentNode = currentNode.right;
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative

   //         4
   //       /   \
   //      2     6
   //     / \   / \
   //    1   3 5   7
  depthFirstTraversal() {

    let currentNode = this.root;
    let previous;
    let reset = false;
    let right = false;
    let resetAmt = 0;

    while (currentNode) {

      console.log(currentNode.val);
      if (resetAmt >= 2) break;
      if (currentNode.left && currentNode.right) {
        previous = currentNode;
      } else if (reset) {
        currentNode = this.root;
        reset = false;
        right = true;
      }
      if (!right) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
        right = false;
      }

      if (!currentNode) {
        currentNode = previous.right;
        reset = true;
        resetAmt++;
      }
     }
    }

}




module.exports = { BinarySearchTree, TreeNode };
