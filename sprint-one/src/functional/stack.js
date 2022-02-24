var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //Inputs string
    //upon execution the input will be added to the function's instance obj
    //everytime this method is called, a numeric key should be created in the
    //storage object and the value should be binded as a property to that key
    i++;
    storage[i] = value;
    //{1:val1}
    //{1:undefined}
    //{} i = 0
    //{1:val2}
    //
  };

  someInstance.pop = function() {
    //edge case: if the storage is empty, pop should not de increment the counter i
    //otherwise when calling .size, the szie may return negative values
    if (i === 0) {
      return;
    } else {
      storage[i] = undefined;
      delete storage[i];
      i--;
    }
  };

  someInstance.size = function() {
    return i;
  };

  return someInstance;
};

// {}  <-- using .push
// {1: oldest}
// {1: oldest, 2: old}
// {1: oldest, 2: old, 3: new}
// {1: oldest, 2: old, 3: new, 4: newest}   <--last one in is first one out
// {1: oldest, 2: old, 3: new} <-- using .remove
// {1: oldest, 2: old, 3: new}
// {1: oldest, 2: old}
// {1: oldest}
// {}

//since last one in and first one out, .size should always give the correct size
//even when using .pop
