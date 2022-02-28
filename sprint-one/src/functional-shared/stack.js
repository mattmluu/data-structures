var Stack = function() {
  this.i = 0;
  _.extend(this, stackMethods);


  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //{i:number, number:string, otherNum:otherString}

};

//implement: push(string), pop(), size()
//create keys inside this methods object
//each key will reference the method
//need a way for tthe stack function to be linked with stack methods to be able to call these methods on a n instance
//need a way to store information to a empty object/instance using this
//.extend gives instances the access to the methods obj
var stackMethods = {
  //enqueue takes string and add it to the stack object in the function above with a number key
  //this key need s to be incremented for every new enqueue call
  push: function(string) {
    this.i ++;
    this.i = string;
  },
  //takes out the oldest ley value pair which shiould equal the incremeneter
  //de-increments the pair upon invocation
  pop: function() {
    delete this.i;
    this.i --;
  },
  //returns i+1
  size: function() {
    return this.i + 1;
  }
};




