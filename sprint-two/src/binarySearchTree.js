var BinarySearchTree = function(value) {
	var binarySearchTree = {};
	binarySearchTree.left = null;
	binarySearchTree.right = null;
	binarySearchTree.value = value;

	binarySearchTree.insert = function(value) {
		if (this.value < value) {
			if (this.right === null) {
				this.right = BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		}
		else {
			if (this.left === null) {
				this.left = BinarySearchTree(value);
			} else {
				this.left.insert(value);
			}
		}
	};

	binarySearchTree.contains = function(value) {
		if(this.value === value){
			return true;
		}
		else if (this.value < value && this.right){
			return this.right.contains(value);
		}
		else if (this.value > value && this.left){
			return this.left.contains(value);
		}	
		return false;
	};

	binarySearchTree.depthFirstLog= function(cb) {
		cb(this.value);
		if (this.left){
			this.left.depthFirstLog(cb);
		}
		if (this.right) {
			this.right.depthFirstLog(cb);
		}
	};

	return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
