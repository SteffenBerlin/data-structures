describe('doublyLinkedList', function() {
	var doublyLinkedList;

	beforeEach(function() {
		doublyLinkedList = new DoublyLinkedList();
	});

	it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have functions "addToTail", "addToHead", "removeFromHead", "removeFromTail", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.addToHead).to.be.a("function");
    expect(doublyLinkedList.removeFromHead).to.be.a("function");
    expect(doublyLinkedList.removeFromTail).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail', function() {
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.tail.value).to.equal(3);
  });

  it('should designate a new head', function() {
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.head.value).to.equal(9);
    doublyLinkedList.addToHead(2);
    expect(doublyLinkedList.head.value).to.equal(2);
  });

  it('should remove the head from the list when removeFromHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeFromHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return null if removeHead called when empty', function(){
    var value = doublyLinkedList.removeFromHead();
    expect(value).to.equal(null);
  });

  it('should remove the tail from the list when removeFromTail is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.removeFromTail();
    expect(doublyLinkedList.head.value).to.equal(4);
  });

  it('should return null if removeHead called when empty', function(){
    var value = doublyLinkedList.removeFromHead();
    expect(value).to.equal(null);
  });
});

  