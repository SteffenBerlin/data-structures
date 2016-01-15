var BinarySearchTree = function(value) {
	var binarySearchTree = {};
	binarySearchTree.left = null;
	binarySearchTree.right = null;
	binarySearchTree.value = value;

	binarySearchTree.insert = function(value) {
		if (binarySearchTree.value < value) {
			if (binarySearchTree.right === null) {
				binarySearchTree.right = BinarySearchTree(value);
			} else {
				binarySearchTree.right.insert(value);
			}
		}
		else {
			if (binarySearchTree.left === null) {
				binarySearchTree.left = BinarySearchTree(value);
			} else {
				binarySearchTree.left.insert(value);
			}
		}
	};

	binarySearchTree.contains = function(value) {
		if(binarySearchTree.value === value){
			return true;
		}
		else if (binarySearchTree.value < value && binarySearchTree.right){
			return binarySearchTree.right.contains(value);
		}
		else if (binarySearchTree.value > value && binarySearchTree.left){
			return binarySearchTree.left.contains(value);
		}	
		return false;
	};

	binarySearchTree.depthFirstLog= function(cb) {
		cb(binarySearchTree.value);
		if (binarySearchTree.left){
			binarySearchTree.left.depthFirstLog(cb);
		}
		if (binarySearchTree.right) {
			binarySearchTree.right.depthFirstLog(cb);
		}
	};

	return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
