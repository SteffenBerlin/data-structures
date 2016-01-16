var DoublyLinkedList = function() {
	this.head = null;
	this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value){
	var node = Node(value);

	if (this.head === null) {
		this.head = node;
		this.tail = node;
	} else {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var node = Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
};

DoublyLinkedList.prototype.removeFromHead = function() {
	var value = this.head === null ? null : this.head.value; 

  if (this.head === this.tail){
    this.head = null;
    this.tail = null;
  } else {
      this.head = this.head.next;
      this.head.prev = null;
  }

  return value;
};

DoublyLinkedList.prototype.removeFromTail = function() {
  var value = this.tail === null ? null : this.tail.value; 

  if (this.tail === this.head){
    this.head = null;
    this.tail = null;
  } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
  }

  return value;
};

DoublyLinkedList.prototype.contains = function(value) {
		
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};