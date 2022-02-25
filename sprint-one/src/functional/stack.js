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
  };

  someInstance.pop = function() {
    //edge case: if the storage is empty, pop should not de increment the counter i
    //otherwise when calling .size, the szie may return negative values
    if (i === 0) {
      return;
    } else {
      //test suite wants to return the popped value on the call of the function
      //need to store the popped value into a var b4 removing it from storage
      var popped = storage[i];
      delete storage[i];
      i--;
      return popped;
    }
  };
  someInstance.size = function() {
    return i;
  };
  return someInstance;
};

//ex test thats failing:
//.push('a')
//.pop() --> this is expected to equal a return value of 'a'
// ^ before deleting the property, we need to store the popped property to return later

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
