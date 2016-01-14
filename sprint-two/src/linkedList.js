var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {    
    var value = this.head.value;

    if(this.head === this.tail){
      this.head = null;
    }
    else {
      this.head = this.head.next;
    }

    return value; 

  };

  list.contains = function(target) {
    var pointer = this.head;
    
    while(pointer !== null && pointer.value !== target){
      pointer = pointer.next;
    }
    return Boolean(pointer);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
