var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var result = false;

	var helper = function(node) {
		if (!result) {
			if (node.value === target) result = true;

			if (node.children) {
				for (var i = 0; i < node.children.length; i++) {
					helper(node.children[i]);
				}
			}
		}
	};

	helper(this);
	
	return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
