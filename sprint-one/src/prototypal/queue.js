var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.queue = {};
  obj.start = 0;
  obj.end = 0;
  return obj;
};

var queueMethods = {

	enqueue: function(value){
		this.queue[this.end] = value;
		this.end++;
	},

	dequeue: function(){
		if(this.end > this.start){
			this.start++;
			return this.queue[this.start-1];
		}

	},

	size: function(){
		return this.end - this.start;
	}
};


