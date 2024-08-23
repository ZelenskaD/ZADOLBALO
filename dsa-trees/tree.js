/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

sumValues() {
    if (!this.root) return 0; // If there's no root, return 0

    let totalSum = 0;
    let toVisit = [this.root]; // Start with the root node

    while (toVisit.length > 0) {
      let currentNode = toVisit.pop(); // Get the last node from the stack
      totalSum += currentNode.val; // Add the value of the current node to the total sum

      // Add all the children of the current node to the stack
      for (let child of currentNode.children) {
        toVisit.push(child);
      }
    }

    return totalSum;
  }


 countEvens() {
    if (!this.root) return 0; // If there's no root, return 0

    let evenCount = 0;
    let toVisit = [this.root]; // Start with the root node

    while (toVisit.length > 0) {
      let currentNode = toVisit.pop(); // Get the last node from the stack

      // Check if the current node's value is even
      if (currentNode.val % 2 === 0) {
        evenCount++;
      }

      // Add all the children of the current node to the stack
      for (let child of currentNode.children) {
        toVisit.push(child);
      }
    }

    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root) return 0; // If there's no root, return 0

    let greaterCount = 0;
    let toVisit = [this.root]; // Start with the root node

    while (toVisit.length > 0) {
      let currentNode = toVisit.pop(); // Get the last node from the stack

      // Check if the current node's value is greater than lowerBound
      if (currentNode.val > lowerBound) {
        greaterCount++;
      }

      // Add all the children of the current node to the stack
      for (let child of currentNode.children) {
        toVisit.push(child);
      }
    }

    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
