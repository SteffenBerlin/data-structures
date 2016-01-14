var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queue = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
	this.queue[this.last] = value;
	this.last++;
};

Queue.prototype.dequeue = function() {
	if(this.last > this.first){
		this.first++;
		return this.queue[this.first-1];
	}
	return null;
};

Queue.prototype.size = function() {
	return this.last - this.first;
};