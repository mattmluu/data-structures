var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0;

  //visualization of enqueueing
  // {} ++
  // {1: oldest} ++
  // {1: oldest, 2: new} ++
  // {1: oldest, 2: new, 3: newest}

  //visualization of dequeueing (O(n) time complexity)
  // {1: oldest, 2: new, 3: newest} --
  // {2: new, 3: newest} --> subtract 1 from all keys --> {1:new, 2:newest}

  // Implement the methods below
  someInstance.enqueue = function(value) {
    i++;
    storage[i] = value;
  };

  someInstance.dequeue = function() {
    if (i === 0) {
      return;
    } else {
      //storage[1] = storage[2], storage[2] = storage[3]
      //storage[i-1] = storage[i]
      //edge case: if i = 0 or the first key, dont do anything
      for (var key in storage) {
        if (key !== '1') {
          if (storage[key] === undefined) {
            delete storage[parseInt(key) - 1];
          } else {
            storage[parseInt(key) - 1] = storage[key];
          }
        }
        i--;
      }

      /*
      var removed = storage[1];
      for (var key in storage) {
        storage[key] = (parseInt(key) + 1).toString();
      }
      i--;
      delete storage[1];
      return removed;
    }
    */
    }
  };

  someInstance.size = function() {
    return i;
  };

  return someInstance;
};

//ex test:
//{}, i = 0
//++'a'
//{1:a} i = 1
//++'b'
//{1:a, 2:b} i = 2
//--
// i != 0
// removed = 'a'
// {2:b} i = 2
//<-----issue is that i cant rename keys --->
// need to implement dequeue differently
//
