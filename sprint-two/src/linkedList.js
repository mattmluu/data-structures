var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  //to remove a head/node, we need to delete that node and make the previous node point to the next node
  list.removeHead = function() {
    var remove = list.head.value;
    list.head = list.head.next;
    return remove;
  };

  list.contains = function(target) {
    var searchList = function(node) {
      if (node === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else if (node.value !== target) {
        return searchList(node.next);
      } else {
        return false;
      }
    };
    var returnVal = searchList(list.head);
    return returnVal;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



// if list.head is null, head is Node(value)
// list.tail is also list.head
// else
// current list tail's next value becomes nextNode.value? - invoke Node here
// list tail reassigned to nextNode
//Object.keys(list) === 0 {head to point to new node and tail to point to new node}
//recursively search thru the linked list
//create a function that passes in the head as an argument
//if the head is null then return false
//check current node to see if it contains the target value inside the value key
//if it does then return true
//otherwise continue to search the linked list passing in (nextNode) as an argument
//adding (5) --> head --> {val:5, next: } {val:6, next: null}
//if head null
//


/*
* Complexity: What is the time complexity of the above functions?
*/
