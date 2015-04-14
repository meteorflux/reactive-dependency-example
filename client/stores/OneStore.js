var newOneStore = function(){

  // Dependency Injection
  var _twoStore;
  Dependency.autorun(function(){
    _twoStore = Dependency.get('TwoStore');
  });

  // Object
  var oneStore = {
    addOne: function(num){
      return num + 1;
    },
    addTwoToThree: function(){
      return _twoStore.addOneToTwo() + 2;
    }
  };

  return oneStore;

};

// Create instance and add it
var OneStore = newOneStore();
Dependency.add('OneStore', OneStore);
