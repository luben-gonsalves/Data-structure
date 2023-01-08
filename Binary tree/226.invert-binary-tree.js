function invertTree(root) {
  if (root === null) {
    return root;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = root.left;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
