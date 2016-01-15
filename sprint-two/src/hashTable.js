

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objAtIndex = this._storage.get(index);
  this._count++;

  if (this._count/this._limit >= 0.75) {
    this.double();
  }

  if (objAtIndex) {
  	objAtIndex[k] = v;
  	this._storage.set(index, objAtIndex);
  }
  else {
  	var obj = {};
  	obj[k] = v;
    this._storage.set(index, obj);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objAtIndex = this._storage.get(index);
  
  return objAtIndex[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objAtIndex = this._storage.get(index);
  this._count--;
  delete objAtIndex[k];
  this._storage.set(index, objAtIndex);

  if (this._count/this._limit <= 0.25 && this._limit > 8) {
    this.halve();
  }
};

HashTable.prototype.double = function() {
  this._limit *= 2;
  this._count = 0;

  var oldLimitedArray = this._storage;
  this._storage = LimitedArray(this._limit);

  for(var i = 0; i < this._limit/2; i++) {
    var obj = oldLimitedArray.get(i);
    if (obj) {
      for(var key in obj) {
        this.insert(key, obj[key]);
      }
    }
  }
};

HashTable.prototype.halve = function() {
  this._limit /= 2;
  this._count = 0;
  
  var oldLimitedArray = this._storage;
  this._storage = LimitedArray(this._limit);

  for(var i = 0; i < this._limit*2; i++) {
    var obj = oldLimitedArray.get(i);
    if (obj) {
      for(var key in obj) {
        this.insert(key, obj[key]);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


