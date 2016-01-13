var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if (end > start) {
      start++;
      return someInstance[start-1];
    }
    return null;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};