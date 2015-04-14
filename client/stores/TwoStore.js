var newTwoStore = function(){

  // Dependency Injection
  var _oneStore;
  Dependency.autorun(function(){
    _oneStore = Dependency.get('OneStore');
  });

  // Object
  var twoStore = {
    addOneToTwo: function(){
      var num = _oneStore.addOne(2);
      return num;
    }
  };

  return twoStore;

};

// Create instance and add it
var TwoStore = newTwoStore();
Dependency.add('TwoStore', TwoStore);
