

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objAtIndex = this._storage.get(index);
  //console.log(objAtIndex);
  if (objAtIndex) {
  	//console.log("check");
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
  console.log(objAtIndex);
  return objAtIndex[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var objAtIndex = this._storage.get(index);
  delete objAtIndex[k];
  this._storage.set(index, objAtIndex);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


