var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // set value as target of a node
  var child = Tree(value);
  // add node as child to tree
  this.children.push(child);
};

//
treeMethods.contains = function(target) {
  // base case - if current obj has value of target
  // return true
  // var searchTree = function(target) {
  //   if (this.value === target) {
  //     return true;
  //   } else {
  //     for (var i = 0; i < this.children.length; i++) {
  //       return searchTree(this.children[i]);
  //     }
  //   }
  // };
  // var result = searchTree(target);
  // return result;
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
var tree = Tree();
tree.addChild(5);
tree.contains(5);
*/



/*
 * Complexity: What is the time complexity of the above functions?
 */
