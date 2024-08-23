/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

minDepth() {
  if (!this.root) return 0; // If there's no root, the depth is 0

  const minDepthHelper = (node) => {
    if (!node) return Infinity; // Base case for null nodes
    if (!node.left && !node.right) return 1; // Leaf node, depth is 1

    return 1 + Math.min(minDepthHelper(node.left), minDepthHelper(node.right));
  };

  return minDepthHelper(this.root);
}

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */


  maxDepth() {
  if (!this.root) return 0; // If there's no root, the depth is 0

  const maxDepthHelper = (node) => {
    if (!node) return 0; // Base case for null nodes
    if (!node.left && !node.right) return 1; // Leaf node, depth is 1

    return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
  };

  return maxDepthHelper(this.root);
}
  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

maxSum() {
  let result = { max: -Infinity };

  const maxSumHelper = (node) => {
    if (!node) return 0;

    let leftMax = Math.max(0, maxSumHelper(node.left));
    let rightMax = Math.max(0, maxSumHelper(node.right));

    result.max = Math.max(result.max, node.val + leftMax + rightMax);

    return node.val + Math.max(leftMax, rightMax);
  };

  maxSumHelper(this.root);
  return result.max;
}


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

nextLarger(lowerBound) {
  if (!this.root) return null;

  let smallestLarger = null;
  let toVisit = [this.root];

  while (toVisit.length > 0) {
    let currentNode = toVisit.pop();

    if (currentNode.val > lowerBound) {
      if (smallestLarger === null || currentNode.val < smallestLarger) {
        smallestLarger = currentNode.val;
      }
    }

    if (currentNode.left) toVisit.push(currentNode.left);
    if (currentNode.right) toVisit.push(currentNode.right);
  }

  return smallestLarger;
}


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

areCousins(node1, node2) {
  if (!this.root) return false;

  const findLevelAndParent = (node, target, level = 0, parent = null) => {
    if (!node) return null;
    if (node === target) return { level, parent };

    return findLevelAndParent(node.left, target, level + 1, node) ||
           findLevelAndParent(node.right, target, level + 1, node);
  };

  const node1Info = findLevelAndParent(this.root, node1);
  const node2Info = findLevelAndParent(this.root, node2);

  if (!node1Info || !node2Info) return false;
  return (node1Info.level === node2Info.level) && (node1Info.parent !== node2Info.parent);
}


  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

static serialize(tree) {
  const serializeHelper = (node) => {
    if (!node) return "null";
    return `${node.val},${serializeHelper(node.left)},${serializeHelper(node.right)}`;
  };

  return serializeHelper(tree.root);
}


  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

static deserialize(data) {
  if (!data || data === "null") return null;

  const deserializeHelper = (values) => {
    if (values[0] === "null") {
      values.shift();
      return null;
    }

    let node = new BinaryTreeNode(parseInt(values.shift()));
    node.left = deserializeHelper(values);
    node.right = deserializeHelper(values);

    return node;
  };

  let values = data.split(",");
  let root = deserializeHelper(values);
  return new BinaryTree(root);
}


  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

lowestCommonAncestor(node1, node2) {
  const findLCA = (node, p, q) => {
    if (!node || node === p || node === q) return node;

    let left = findLCA(node.left, p, q);
    let right = findLCA(node.right, p, q);

    if (left && right) return node;

    return left ? left : right;
  };

  return findLCA(this.root, node1, node2);
}

}

module.exports = { BinaryTree, BinaryTreeNode };
