var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //visualization of enqueueing
  // {} ++
  // {1: oldest} ++
  // {1: oldest, 2: new} ++
  // {1: oldest, 2: new, 3: newest}

  //visualization of dequeueing (i tihnk this is O(n) time complexity)
  // {1: oldest, 2: new, 3: newest} --
  // {2: new, 3: newest} --> subtract 1 from all keys --> {1:new, 2:newest}

  // Implement the methods below
  someInstance.enqueue = function(value) {
    i++;
    storage[i] = value;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length === 0) {
      return;
    } else {
      var removed = storage[1];
      delete storage[1];
      for (var key in storage) {
        key = (parseInt(key) + 1).toString();
      }
      return removed;
    }

  };

  someInstance.size = function() {
    return (Object.keys(storage).length);
  };

  return someInstance;
};


