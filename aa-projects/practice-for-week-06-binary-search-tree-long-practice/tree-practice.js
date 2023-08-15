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
  debugger
  if (!rootNode) return -1;
  if (!(rootNode.left || rootNode.right)) return 0;

  let edges = 0;
  let maxDepth = 0;
  let queue = [{node: rootNode, height: edges}];

  while (queue.length > 0) {

    let nodeObj = queue.pop();
    edges = nodeObj.height;
    if (maxDepth < edges) {
      maxDepth = edges;
    }

    if (nodeObj.node.left) {
      queue.push({node: nodeObj.node.left, height: edges + 1});
    }
    if (nodeObj.node.right) {
      queue.push({node: nodeObj.node.right, height: edges + 1});
    }



  }
  return maxDepth;
}

function balancedTree (rootNode) {
  // Every subtree is balanced, our root node is balanced
  if (!rootNode) return 0;
  // Check left subtree if its balanced
  let left = balancedTree(rootNode) + balancedTree(rootNode.left);
  // Check right subtree if its balanced
  let right = balancedTree(rootNode) + balancedTree(rootNode.right);
  // if all nodes/subtrees are balanced then the rootNode is balanced
  return Math.abs(left - right) <= 1;
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
let btRootUnbalanced;

btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);


console.log(balancedTree(btRootUnbalanced.right.right.right.right.right));
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
