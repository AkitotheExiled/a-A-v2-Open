const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Traverse only left side
  // return the last value on the left side

  if (!rootNode.left) return rootNode.val;

  return findMinBST(rootNode.left);
}

function findMaxBST (rootNode) {
  // Traverse only right side
  // return the last value on the right
  if (!rootNode.right) return rootNode.val;

  return findMaxBST(rootNode.right);
}

function findMinBT (rootNode) {
  // Your code here
  let stack = [rootNode];
  let min;
  while (stack.length > 0) {
    let node = stack.pop();

    if (!min || node.val < min) {
      min = node.val;
    }

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return min;
}

function findMaxBT (rootNode) {
  let stack = [rootNode];
  let max;

  while (stack.length > 0) {
    let node = stack.pop();

    if (!max || node.val > max) {
      max = node.val;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return max;
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) return -1;
  if (!(rootNode.left || rootNode.right)) return 0;
  debugger
  let edges = 0;
  let queue = [rootNode];

  while (queue.length > 0) {

    let node = queue.shift();

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }

    if (node.left || node.right) edges++;

  }
  return edges;
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  let stack = [rootNode];
  let count = 0;
  while (stack.length > 0) {
    let node = stack.pop();
    count++;

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return count;
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
let bstRootBig;

bstRootBig = new TreeNode(8);
bstRootBig.left = new TreeNode(3);
bstRootBig.left.left = new TreeNode(2);
bstRootBig.left.left.left = new TreeNode(1);
bstRootBig.left.right = new TreeNode(5);
bstRootBig.left.right.left = new TreeNode(4);
bstRootBig.left.right.right = new TreeNode(7);
bstRootBig.left.right.right.left = new TreeNode(6);
bstRootBig.right = new TreeNode(10);
bstRootBig.right.right = new TreeNode(11);
bstRootBig.right.right.right = new TreeNode(12);
bstRootBig.right.right.right.right = new TreeNode(15);
bstRootBig.right.right.right.right.left = new TreeNode(14);

getHeight(bstRootBig.left);
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
