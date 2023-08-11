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
    let stack = [this.root];

    while (stack.length > 0) {
      let node = stack.shift();

      console.log(node.val);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }

    }
  }

  // Depth First Traversal - Iterative

   //         4
   //       /   \
   //      2     6
   //     / \   / \
   //    1   3 5   7
  depthFirstTraversal() {
    // stack with root node
    let stack = [this.root];

    while (stack.length > 0) {
      let node = stack.pop();

      console.log(node.val);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }

    }
    }

}




module.exports = { BinarySearchTree, TreeNode };
