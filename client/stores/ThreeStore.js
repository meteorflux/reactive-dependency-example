var newThreeStore = function(){

  // Dependency Injection
  var _oneStore, _twoStore;
  Dependency.autorun(function(){
    _oneStore = Dependency.get('OneStore');
    _twoStore = Dependency.get('TwoStore');
  });

  // Object
  var threeStore = {
    addThreeToFive: function(){
      return _oneStore.addTwoToThree() + _twoStore.addOneToTwo();
    }
  };

  return threeStore;

};

// Create instance and add it
var ThreeStore = newThreeStore();
Dependency.add('ThreeStore', ThreeStore);
