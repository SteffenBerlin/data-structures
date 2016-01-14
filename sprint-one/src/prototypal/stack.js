var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  
  obj.stackSize = 0;
  obj.stack = {};
  
  return obj;
};

var stackMethods = {

  push: function(value) {
		this.stack[this.stackSize] = value;
		this.stackSize++;
		console.log(this.stackSize);
		console.log(this.stack);
  },

  pop: function() {
	if (this.stackSize > 0) {
		this.stackSize--;
		return this.stack[this.stackSize];
	}
	return null;
  },

  size: function() {
 	return this.stackSize;
  }

};