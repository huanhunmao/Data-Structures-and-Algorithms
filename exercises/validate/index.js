// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // Base case: if the node is null, it's valid
    if(!node) return true 

    // Check if the node's value is within the valid range
    if(min !== null && node.data <= min || max !== null && node.data >= max) return false 

    // 递归验证 Recursively validate the left and right subtrees
  // For the left subtree, update the maximum allowed value (max) 左子树 更新 允许 最大值
  // For the right subtree, update the minimum allowed value (min) 右子树 更新 允许 最小值
    return (
        validate(node.left, min, node.data) &&
        validate(node.right, node.data, max)
    )
}

module.exports = validate;
