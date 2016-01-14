var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(Stack.stackMethods);
  
  obj.size = 0;
  obj.stack = {};
  
  return obj;
};

Stack.stackMethods.push = function(value) {
	this.stack[this.size] = value;
	this.size++;
};

Stack.stackMethods.pop = function() {
	if (this.size > 0) {
		this.size--;
		return this.stack[this.size+1];
	}
	return null;
};

Stack.stackMethods.size = function() {
	return this.size;
};
